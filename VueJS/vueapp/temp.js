<template>

  <div id="app">
    <Header />
  <AddTodo v-on:add-todo="addTodo"/>
   <Todos v-bind:todosx="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
// export default, import in App, add to components





import Todos from './components/Todos.vue';
import Header from './components/layout/Header.vue';
import AddTodo from './components/AddTodo.vue';
import Axios from 'axios';
import { appendFile } from 'fs';

export default {
  name: 'app',
  components: {
    Todos,
    Header,
    AddTodo

  }, data(){
    return{
      todos: 
      []
    }
  }
  ,methods:{
    deleteTodo(id){
        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
     .then(res=>this.todos = this.todos.filter(x=>x.id !== id));

    },
    //POST
    addTodo(newTodo){

    const {title, completed} = newTodo;
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed,
    })
    .then(res => this.todos = [...this.todos, res.data])
    .catch(err=>console.log(err))

    t
    }
    
  },
  //GET
  created: function(){
    console.log("hiii");
      Axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => this.todos = res.data)
      .catch(err => console.log(err));
  }

}
</script>

<style>

/* global style*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
