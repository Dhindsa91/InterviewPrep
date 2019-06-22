// let p = new Promise(function(resolve, reject){
//         let a = 1+1;

//         if(a==2){
//             resolve('SUCCESS')
//         }else{
//             reject('FAILED')
//         }

// })
// //IF THAT COMPLETED THEN
// p.then((message) => {
//     console.log('THIS IS A MESSAGE ' +message);
// }).catch(err=>console.log(err));


// var a = true;
// var b = false;

// b ? console.log("true") : console.log("false");

// setTimeout(function(){
// for(i=0;i<2;i++){
//  console.log('HELLO!')
// }}, 1000);


// const post = [
//     {title: "POST", post: "THIS IS A POST"},
//     {title: "POST 2", post: "THIS IS A POST 2"}
// ]

// // function getPosts(){
// //     setTimeout(function(){
     
// //       let output = '';
// //       post.forEach((post)=>{
// //           output +=`<li>${post.title}<li>`;
// //       })
// //       document.body.innerHTML = output;
// //     }, 1000)

// // }
// // function createPost(p, callback){
// //     setTimeout(()=>{
// //         post.push(p);
// //         callback();
// //     }
    
// //     ,2000)
        
// // }

// function createPost(p){
// return new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         post.push(p);

//         const error = false;
//         if(!error){
//             resolve();
//         }else{
//             reject('Errror: something went wrong ')
//         }

//     },1000)
// })
// }


// // getPosts();
// createPost({title: 'Post Three', post:"This is Post 3"}).then(getPosts).catch(err=>console.log("ERROR"));

// //Promise.All()

// const promise1 =  5;//new Promise('Hello');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve,2000,'Goodbye')
// });

// // const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data => console.log(data.userId) );

// // Promise.all([promise1,promise2,promise3, promise4]).then((values)=>console.log(values)).catch(err=>console.log("error"));


// var loading = 2;

// function testLoad(){
//     if(loading=1) return

//     return console.log(loading + 5);
// }

function addNum(a , b, c){

console.log(a+b+c);


}
var num = [3,4,5];
addNum(...num);

console.log(...num);


var meats = ["bacon", "ham"];
var food = ["apples","oranges","rice",...meats];

console.log(food)

var obj ={
    num:2
}

var addToThis = function(a,b,c){

    return a + this.num + b + c;
}

console.log(addToThis.call(obj, 2, 3, 5));

var arr = [1,2,3];
console.log(addToThis.apply(obj, arr));