var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodos: function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        //get number of completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        //Case 1: if everything is true, make everything false
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        //Case 2: otherwise, make everything true
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }
};
var handlers = {
  addTodoButton: function() {
    var addTodoText = document.getElementById('addTodoText');
    todoList.addTodo(addTodoText.value);
    addTodoText.value = '';
    view.displayTodos();
  },
  addTodoInput: function() {
    if(event.key === 'Enter' ) {
      this.addTodoButton();
    }
    view.displayTodos();
  },
  //add functionality so user do not have to enter array numbers
  changeTodoButton: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodoInput: function() {
    if(event.key === 'Enter' ) {
      this.changeTodoButton();
    }
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodos(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      if (todo.completed === true) {
        todoTextWithCompletion = '[x] ' + todo.todoText;
      }else {
        todoTextWithCompletion = '[ ] ' + todo.todoText;
      }
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
      todoLi.appendChild(this.createDeleteButton());
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
};
function test(ourFunction){
  debugger;
  ourFunction();
}
