import axios from "axios"
import useInput from '../../hooks/useInput'
import { LOCALHOST } from "../../utils/BASE_API"

export default function Signup() {
  const name = useInput()
  const lastname = useInput()
  const username = useInput()
  const password = useInput()
  const email = useInput()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .post(`${LOCALHOST}/api/users/signup`, {
      name: name.value,
      lastname: lastname.value,
      username: username.value,
      password: password.value,
      email: email.value
    })
    .then(user => user.data)
    .then(user => console.log(user))
    .catch(alert("Usuario y/o contraseña ya existe"))
  }
  
  return (    
      <form onSubmit={handleSubmit}>
        <label style={{color:'white'}}>Nombre</label>
        <input placeholder="Ingrese su nombre" style={{ marginBottom: '1%' }}{...name}/><br />
        <label style={{color:'white'}}>Apellido</label>
        <input placeholder="Ingrese su apellido" style={{ marginBottom: '1%' }} {...lastname}/><br />
        <label style={{color:'white'}}>Usuario</label>
        <input placeholder="Ingrese su usuario" style={{ marginBottom: '1%' } } {...username}/><br />
        <label style={{color:'white'}}>Password</label>
        <input placeholder="Ingrese su contraseña" style={{ marginBottom: '1%' }} {...password}/><br />
        <label style={{color:'white'}}>Email</label>
        <input placeholder="Ingrese su email" style={{ marginBottom: '1%' }} {...email}/><br />
        <input type="submit" />
      </form>
  )
}