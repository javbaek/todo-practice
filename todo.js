var todoList = {
  todos: [],
  displayTodos: function(){
    console.log('My todos: ', todoList.todos);
  },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, newValue){
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodos: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
