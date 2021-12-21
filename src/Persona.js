
const Persona = (props) =>{
    console.log(props);
    return(
        <div>
            {
                props.datos.map((i) =>{
                    <div>
                        <li>{i.nombre}</li>
                        <li>{i.edad}</li>
                        <li>{i.genero}</li>
                    </div>
                })
            }
        </div>
    )
}


export default Persona;

