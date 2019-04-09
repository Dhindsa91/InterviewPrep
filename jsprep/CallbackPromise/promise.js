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
    }, 1000);
}

function createPost(post){
 return new Promise((resolve,reject)=>{
    setTimeout(()=> {

        posts.push(post);


        const error = true;
if(!error){
    resolve();
} else {
    reject('Error: something went wrong');
}
       
},3000);

 });

}

// createPost({title: 'Post Three', body:'this is post three'})
// .then(getPosts)
// .catch(err=> console.log(err));

//Promise.all
const promise1 = Promise.resolve('Hello World');