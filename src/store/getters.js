export default{
    all(state) {
        return state.todos;
      },
      active(state) {
        return state.todos.filter((todo) => !todo.done);
      },
      done(state) {
        return state.todos.filter((todo) => todo.done);
      },
      filterTodo(state) {
        if (state.state == 'all') {
          return state.todos;
        } else if (state.state == 'active') {
          return state.todos.filter((todo) => !todo.done);
        } else if (state.state == 'complete') {
          return state.todos.filter((todo) => todo.done);
        }
      }
};