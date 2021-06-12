loadEvents();
// // load every event in the page
function loadEvents() {
    document.getElementById('clear').addEventListener('click', clearList);
    // document.querySelector('#clear').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deleteOrTick);
}
// // subit data function
function submit() {
    let input = document.querySelector('input');
    if (input.value != '') {
        addTask(input.value);
    }
    input.value = '';
}

// // add tasks
function addTask(task) {
    let ulElement = document.querySelector('ul');
    let liElement = document.createElement('li'); // <li></li>
    liElement.innerHTML = `<span class="delete">X</span><input type="checkbox"><label>${task}</label>`;
    ulElement.appendChild(liElement);
    document.querySelector('.tasksBoard').style.display = 'block';
}

// // clear the LIST
function clearList(e) {
    document.querySelector('ul').innerHTML = '';
    document.querySelector('.tasksBoard').style.display = 'none';
}

// // deleteTick
function deleteOrTick(event) {
    if (event.target.className == 'delete')
        deleteTask(event);
    else {
        tickTask(event);
    }
}

// // delete task
function deleteTask(e) {
    console.log(e)
    let listItem = e.target.parentNode;
    let ulParent = listItem.parentNode;
    ulParent.removeChild(listItem);
}

// // tick a task
function tickTask(e) {
    const label = e.target.nextSibling; // nextChild of Input i.e. label
    if (e.target.checked) {
        label.style.textDecoration = "line-through";
        label.style.color = "#ff0000";
    } else {
        label.style.textDecoration = "none";
        label.style.color = "#2f4f4f";
    }
}
