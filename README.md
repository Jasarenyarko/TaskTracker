# TaskTracker

A Command Line Interface (CLI) application for managing tasks. This simple, interactive tool allows users to create, list, update, and delete tasks from a JSON file. It's built using Node.js and utilizes the built-in readline module for input/output operations.

Project URL
https://github.com/Jasarenyarko/TaskTracker.git

### Features:
Add/Create Task: Easily add new tasks with a description.
List Tasks: View all tasks or filter them by completed or incomplete status.
Update Task: Modify task descriptions and statuses.
Delete Task: Remove tasks from the list.
Mark Tasks In Progress: Update task status to reflect ongoing work.
Quit: Exit the application gracefully.
Installation

To get started with the Task Tracker CLI, you'll need to have Node.js installed on your system.

Clone the repository:
git clone https://github.com/Jasarenyarko/TaskTracker.git
Navigate to the project directory:
cd task-tracker-cli

### Usage

Run the CLI:
node main.js
Follow the prompts to manage tasks:
Select options to create, update, delete, or list tasks.
Tasks are stored in a local JSON file that persists data between sessions.
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

Project Structure
.
├── TaskManager.js   # Module for managing tasks
├── main.js          # Main entry point for CLI
├── tasks.json       # File to store task data
└── README.md        # Project documentation
Task Management

Tasks are stored in a JSON file (tasks.json), which includes properties like:

id: Unique identifier for each task.
description: The task's description.
status: Current status of the task (pending, in-progress, or done).
Example JSON format
```json
[
    {
        "id": 1,
        "description": "Complete the project",
        "status": "pending"
    },
    {
        "id": 2,
        "description": "Review pull requests",
        "status": "in-progress"
    }
]

### FUTURE FEATURES

Task prioritization (high, medium, low).
Scheduling tasks with deadlines.
Task reminders.
Ability to export tasks to CSV or other formats.
Contributing

Feel free to submit issues and pull requests! Contributions are welcome to improve functionality, code quality, or documentation.


### How to Contribute

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Added a new feature"
    ```
4. Push to your branch:
    ```bash
    git push origin feature-name
    ```
5. Create a pull request on GitHub.
License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For questions, feel free to reach out:

Email: jedidiah.asare512@gmail.com