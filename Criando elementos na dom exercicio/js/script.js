const inputMain = document.querySelector('main')
const inputNewItem = document.querySelector('input');
const inputBtnAdd = document.querySelector('button');


const containerTask = document.createElement('div')

containerTask.classList.add("container-tasks");
inputMain.appendChild(containerTask);


inputBtnAdd.addEventListener('click', (event) => {
    const newTask = document.createElement('div');

    newTask.classList.add("task");
    containerTask.appendChild(newTask);
      
    

    const tasksIncluded = document.createElement('span');

    tasksIncluded.textContent = inputNewItem.value
    newTask.appendChild(tasksIncluded);


    const buttonAddTasks = document.createElement('button');

    newTask.appendChild(buttonAddTasks);


    const imgBtn = document.createElement('img');

    buttonAddTasks.appendChild(imgBtn);
    imgBtn.src = "assets/remove.svg"

    inputNewItem.value = '';
    

    buttonAddTasks.addEventListener('click', () => {
        containerTask.removeChild(newTask)
        
    })   
});
