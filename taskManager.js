function addTask(title, description, priority)
{
    this.taskTitle=title;
    this.taskDescription=description;
    this.taskPriority=priority;
}

addEventListener("submit", (e) => {
    e.preventDefault();

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
    let id=list.lastElementChild.id=Date.now();
    // let test=document.getElementById(news);
    // console.log(test.id);
    let atype=list.lastElementChild.lastElementChild.type="click";
    let aname=list.lastElementChild.lastElementChild.name=newTask.taskTitle;
})
