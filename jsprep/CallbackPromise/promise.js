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

 //Return promise use .then or .catch etc run multiple functions            


/** createPost({title: 'Post Three', body:'this is post three'})
.then(getPosts)
.catch(err=> console.log(err));

Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>
setTimeout(resolve, 2000, 'goodbye'));


const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

Promise.all([promise1,promise2,promise3, promise4]).then((values)=>console.log(values));

*/

// Async Await handles promises async function has await that handles the promise

async function init(){

    await createPost({title: 'Post Three', body:'this is post three'}).catch(err=>console.log(err));

    getPosts();

}

init();