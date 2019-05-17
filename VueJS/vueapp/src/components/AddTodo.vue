<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title">
      <input type="submit" value="submit" class="btn">
    </form>
  </div>
</template>

<script>
import uuid from "uuid";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
        e.preventDefault();

      const newTodo = {
    
        title: this.title,
        completed: false
      }
      this.$emit("add-todo", newTodo);
      this.title = '';
    }
  }
};
</script>

<style>
input[type="text"] {
  flex: 10;
  padding: 5px;
}

input[type="submit"] {
  flex: 2;
}
</style>