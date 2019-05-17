<template>

<div class="todo-item" v-bind:class="{'is-complete':todox.completed}">     <!-- binding the class on the condition that complete is true -->
    <p>
        <input type="checkbox" v-on:change="markComplete">    <!-- v:on used to check for events-->
        {{todox.title}}
        <button @click="$emit('del-todo',todox.id)" class="del">x</button>
        </p>
</div>



</template>


<script>
export default {
    name: "TodoItem",
    props: ["todox"],  //passing on the todox property
    methods: {
        markComplete(){
           this.todox.completed = !this.todox.completed;
        },
    }

}
</script>

<style scoped>

.is-complete{
    text-decoration: line-through;
}

.todo-item{
    background-color: lightgray;
    padding: 0;
    margin:0;

}


</style>