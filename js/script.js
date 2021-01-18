/*
  VARIABLES
*/
const input = document.querySelector('input');
const textReflect = document.querySelector('.mirror');
const list = document.querySelector('.list');
const btn = document.querySelector('button');

let todos = [];

/*
  FUNCTIONS
*/

// Create and remove elements
const createItems = () => {
  const len = todos.length;

  list.innerHTML = '';

  for (let i = 0; i < len; i++) {
    //create <li>
    const listItem = document.createElement('li');

    // update text of <li> with text from todos array item
    listItem.textContent = todos[i];

    //create close icon inside <li>
    const removeBtn = document.createElement('span');
    removeBtn.className = 'close';
    removeBtn.innerHTML = '&#9760; ';
    listItem.prepend(removeBtn);

    // add <li> to <ul>
    list.append(listItem);

    // Remove item when clicked, update todos, LS
    removeBtn.addEventListener('click', () => {
      todos.splice(todos.indexOf(todos[i]), 1);
      localStorage.setItem('todos', JSON.stringify(todos));
      createItems();
    });
  }
};

// Real time text update
const updateText = () => (textReflect.textContent = input.value);

input.addEventListener('input', updateText);

// Add input to array + LS, clear inputs
const addToList = () => {
  const inputValue = input.value;

  todos.push(inputValue);

  addToLocalStorage();

  //reset inputs
  input.value = '';
  textReflect.textContent = '';
};

// Add to local storage
const addToLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
  createItems();
};

// Get from local storage
const getFromLocalStorage = () => {
  const storageContent = localStorage.getItem('todos');
  if (storageContent) {
    todos = JSON.parse(storageContent);
    createItems();
  }
};

/*
  ACTIONS
*/

// Run fn addToList by pressing enter + btn press
input.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    if (input.value !== '') {
      addToList();
    }
  }
});

btn.addEventListener('click', () => {
  if (input.value !== '') {
    addToList();
  }
});

// On load
getFromLocalStorage();
