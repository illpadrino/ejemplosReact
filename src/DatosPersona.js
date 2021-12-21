import Persona from "./Persona";
import DB from "./DB";
const DatosPersona = () =>{
    return(
        <div>
            <Persona datos = {DB}/>
        </div>
    )
}

export default DatosPersona;