import { useState } from "react";
import Cabecalho from "../components/cabecalho";



function Condicional () {
    const [Show, setShow] = useState(false);

    function HandleClickShow(){
        if (Show){
            setShow(false)
        } else {
            setShow(true)
        }
    }

    return (
    <div>
      
    
        <Cabecalho titulo="home" />                       
        <h1>ESSA É A PÁGINA HOME!</h1>


        <button onClick={HandleClickShow} > { Show? "Ocultar" : "Mostrar" }   </button>

        {Show === true &&
        < div>
            ESTE TEXTO SÓ SERÁ EXIBIDO SE O SHOW FOR = A TRUE.
        </div>
        }



    
    
    </div>
    )
}

export default Condicional