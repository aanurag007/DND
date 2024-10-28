const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".column");

tasks.forEach((task)=>{
    task.addEventListener("dragstart", (e)=>{
        e.dataTransfer.setData("text/plain",task.id);
        setTimeout(()=>task.classList.add("dragging"),0);

    });
    task.addEventListener("dragend", ()=>{
        task.classList.remove("dragging");
    });
});

columns.forEach((column)=>{
    column.addEventListener("dragover",(e)=>{
        e.preventDefault();
        column.classList.add("over");
    });
    column.addEventListener("dragleave",()=>{
        column.classList.remove("over");
    });
    column.addEventListener("drop", (e)=>{
        e.preventDefault();
        const taskId=e.dataTransfer.getData("text/plain");
        const task = document.getElementById(taskId);
        column.appendChild(task);
        column.classList.remove("over");
    });
});
