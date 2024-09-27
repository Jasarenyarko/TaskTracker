const fs = require("fs");

const filePath = "tasks.json";
let tasks = [];


if(!fs.existsSync(filePath))
{   try{
    fs.writeFileSync(filePath, JSON.stringify([])); 
    console.log("Tasks.json created successfully.");
    let tasks = [];}

    catch(parseErr){
        console.error("Error parsing JSON:", parseErr.message);
        tasks = [];
    }
}

else
{
    const fileData = fs.readFileSync(filePath,"utf-8");
        try {
        tasks = JSON.parse (fileData);
       }

        catch(parseErr){
            console.error("Error parsing JSON:", parseErr.message);
        }
}


function WriteToJson()
{
    fs.writeFileSync(filePath,JSON.stringify(tasks,null,2),(err) => {
        if (err)
        {
            console.error("Error writing to the file:",err.message)
        }

    })
}


function ListTasks()
{

    console.log("List of Tasks");
    
    tasks.forEach(task => {
        console.log(task)}
    );

    console.log("Number of Tasks:",tasks.length)


}


function AddTask(description,status="pending")
{
    let newTask = { "id":"",
                    "description":description,
                    "status": status,
                    "createdAt": new Date().toISOString(),
                    "updatedAt": new Date().toISOString(),
    };

    newTask.id = tasks.length +1;
  

        try {
        tasks.push(newTask);
   
        WriteToJson()

        console.log("New task added successfully")
        console.log(newTask)

        }
        catch(parseErr){
            console.error("Error parsing JSON:", parseErr.message);
        }
}


function DeleteTask(description)
{   
    let taskToDelete = tasks.find(task => task.description == description)

    if (!taskToDelete) {
        console.log(`No task found with description '${description}'`);
        return;
    }

    tasks = tasks.filter(task => task.description !== description)
    
    /// RENUMBERS THE ID OF TASKS 
    let renumber = 1;
    tasks.forEach(task => {
        {
            task.id = renumber;
            renumber++
        }
    }
    )
    WriteToJson()
    console.log(`Task(s) with description '${description}' deleted successfully.`);
}


function ListDoneTasks()
{
    let doneTask = tasks.find(task => task.status === "Done" || task.status === "done");

    if (!doneTask) {
        console.log(`No task found with status Done`);
        return;
    }
    else{
    tasks.forEach(task => {
        {
            if (task.status === "Done" || task.status === "done")
            console.log(task)
        }
    }
    )}
   

}

function ListNotDoneTasks()
{
    let notDoneTask = tasks.find(task => task.status != "Done" || task.status != "done");

    if (!notDoneTask) {
        console.log(`All tasks done`);
        return;
    }
    tasks.forEach(task => {
        {
            if (task.status != "Done" || task.status != "done")
            console.log(task)
        }
    }
    )

}

function ListInProgressTasks()
{
    let inProgress = tasks.find(task => task.status === "In progress" || task.status === "in progress");

    if (!inProgress) {
        console.log(`No tasks in progress`);
        return;
    }
    tasks.forEach(task => {
        {
            if (task.status === "in progress" || task.status === "In Progress")
            console.log(task)
        }
    }
    )

}

function MarkInProgress(id)
{
    let taskToMark = tasks.find(task => task.id == id )

    if(!taskToMark)
    {
        console.log("Task not found")
    }

   taskToMark.status = "In progress"
   taskToMark.updatedAt = new Date().toISOString()

    WriteToJson()
    console.log(`Task(s) with id ${id} and '${taskToMark.description}' marked in progress.`);
}



function UpdateTask(id,description)
{
    let taskToUpdate = tasks.find(task => task.id==id);
    

    if(!taskToUpdate)
    {
        console.log("Task not found")
    }

    taskToUpdate.description = description;
    taskToUpdate.updatedAt = new Date().toISOString();

    WriteToJson()
    console.log(`Task with ID ${id} updated successfully`)
}



module.exports = {
    ListTasks,
    AddTask,
    DeleteTask,
    ListDoneTasks,
    ListNotDoneTasks,
    ListInProgressTasks,
    MarkInProgress,
    UpdateTask,
};