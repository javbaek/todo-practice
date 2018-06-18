var todos = ['todo 1'];

function displayTodos() {
  console.log('My todos:', todos);
}

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

function changeTodo(position, newValue) {
  todos[position] = newValue;
  console.log(newValue);
}

function deleteTodos(position){
  todos.splice(position, 1);
  displayTodos();
}
//test
