import React, { useState } from 'react'

const TaskForm = ({createTask}) => {

    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
       
        createTask({
            title,
            description,
        })
        setTitle("")
        setDescription("")
    }

  return (
    <form onSubmit={handleSubmit}>

        <input placeholder='Escribe tu tarea'
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        autoFocus
        required/>

        <textarea placeholder='Escribe la descripcion de la tarea'
        onChange={(e)=>setDescription(e.target.value)}
        value={description}
        required>
        </textarea>
        <button>Guardar</button>
    </form>
  )
}

export default TaskForm
