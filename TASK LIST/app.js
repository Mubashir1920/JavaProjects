const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskinput = document.querySelector("#task");


//Load Event Listener

loadeventlisteners();
//Define Function

function loadeventlisteners() {
    //Add Task
    form.addEventListener('submit', addtask);
    // DOM EVent Loader
    document.addEventListener('DOMContentLoaded', gettasks)
    // remove tasks
    tasklist.addEventListener('click', removetask);
    // Clear Tasks
    clearbtn.addEventListener('click', cleartasks);
    // filter tasks
    filter.addEventListener('keyup', filtertasks);
}

// Get Tasks From LS
function gettasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (tasks) {
        const li = document.createElement('li')
        li.className = 'collection-item'
        // Create Text Node and APPEND tO LI
        li.appendChild(document.createTextNode(tasks));
        // link element
        const link = document.createElement('a')
        link.className = 'delete-item secondary-content'
        // add icon html
        link.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        // append link to li
        li.appendChild(link);

        // append li to ul
        tasklist.appendChild(li);

    })

}


//Add Tasks

function addtask(e) {
    if (taskinput.value === '') {
        alert('Add Task');
    }

    //Create Element
    const li = document.createElement('li')
    li.className = 'collection-item'
    // Create Text Node and APPEND tO LI
    li.appendChild(document.createTextNode(taskinput.value));
    // link element
    const link = document.createElement('a')
    link.className = 'delete-item secondary-content'
    // add icon html
    link.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    // append link to li
    li.appendChild(link);

    // append li to ul
    tasklist.appendChild(li);

    // Store Task in LS
    storetaskinlocalstorage(taskinput.value);

    // clear input
    taskinput.value = '';

    console.log(li);




    e.preventDefault();
}

function storetaskinlocalstorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}



// Remove Task

function removetask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure ?')) {
            e.target.parentElement.parentElement.remove();
        }
    }

    removertaskfromlocalstorage(e.target.parentElement.parentElement);


}

function removertaskfromlocalstorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {   
        tasks = [];        
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }    
    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task)
        {
            tasks.splice(index ,1);
        }
    });
    localStorage.setItem('tasks' , JSON.stringify(tasks))
}

// Clear TAsk 

function cleartasks() {
    while (tasklist.firstChild) {
        tasklist.removeChild(tasklist.firstChild);
    }

    cleartaskfromlocalstorage();
}

// Clear Task From LS
function cleartaskfromlocalstorage() {
    localStorage.clear();
}

// Filter Tasks


function filtertasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block'
            } else {
                task.style.display = 'none'
            }

        }
    )

}

