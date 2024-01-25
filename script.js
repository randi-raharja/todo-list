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

    console.log(taskList);
    displayData();
};

// Function display data 
function displayData(){
    for(let i = 0; i< taskList.length; i++){
        const task = taskList[i];

        // Class list 
        let checkClass = ['bi', 'bi-check'];
        let labelClass = ['flex','w-fit','p-2','hover:bg-blue-600','cursor-pointer','rounded-r-md'];
        let divClass = ['justify-between', 'items-center', 'rounded-md', 'hover:bg-blue-400'];
        

        const icon = document.createElement('i')
        const buttonLabel = document.createElement('input');
        const labelDiv = document.createElement('label');
        const spanLabel = document.createElement('span');
        const divContent = document.createElement('div');
        const liUl = document.createElement('li');

        // Input label
        icon.classList.add(...checkClass);
        buttonLabel.type = "button";
        labelDiv.classList.add(...labelClass);
        labelDiv.appendChild(icon, buttonLabel);

        // Label
        spanLabel.classList.add(...labelClass[2]);

        // Div
        divContent.classList.add(...divClass, labelClass[4]);
        
        spanLabel.textContent = task;
        liUl.appendChild(labelDiv);
        
        const ulList = document.getElementById('taskList');
        ulList.appendChild(liUl);
    }
}

function change(){
    const ele = document.getElementById("content");
    ele.classList.remove('hover:bg-blue-400');
    ele.classList.add('bg-red-400');
}

// Ketika mulai melakukan perpindahan
document.addEventListener("dragstart", (e) => {
    e.target.classList.add("opacity-25");
})

document.addEventListener("dragend", (e) => {
    e.target.classList.remove("opacity-25");
})