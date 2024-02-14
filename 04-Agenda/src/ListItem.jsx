
const ListItem=({nombre, correo, telefono, direccion})=>{
    return(
        <li>{nombre}:
          <ul>
             <li>Telefono: {telefono}</li>
             <li>Correo: {correo}</li>
             <li>Direccion: {direccion}</li>
          </ul>  
        </li>
    )
}
export default ListItem