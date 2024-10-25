export default{
    removeTodo({ commit }, payload) {
        setTimeout(() => {
          commit('removeTodo', payload);
        }, 100);
      },
};