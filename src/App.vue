<script setup>
import TodoHeader from './components/todoHeader.vue';
import todoCreate from './components/todoCreate.vue'; 
import TodoList from './components/todoList.vue';
import TodoFooter from './components/todoFooter.vue';
import { computed,provide } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
 
let todos = computed(() => store.getters.filterTodo);
 
const createTodo = (title) => {
  const todo = {
    id: Math.random(),
    title,
    done: false,
  };
  store.commit('createTodo', todo);
};
 
const deleteTodo = (id) => {
  store.dispatch('removeTodo', { id });
};
 
const clearDone = () => {
  store.commit('clearTodo');
};
 
provide('deleteTodo', deleteTodo);
</script>

<template>
<div id="todoapp">
    <todo-header />
    <div class="content">
      <!-- <todo-create @createTodo="createTodo"/> -->
      <todo-create :createTodo="createTodo" />
      <todo-list :todos="todos" />
      <todo-footer :todos="todos" :clearDone="clearDone" />
    </div>
  </div>
</template>
<style scoped>

.input{
  margin-bottom: 30px; 
}
.todo-item.done .todo-content input {
	text-decoration: line-through;
	color: var(--grey);
}
</style>
