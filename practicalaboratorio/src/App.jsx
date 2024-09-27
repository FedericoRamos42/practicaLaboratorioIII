import React from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import {tasks as data} from './tasks'
import { useState, useEffect } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
     setTasks(data) 
  },[])

  function createTask(task)
  {
    setTasks([...tasks,{
      id:tasks.length,
      title: task.title,
      description: task.description
    }])
  }
  function deleteTask(taskId)
  {
    setTasks(tasks.filter(task=>task.id !== taskId))
  }

  function taskCompleted(taskId) {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} taskCompleted={taskCompleted} />
    </>
  )
}

export default App
