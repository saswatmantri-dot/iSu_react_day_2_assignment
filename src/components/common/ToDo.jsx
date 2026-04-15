import React from 'react'

function ToDo({className}) {

    const tasks = [
    {taskNo : "1", task : "task1"},
    {taskNo : "2", task : "task2"},
    {taskNo : "3", task : "task3"},
    {taskNo : "4", task : "task4"},
    ];

  return (
    <div className={className}>
        
    <ul>
      {tasks.map((task) => (
        <li key={task.taskNo}>
            {task.task}
            <button>
                Delete
            </button>
            </li>
      ))}
    </ul>

    </div>
  )
}

export default ToDo