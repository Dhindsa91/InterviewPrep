<template>

<div class="todo-item">
    <p>{{todo.title}}</p>
</div>



</template>


<script>
export default {
    name: "TodoItem",
    props: ["todo"]


}
</script>

<style scoped>

</style>