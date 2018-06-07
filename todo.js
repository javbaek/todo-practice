//function storeTodos(item) {
  var todos = [];
//}

function displayTodos() {
  console.log('My todos:', todos);
}

function addTodo(newItem) {
  push.todos(newItem);
  displayTodos();
}

function changeTodo(item, changedItem) {
  todos[item] = changedItem;
}

function deleteTodos(fromItem, numberOfItems){
  splice.todos(fromItem, numberOfItems);
}
