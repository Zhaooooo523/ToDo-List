<script setup>
import { inject } from 'vue';

const deleteTodo = inject('deleteTodo')
 
const props = defineProps({
  todo: Object,
});
 
const handleDeleteTodo = (id) => {
  deleteTodo(id);
};

</script>

<template>
  <li>
    <div class="todo" :class="{ done: todo.done }">
      <div class="display">
        <input class="check" type="checkbox" v-model="todo.done" />
       <span class="title">{{ todo.title }}</span>
        <button @click="handleDeleteTodo(todo.id)" class="btn">刪除</button>
      </div>
    </div>
  </li>
</template>
<style>
.done{
  text-decoration:line-through;
  color: black;
}
</style>
