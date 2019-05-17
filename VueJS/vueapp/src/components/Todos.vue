<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todosx">
      <TodoItem v-bind:todox="todo" v-on:del-todo="$emit('del-todo',todo.id)"/>
    </div>
  </div>
</template>


<script>
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todosx"]
};
</script>

<style scoped>
</style>