const inputTask = document.querySelector('.inputNewTask');
const btnAdd = document.querySelector('.btnAddTask');
const tasks = document.querySelector('.tasks');

document.addEventListener('click', function (event) {
    const el = event.target;

    if (el.classList.contains('btnAddTask')) {
        if (!inputTask.value) return alert('Please select a task');
        getNewTask(inputTask.value)
    }

    if (el.classList.contains('deleteTask')) {
        el.parentElement.remove();
        salveTask();
    }
});

inputTask.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (!inputTask.value) return alert('Please select a task');
        getNewTask(inputTask.value)
    }
})

const createLi = () => {
    const li = document.createElement('li')
    return li;
};

const createBtn = (li) => {
    li.innerHTML += '  ';
    const btn = document.createElement('button');
    btn.setAttribute('class', 'deleteTask');
    btn.innerHTML = 'Apagar';
    li.appendChild(btn);
}

const getNewTask = (inputTask) => {
    const li = createLi();
    li.innerHTML = inputTask;
    tasks.appendChild(li);
    clearInput();
    createBtn(li);
    salveTask();
};

const clearInput = () => {
    inputTask.value = '';
    inputTask.focus();
}

const salveTask = () => {
    const lis = tasks.querySelectorAll('li');
    const btn = '<button class="deleteTask">Apagar</button>';
    const liTasks = [];

    for (let liEl of lis) {
        let taskText = liEl.innerHTML;
        taskText = taskText.replace(btn, '').trim();
        liTasks.push(taskText);
    }

    const liTasksJSON = JSON.stringify(liTasks);
    localStorage.setItem('tasklist', liTasksJSON);
};

const getTaksSaved = () => {
    const tasks = localStorage.getItem('tasklist');
    const taskList = JSON.parse(tasks);

    for (let task of taskList) {
        getNewTask(task);
    }
}