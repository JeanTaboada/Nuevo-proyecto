import { useState } from "react"

export const FormHook = () => {

    const initialstate = {
        userName: '',
        email: '',
        password: ''
    }

    const [formState, setformState] = useState(initialstate)
    
    //Desestructuración
    
    const {userName, email, password}=formState

    const [userArray, setuserArray] = useState([])

    //Funcion para poder actualizar el formState

   const onInputOnChange =(e)=>{
     const {name,value}=e.target
     //..FormHook: mantiene los demas valores
     // va entre [name] por que cambiar ejemplo puede ser: email, password

     setformState({
        ...formState,
        [name]:value,
        
     })
   }
   const onFormSubmit=(e)=>{
    //Para que pagina no recargue   
    e.preventDefault()
     // Agrega el usuario al arreglo
    setuserArray([...userArray,formState])
    // Limpia los campos del formulario
    setformState(initialstate)
    
   }
   console.log(userArray)

  return (
    <div className="container bg-black text-white">
        <h1>REGISTRO DE USUARIO</h1>
    <form onSubmit={onFormSubmit}> 
        <div className="mb-3">
            <label className="form-label" htmlFor="userNameForm">USER</label>
            <input 
            type="text" 
            className="form-control"
            name="userName"
            value={userName}
            onChange={onInputOnChange}/>
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="userNameForm">EMAIL</label>
            <input 
            type="email" 
            className="form-control"
            name="email"
            value={email}
            onChange={onInputOnChange}/>
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="userNameForm">PASSWORD</label>
            <input 
            type="password" 
            className="form-control"
            name="password"
            value={password}
            onChange={onInputOnChange}/>
        </div>
        <button type="submit" className="btn m-2 btn-primary">REGISTRAR</button>
    </form>

    <h2 className="mt-4">Lista de Usuarios Registrados</h2>
            <ul className="list-group">
                {userArray.map((user, index) => (
                    <li key={index} className="list-group-item text-black">
                        <strong>Usuario:</strong> {user.userName} | <strong>Email:</strong> {user.email}
                    </li>
                ))}
            </ul>
    </div>
  )
}
