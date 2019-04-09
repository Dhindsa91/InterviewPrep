const posts = [
    {body: "this is post one", title:"post one"}
    ,
    {body: "this is post two", title:"post two"}
];


function getPosts(){
    setTimeout(()=>{
        let output ='';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 2000);
}

function createPost(post, callback){

setTimeout(()=> {

        posts.push(post);
        callback();
},5000);


}

getPosts();

createPost({title: "post three", body:"this is post 3"}, getPosts);


// Callback = passing a method into a method

