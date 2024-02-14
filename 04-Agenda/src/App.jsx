
import ListItem from "./ListItem.jsx"
const personas=[
  {
    nombre:'Giovanni',
    telefono:'2878886315',
    correo:'gio@gmail.com',
    direccion:'Col. El Tropico, calle joseja ortiz de dominguez'

  },
  {
    nombre:'Alexa',
    telefono:'2878380918',
    correo:'alexa@gmail.com',
    direccion:'Col. El Trigal, casa no.10'
  },
  {
    nombre:'Angelica',
    telefono:'2872903927',
    correo:'pedro@gmail.com',
    direccion:'Col. El Progreso'
  },
  {
    nombre:'Sergio',
    telefono:'2875980948',
    correo:'angelica@gmail.com',
    direccion:'Col. Costa Verde, Manzana no.15'
  }
]


function App() {
  return (
    <div>
      <h1>Agenda</h1>
      <hr/>
      <ul>
        {personas.map((persona)=>(
        <ListItem 
          key={persona.correo}
          nombre={persona.nombre}
          telefono={persona.telefono}
          correo={persona.correo}
          direccion={persona.direccion}
        />
        ))
        }
      </ul>
    </div>
  )
}

export default App