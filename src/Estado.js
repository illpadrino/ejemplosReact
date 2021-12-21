import { useState } from "react";

function Estado (){

    const [contador, setContador] = useState (0)

    const aumentar = () =>{
        setContador(contador + 1)
    } 

    const disminuir = () =>{
        setContador(contador - 1)
    } 


    return(

        <div>
            <div style = {{textAlign: 'center'}}>
            <span style={{fontSize: '30px',  display: 'block'}}>{contador}</span>
                <button onClick={aumentar}>mas</button>
                <button onClick = {disminuir}>menos</button>
            </div>
        </div>

    )
}

export default Estado;