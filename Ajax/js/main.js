// var thePets = [{
//         "name": 'meowsalot',
//         "species": "cat",
//         "favFood": "tuna"
//     },
//     {
//         "name": 'barkey',
//         "species": "dog",
//         "favFood": "carrots"
//     }
// ]

//thePets[1].favFood

var pageCounter = 1;
var btn = document.getElementById('btn');
var ai = document.getElementById('animal-info');

btn.addEventListener("click", function () {

    var ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = function () {

        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);

    };

    ourRequest.send();
    pageCounter++;
    if (pageCounter>3){

        btn.classList.add("hide-me");

    }

});

function renderHTML(data) {

    var htmlString = '';

    for (i = 0; i < data.length; i++) {

        htmlString += "<p>" + data[i].name + "<p>";

    }

    ai.insertAdjacentHTML('beforeend', htmlString);

}