import React from 'react'

const TaskCard = ({task,deleteTask,taskCompleted}) => {
  return (
    <>
        <h1>{task.title}</h1>
          <p>{task.description}</p>
          <button onClick={() => taskCompleted(task.id)}>
              {task.completed ? 'Marcar como pendiente' : 'Marcar como completa'}
          </button>
          <button onClick={() => deleteTask(task.id)}>
              Eliminar tarea
          </button>
    </>
  )
}

export default TaskCard
