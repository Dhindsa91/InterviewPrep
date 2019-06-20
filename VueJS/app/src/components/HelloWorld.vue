<template>
  <div class="hello">

    <div class="left"><h1>{{title}}</h1>
    <form @submit.prevent='addLink'>
      <input class="link-input" type="text" v-model="newLink">

    </form>
    <ul>
      <li v-for="(link, index) in links" v-bind:key="index">{{link}}</li>
      

      </ul>
    
    
    
    </div>
    <div class="right">
      <Stats />
    </div>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';
import Stats from './Stats';



export default {
  name: 'HelloWorld',
  computed: {
    ...mapState([
      "title",
      "links"
    ]),
    data(){
      return{
        newLink: ''
      }


    }
  //other properties
  },
  components:{
    Stats
  },
  methods: {
    ...mapMutations([
      'ADD_LINK'
    ]),
    addLink: function(){
      this.ADD_LINK(this.newLink);
      this.newLink = '';
    }
  }
}
    
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }
  .link-input{
    border: none;
    padding: 20px;
    width: calc(100%-40);
    box-shadow: 0 5px 5px lightgray;
    margin-bottom: 50px;
    outline: none;
  }

</style>