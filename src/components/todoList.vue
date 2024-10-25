<script setup>
import TodoItem from './todoItem.vue';
defineProps({
  todos:Array,
})
</script>

<template>
  <ul id="todolist">
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"></todo-item>
  </ul>
</template>
<style scoped>

</style>