<script setup>
import { computed} from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const changeStatus = (state) => {
  store.commit('changeTodo', state);
};
const props = defineProps({
  changeStatus: Function,
});
</script>

<template>
   <a>
    <span
      @click="changeStatus('all')"
      :class="{ active: store.state.visible == 'all' }"
    >
      全部
    </span>
    <span
      @click="changeStatus('active')"
      :class="{ active: store.state.visible == 'active' }"
      >未完成</span
    >
    <span
      @click="changeStatus('complete')"
      :class="{ active: store.state.visible == 'complete' }"
      >已完成</span
    >
  </a>
</template>

<style scoped>

span {
  padding: 7px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid white;
  margin-left: 2px;
}
span:nth-child(1) {
  margin-left: 70px;
}
span:hover {
  cursor: pointer;
  border: 1px solid rgb(187, 187, 187);
  border-radius: 10px;
  background-color: rgb(244, 244, 244);
}
.active {
  border: 1px solid rgb(187, 187, 187);
  border-radius: 10px;
  background-color: rgb(244, 244, 244);
}

</style>
