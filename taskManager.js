function addTask(title, description, priority)
{
    this.taskTitle=title;
    this.taskDescription=description;
    this.taskPriority=priority;
}

document.querySelector("#taskForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('clicked')
    let newt=document.querySelector("#taskTitle").value;
    let newd=document.querySelector("#taskDescription").value;
    let newp=document.querySelector("#taskPriority").value;
    const newTask=new addTask(newt, newd, newp);
    
    t=JSON.stringify(newt);
    d=JSON.stringify(newd);
    p=JSON.stringify(newp);
    localStorage.setItem("Task Title", newt);
    localStorage.setItem("Task Description", newd);
    localStorage.setItem("Task Priority", newp);


    let list=document.querySelector("#taskList");
    list.innerHTML+="<p><b>"+newTask.taskTitle+"</b><br>"+newTask.taskDescription+"<br>"+newTask.taskPriority+"<br><button>Delete</button>&nbsp<button>Update</button>&nbsp<button>Completed</button></p>"
    // let id=list.lastElementChild.id=Date.now();
    list.lastElementChild.setAttribute("type", "click")
    list.lastElementChild.setAttribute("id", Date.now())
})

document.querySelector("#taskList").addEventListener("click", (e) =>{
let listitem=document.querySelector("p");
listitem.remove();
})