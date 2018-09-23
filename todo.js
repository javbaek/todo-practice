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
  deleteTodo: function(position) {
    todoList.deleteTodos(position);
    view.displayTodos();
  },
  toggleCompleted: function(position) {
    todoList.toggleCompleted(position);
    view.displayTodos();
  },
//The old toggleCompleted function
/*  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },*/
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
      todoLi.className = 'list'
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      if (todo.completed === true) {
        todoTextWithCompletion = '[x] ' + todo.todoText;
      }else {
        todoTextWithCompletion = '[ ] ' + todo.todoText;
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
    toggleButton.textContent = 'Toggle';
    toggleButton.className = 'toggleButton';
    return toggleButton;
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = '';
    //deleteButton.backgroundImage = './image/delete-white.png';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');
    var todosLi = document.querySelector('li');
    // Get the element that was clicked on
    todosUl.addEventListener('click', function(event) {
      var elementClicked = event.target;
      // Check if elementClicked is a delete button
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      // add functionality for toggling individual todos by clicking them   //TODO: Janus
      // check if element clicked is list item
    } else if (elementClicked.className === 'toggleButton') {
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
