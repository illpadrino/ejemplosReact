import { useState } from "react";
import Hijo from "./hijo";

function Padre () {

    const [aumentar, setAumentar] = useState (0)

    const incrementar = () =>{
        setAumentar(aumentar + 1)
    }

    return(
        <div>
            <h1>Hola soy tu padre</h1>
            <span >{aumentar}</span>
            <Hijo incrementar = {incrementar}/>
        </div>
    )
}

export default Padre;