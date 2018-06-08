var todos = ['item 1'];

function displayTodos() {
  console.log('My todos:', todos);
}

function addTodo(newItem) {
  todos.push(newItem);
  //push.todos(newItem);
  displayTodos();
}

function changeTodo(item, changedItem) {
  todos[item] = changedItem;
  console.log(changedItem);
}

function deleteTodos(fromItem, numberOfItems){
  todos.splice(fromItem, numberOfItems);
  displayTodos();
}
