import { useForm } from "./Hooks/useForm"

function App() {
  const[InputsForm,HandleInputChange,FormReset] = useForm({
    username:"",
    password:"",
  })

  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log("Mi nombre de usuario es: ",InputsForm.username)
    console.log("y mi contraseña es: ",InputsForm.password)
    FormReset()
  }
  

  return (
    <div>
      <h1>Input</h1>
      <hr />
      <form onSubmit={(e)=>HandleSubmit(e)}>
        <div>
        <label htmlFor="username">Username</label>
        <input 
        id="username"
        name="username"
        type="text"
        value={InputsForm.username}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input
        id="password"
        name="password"
        type="password" 
        value={InputsForm.password}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
