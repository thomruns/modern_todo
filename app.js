const addForm = document.querySelector('.add');
const todoList = document.querySelector('.todos');

// add the new todo to the ui
const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    todoList.innerHTML += html; // add to the list content
}


// submit new todo form
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim(); // trim to remove extra spaces
  // prevent entries of zero length
  if(todo.length) {
    generateTemplate(todo); // add a new todo to the ui
    addForm.reset(); // clear the input field using a form method
  }

});
