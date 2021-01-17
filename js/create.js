// Create and remove elements
const createItems = () => {
  const len = JSON.parse(localStorage.getItem('todos')).length;

  list.innerHTML = '';

  for (let i = 0; i < len; i++) {
    //create <li>
    const listItem = document.createElement('li');

    // update text of <li> with text from todos array item
    listItem.textContent = JSON.parse(localStorage.getItem('todos'))[i];

    //create close icon inside <li>
    const removeBtn = document.createElement('span');
    removeBtn.className = 'close';
    removeBtn.innerHTML = '&#9760; ';
    listItem.prepend(removeBtn);

    // add <li> to <ul>
    list.append(listItem);

    // Remove <li> when clicked, remove item from todos
    removeBtn.addEventListener('click', (e) => {
      //const arr = JSON.parse(localStorage.getItem('todos'));

      removeBtn.parentElement.remove();

      // get item from LS
      const arr = JSON.parse(localStorage.getItem('todos'));
      const toDoItem = JSON.parse(localStorage.getItem('todos'))[i];
      let itemIndex = arr.indexOf(toDoItem);
      console.log(itemIndex);

      let todosStorage = JSON.parse(localStorage.getItem('todos'));
      console.log(JSON.parse(localStorage.getItem('todos')));

      //let itemIndex = todosStorage.indexOf(toDoItem);

      // remove item from LS and from todos array
      todosStorage.splice(itemIndex, 1);
      todos.splice(itemIndex, 1);

      //update LS
      localStorage.setItem('todos', JSON.stringify(todos));
      console.log(JSON.parse(localStorage.getItem('todos')));
      //console.log(localStorage.getItem('todos'));
      //console.log(todos);
    });
  }
};
