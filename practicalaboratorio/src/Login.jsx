import React, { useState } from 'react'

const Login = () => {
    const [userName,setUserName] = useState('')

    const handleChange = (e)=>{
        const value = e.target.value;
        setUserName(value);

        if(value.toLowerCase().includes('o')){
            alert('Por favor, Nombres de usuario sin la letra o!')
        }
    }

    const handleRegister = ()=>{
        if (userName.trim() === '' || userName.toLowerCase().includes('o')){
            alert("Usuario invalido para registrarse")
        }else{
            alert('Usuario registrado correctamente')
        }
    }

  return (
    <div>
      <input type="text"
      value={userName}
      onChange={handleChange}
      placeholder='Nombre de usuario' 
      />
       <button onClick={handleRegister}>Registrarse</button>
       <p>username: {userName}</p>
    </div>
  )
}

export default Login
