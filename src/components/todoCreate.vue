<script setup>
import { ref } from 'vue'; 
import { useStore } from 'vuex';
let newTodo = ref('')
 
let props = defineProps({
  createTodo: Function,
})
 
const handleCreateTodo = ()=>{
  let title = newTodo.value.trim()
    if (title.length > 0) {
      props.createTodo(title);
      newTodo.value = "";
    }else{
      alert("輸入不能為空");
    }
}
</script>

<template>
  <div id="create-todo">
    <span>請輸入代辦事項：</span>
    <input
      id="new-todo"
      autocomplete="off"
      type="text"
      v-model="newTodo"
      @keyup.enter="handleCreateTodo"
    />
    <button @click="handleCreateTodo">加入</button>
  </div>
</template>
