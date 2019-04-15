const addForm = document.querySelector('.add');  // get the add form
const todoList = document.querySelector('.todos'); // get the ui todo list

// add the new todo to the ui
const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    todoList.innerHTML += html; // add to the existing ui list content
}


// submit new todo form
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim(); // trim to remove extra spaces
  // prevent entries of zero length
  if(todo.length) {
    generateTemplate(todo); // add a new todo to the ui
    addForm.reset(); // clear the input field using a method of the form object
  }

});

// delete todos -- add event listener to ul, use event delegation
todoList.addEventListener('click', e => {
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});
