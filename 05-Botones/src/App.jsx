
import { useState } from "react"   

function App() {
  const [contador,setContador] = useState(0) 
  
  const handleBotonIncremento = ()=>{
    setContador(contador + 1)               
  }

  const handleBotonDecremento = ()=>{
    setContador(contador - 1)               
  }

  const handleBotonReceteo = ()=>{
    setContador(0)               
  }

  return (
    <div>
      <h1>Contador</h1>
      <hr />
      <h2>{contador}</h2>
      <button onClick={handleBotonIncremento}>Incrementar</button> 
      <button onClick={handleBotonDecremento}>Decrementar</button>
      <button onClick={handleBotonReceteo}>Recetear</button>
    </div>
  )
}

export default App