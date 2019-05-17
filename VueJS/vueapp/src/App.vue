<template>
  <div id="app">
 
   <Todos v-bind:todos="todos"/>
  </div>
</template>

<script>
// export default, import in App, add to components



import Todos from './components/Todos.vue'

export default {
  name: 'app',
  components: {
    Todos

  }, data(){
    return{
      todos: 
      [
        {
            id: 1,
            title: "Todo One",
            completed: false
        },
         {
            id: 2,
            title: "Todo Two",
            completed: true
        },
         {
            id: 3,
            title: "Todo Three",
            completed: false
        }

      ]
    }
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
