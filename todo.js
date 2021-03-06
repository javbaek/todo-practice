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
  //// TODO: add functionality so user do not have to enter array numbers
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
  deleteTodo: function(position) {
    todoList.deleteTodos(position);
    view.displayTodos();
  },
  toggleCompleted: function(position) {
    todoList.toggleCompleted(position);
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
      todoLi.className = 'col-12'
      var todo = todoList.todos[i];
      var todoText = todo.todoText;
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = todoText;
        todoLi.style.setProperty("text-decoration", "line-through");
      } else {
        todoTextWithCompletion = todoText;
      }

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
      todoLi.appendChild(this.createDeleteButton());
      todoLi.appendChild(this.createToggleButton());
    }
  },

  createToggleButton: function() {
    var toggleButton = document.createElement('button');
    toggleButton.id = 'toggleButton';
    toggleButton.className = "col-2";
    var toggleImage = "url('./image/check-box-checked-white.png')"
    //var toggleImage = "url('./image/check-box-white.png')"
    toggleButton.style.backgroundImage = toggleImage;
    return toggleButton;
  },

  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.id = 'deleteButton';
    deleteButton.className = "col-2";
    var deleteImage = "url('./image/delete-white.png')"
    deleteButton.style.backgroundImage = deleteImage;
    return deleteButton;
  },

  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');
    var todosLi = document.querySelector('li');
    // Get the element that was clicked on
    todosUl.addEventListener('click', function(event) {
      var elementClicked = event.target;
      // Check if elementClicked is a delete button
      if (elementClicked.id === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      // check if element clicked is toggle item
    } else if (elementClicked.id === 'toggleButton') {
        handlers.toggleCompleted(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();

function test(ourFunction){
  debugger;
  ourFunction();
}
