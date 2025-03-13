import { useState } from "react";
import '../estilo/estilo.css'

function Condicional (){

    const [mostrar, setMostrar] = useState(false);

    function HandleClickMostrar(){        
        if(mostrar){
            setMostrar(false)
        } else {
            setMostrar(true)
        }
    }

    return(
        <div>
            <h1>Exibição de conteúdo condicional</h1>
            <button onClick={HandleClickMostrar} >               
               { mostrar ? "Ocultar" : "Mostrar" }            
            </button>
         
            {mostrar === true &&
                <div className="cond-container"> 
                    Condicional 
                </div>
            }
        </div>
    )
}

export default Condicional;