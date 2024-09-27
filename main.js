const taskManager = require("./TaskManager.js");
const readline = require("readline")

let input = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

function Menu()
{
    let menuText = "Select an Option:\n";
    menuText += "1. Add/Create Task\n";
    menuText += "2. List Tasks\n";
    menuText += "3. Update Task\n";
    menuText += "4. Delete Task\n";
    menuText += "5. Mark In Progress\n";
    menuText += "6. QUIT\n";
    menuText += "Your Input: ";
    return menuText;
}

function ListMenu()
{   
    let listMenuText = "1. List All Tasks\n";
    listMenuText += "2. List Complete Tasks \n";
    listMenuText += "3. List Incompleted Tasks";
    listMenuText += "Your Input:";
    return listMenuText;
   
}


function handleListMenu(option)
{ 
    switch(option)
    {
        case "1":
            taskManager.ListTasks()
            displayMenu()
            handleListMenu()
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
                handleListMenu(listOption);
            });
            break;
        case "3":
            console.log("Exiting the application.");
            input.close();
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