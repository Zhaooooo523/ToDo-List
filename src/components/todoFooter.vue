<script setup>
import { computed } from 'vue';
import Status from './State.vue';
const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
  clearDone: Function,
  changeStatus: Function,
});
 
const done = computed(() => {
  return props.todos.filter((item) => item.done == true).length;
});
 
const undone = computed(() => {
  return props.todos.filter((item) => item.done == false).length;
});



</script>

<template>
 <div id="todo-stats">
    <span class="todo-count">
      <span class="number">{{ undone }}</span>
      <span class="word">項待完成</span>
    </span>
    <span>
      <Status/>
    </span>
    <span class="todo-clear">
      <a @click="clearDone()">
        刪除 <span>{{ done }}</span> 已完成事項
      </a>
    </span>
  </div>
</template>
