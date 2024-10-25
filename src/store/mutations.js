export default{
    createTodo(state, payload) {
        state.todos.push(payload);
      },
      removeTodo(state, payload) {
        state.todos = state.todos.filter((todo) => todo.id != payload.id);
      },
      clearTodo(state, payload) {
        let todos = state.todos;
        for (let index = todos.length - 1; index >= 0; index--) {
          const todo = todos[index];
          if (todo.done) {
            todos.splice(index, 1);
          }
        }
      },
      changeTodo(state, payload) {
        state.state = payload;
        state.visible = payload;
        console.log('state.visible', state.visible);
      },
    };