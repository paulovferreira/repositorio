
import { Usuarios } from "../../types/usuarios";

type Props = {
    data: Usuarios;
}

function UsuarioItem ({data}: Props) {
    return(
        <div>       
            <hr />             
            USER ID: {data.userId}
            <br />
            TÍTULO: {data.title}                    
            <br />
            <hr />
        </div> 
    )
}


export default UsuarioItem;