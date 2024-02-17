document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const deadlineInput = document.getElementById('deadlineInput');
    const taskList = document.getElementById('taskList');

    let tasks = [];

    // Load tasks from API
    fetch('https://api.example.com/tasks')
        .then(response => response.json())
        .then(data => {
            tasks = data;
            displayTasks();
        })
        .catch(error => console.error('Error fetching tasks:', error));

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        const deadline = deadlineInput.value;

        if(taskText !== '') {
            addTask(taskText, deadline);
            taskInput.value = '';
            deadlineInput.value = '';
        }
    });

    function addTask(taskText, deadline) {
        const task = {
            id: Date.now(),
            text: taskText,
            deadline: deadline,
            completed: false
        };

        tasks.push(task);
        saveTasks();
        displayTasks();
    }

    function saveTasks() {
        // Save tasks to API
        fetch('https://api.example.com/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })
        .then(response => response.json())
        .then(data => console.log('Tasks saved:', data))
        .catch(error => console.error('Error saving tasks:', error));
    }

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach(function(task) {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <input type="checkbox" id="task-${task.id}" ${task.completed ? 'checked' : ''}>
                <label for="task-${task.id}">${task.text} - ${task.deadline}</label>
            `;
            taskList.appendChild(taskItem);

            const checkbox = taskItem.querySelector(`#task-${task.id}`);
            checkbox.addEventListener('change', function() {
                task.completed = this.checked;
                saveTasks();
            });
        });
    }
});