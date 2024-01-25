// Buat increment

// Ambil data task
const taskList = [];

// Function insert data
const form = document.forms['todoForm'];
form.onsubmit = function (event) {
    event.preventDefault();

    const task = document.forms['todoForm']['task'].value;
    taskList.push(task);

    document.forms['todoForm'].reset();

    displayData();
};

// Function Task List
function taskListDisplay (index, task){
        // Class list 
        let checkClass = ['bi', 'bi-check'];
        let labelClass = ['flex','w-fit','p-2','hover:bg-blue-600','cursor-pointer','rounded-r-md'];
        let divClass = ['justify-between', 'items-center', 'rounded-md','cursor-pointer', 'hover:bg-blue-400'];
        let buttonClass = ['p-2','hover:bg-blue-600','cursor-pointer', 'rounded-r-md'];
        

        const icon = document.createElement('i')
        const buttonLabel = document.createElement('button');
        const labelDiv = document.createElement('label');
        const spanLabel = document.createElement('span');
        const divContent = document.createElement('div');
        const liUl = document.createElement('li');

        // Input label
        icon.classList.add(...checkClass);
        labelDiv.classList.add(...labelClass);
        buttonLabel.classList.add(...buttonClass);
        buttonLabel.onclick = function (){
            removeTask(index);
        };
        buttonLabel.appendChild(icon);
        labelDiv.appendChild(buttonLabel);

        // Div
        divContent.classList.add(...divClass,labelClass[0]);
        divContent.append(spanLabel, buttonLabel);
        
        spanLabel.textContent = task;
        spanLabel.classList.add(labelClass[2]);
        liUl.append(divContent);
        
        const ulList = document.getElementById('taskList');
        ulList.appendChild(liUl);
}

// Function display data 
function displayData(){
    clearData();

    for(let i = 0; i< taskList.length; i++){
        const task = taskList[i];

        // Search
        const searchText = document.getElementById("search").value.toLowerCase();
        
        if(task.toLowerCase().includes(searchText)){
            taskListDisplay(i, task);
        }
    }
}

// Clear data
function clearData(){
    const taskList = document.getElementById('taskList');
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

// Search Task
const searchInput = document.getElementById("search");
searchInput.onkeyup = function() {
    displayData();
}
searchInput.onkeydown = function() {
    displayData();
}

// Remove Data
function removeTask(index) {
    taskList.splice(index, 1);
    displayData();
}

// Ketika mulai melakukan perpindahan
document.addEventListener("dragstart", (e) => {
    e.target.classList.add("opacity-25");
})

document.addEventListener("dragend", (e) => {
    e.target.classList.remove("opacity-25");
})