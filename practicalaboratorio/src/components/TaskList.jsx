import TaskCard from "./TaskCard"

function TaskList({tasks, deleteTask,taskCompleted} ) {
   
    if(tasks.length === 0){
        return <h1>No hay tareas aun</h1>
    }
  
    return (
    <div>
        {
            tasks.map((task)=>(
              <div key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                <TaskCard task={task} deleteTask={deleteTask} taskCompleted={taskCompleted}/>
              </div>
            ))
        }
    </div>
  )
}

export default TaskList
