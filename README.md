# TaskTracker

A Command Line Interface (CLI) application for managing tasks. This simple, interactive tool allows users to create, list, update, and delete tasks from a JSON file. It's built using Node.js and utilizes the built-in readline module for input/output operations.

Project URL
https://github.com/Jasarenyarko/TaskTracker.git

### Features:
- **List Tasks**: View all tasks or filter them by completed or incomplete status.
- **Update Task**: Modify task descriptions and statuses.
- **Delete Task**: Remove tasks from the list.
- **Mark Tasks In Progress**: Update task status to reflect ongoing work.
- **Quit**: Exit the application gracefully.


## Installation
To get started with the Task Tracker CLI, you'll need to have [Node.js](https://nodejs.org) installed on your system.

1. **Clone the repository**:
    
    ```bash
    git clone https://github.com/your-username/task-tracker-cli.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd task-tracker-cli
    ```

3. **Install the dependencies**:

    ```bash
    npm install
    ```

### Example

```bash
Welcome to your Task Tracker APP
Select an Option:
1. Add/Create Task
2. List Tasks
3. Update Task
4. Delete Task
5. Mark In Progress
6. QUIT
Your Input: 1
Description of Task: Finish the report
Task added successfully!

## Project Structure

---

```bash
.
├── TaskManager.js   # Module for managing tasks
├── main.js          # Main entry point for CLI
├── tasks.json       # File to store task data
└── README.md        # Project documentation

