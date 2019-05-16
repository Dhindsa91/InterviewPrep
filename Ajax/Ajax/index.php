<?php

include 'db.php';



?>
<!DOCTYPE html>
<html>
<head>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
     <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.0.min.js"></script>
<script>
    

//THIS IS HOW YOU LOAD IN DATA FROM A SERVER 
$(document).ready(function(){

    $("#btn").click(function(){
        $("#test").load("test.txt");


    });

});

$(document).ready(function(){
    var commentCount = 2;

    $("#btn2").click(function(){
    var commentCount = commentCount +2;
        $("#comments").load("load-comments.php", {
                commentNewCount: commentCount,
            })


        })

    });


    $(document).ready(function(){

    
    // $("#btn3").click(function(){
    //     $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){                    //data is holding the test.txt data

    //         $("#test2").html(data);
    //     })
    // })


        $("input").keyup(function(){
            var name = $("input").val();
            $.post("suggestions.php"), {
                    suggestion: name
            },function(data, status){

                $("#test3").html(data);

            })                       

        })


})


    
</script>

</head>
<body>

<div id='test'>This is our first sample post!</div>
<button id='btn'>Use Ajax</button>

<div id='comments'></div>
<button id='btn2' class="btn btn-primary">Show Comments </button>




<div id='test2'>This is our second sample post!</div>
<button id='btn3'>Use Ajax 2</button>

<input type="text" name="name">
<p id="test3"></p>








<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>