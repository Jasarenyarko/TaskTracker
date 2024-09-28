
const taskManager = require("./TaskManager.js");
const readline = require("readline")

let input = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

function Menu()
{
    let menuText = "";
    menuText += "1. Add/Create Task\n";
    menuText += "2. List Tasks\n";
    menuText += "3. Update Task\n";
    menuText += "4. Delete Task\n";
    menuText += "5. Mark In Progress\n";
    menuText += "6. QUIT\n";
    menuText += "Select an option: ";
    return menuText;
}

function ListMenu()
{   
    let listMenuText = "1. List All Tasks\n";
    listMenuText += "2. List Completed Tasks \n";
    listMenuText += "3. List Incompleted Tasks\n";
    listMenuText += "4. List Tasks In Progress";
    return listMenuText;
   
}


function handleListMenu(option)
{ 
    switch(option)
    {
        case "1":
            taskManager.ListTasks()
            displayMenu()
            break;
        case "2":
            taskManager.ListDoneTasks()
            displayMenu()
            break;
        case "3":
            taskManager.ListNotDoneTasks()
            displayMenu()
            break;
        case "4":
            taskManager.ListInProgressTasks()
            displayMenu()
            break;
    }

}


function handleMenuOption(option) {
    switch (option) {
        case "1":
            input.question("Description of Task: ", (description) => {
                taskManager.AddTask(description);
                console.log("Task added successfully!");
                displayMenu()
            });
            break;
        case "2":
            console.log(ListMenu());
            input.question("Choose a list option: ", (listOption) => {
                handleListMenu(listOption)
            });
            break;
        case "3":
            taskManager.ListTasks()
            input.question("Selected Id of Task to Update: ",(selectedID) =>{
                input.question("Write new Description: ",(description)=>{
                    if(description){
                    taskManager.UpdateTask(selectedID,description)
                    }
                    else{
                        console.log("Description cant be empty")
                    }
                displayMenu()
                })
            } )
            break;

        case "4":
            taskManager.ListTasks()
            input.question("Input description of Task to Delete: ",(deleteTask)=>
            {
                taskManager.DeleteTask(deleteTask)
                displayMenu()
            })
            break;
        case "5":
            taskManager.ListTasks()
            input.question("Input ID of Task to mark in progress: ",(markInProgress)=>
            {
                taskManager.MarkInProgress(markInProgress)
                displayMenu()
            })
            break;
        case "6":
            console.log("Exiting the application.");
            input.close();
            break;
        default:
            console.log("Invalid option. Please try again.");
            displayMenu();
    }
}

function displayMenu()
{
    input.question(Menu(),(option) => {
        handleMenuOption(option)
    })

}


console.log("Welcome to your Task Tracker APP");


displayMenu()