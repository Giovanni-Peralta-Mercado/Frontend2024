
const persona={
  nombre: 'Giovanni de Jesus Peralta Mercado',
  edad:22,
  ocupacion: 'Estudiante',
  Fecha_Nacimiento:'31/01/2002',
  lugar_nacimiento: 'Tuxtepec, Oaxaca',
  signo_Zodical:'Acuario',
  pasatiempo:[
    'Jugar VideoJuegos',
    'Escuchar Musica',
    'Ver Series',
    'Descansar',
    'Cocinar',
    'Limpiar']
  }
  
  function App() {
  
    return (
      <div>
        <h1>Informacion Personal</h1>
        <hr />
        <ul>
          <li>Nombre Completo: {persona.nombre}</li>
          <li>Edad: {persona.edad}</li>
          <li>Ocupación: {persona.ocupacion}</li>
          <li>Fecha de Nacimiento: {persona.Fecha_Nacimiento}</li>
          <li>Lugar de Nacimiento: {persona.lugar_nacimiento}</li>
          <li>Signo Zodical: {persona.signo_Zodical}</li>
          <li>Pasatiempos:
            <ul>
              {
              persona.pasatiempo.map((pasatiempo)=>{
                return <li key={pasatiempo}>{pasatiempo}</li>
              })
            }
            </ul>
          </li>
        </ul>
      </div>
    )
  }
  
  export default App
