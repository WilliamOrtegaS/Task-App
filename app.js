document.getElementById('formTask').addEventListener('submit',saveTask);
function saveTask(e){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    
    const task = {
        title, // title.title 
        description // description: dscription
    };

    //console.log(task);
    //localStorage.setItem('tasks',JSON.stringify(task));
    //console.log(JSON.parse(localStorage.getItem('tasks')));
    if(localStorage.getItem('tasks')=== null){
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }else{
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    getTasks();
    document.getElementById('formTask').reset();
    e.preventDefault();
}

function getTasks(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');
    
    tasksView.innerHTML = '';
if( tasks.length>0){
    for(let i = 0; i < tasks.length; i++){
        //console.log(tasks.length);
        let title = tasks[i].title;
        let description = tasks[i].description;

        tasksView.innerHTML += `<div class="card mb-4">
            <div class="card-body">
                <p>${title} - ${description}</p>
                <a class="btn btn-danger" onclick="deleteTask('${title}')">
                Delete
                </a>
            </div>
        </div>`
        //console.log(tasks[i]);

    }
}
}

function deleteTask(title){
    //console.log("Title",title);
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for( let i = 0; i< tasks.length; i++){
        if(tasks[i].title == title ){
            tasks.splice(i,1)
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
}
getTasks();

