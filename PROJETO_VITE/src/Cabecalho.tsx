import './estilo/estilo.css'
import Menu from './Menu'

function Cabecalho() {
    return(
        <div>
            <div className="cabecalho-container">
                
                <div className='cabecalho-div1'> 
                    <Menu />
                </div>
                <div className='cabecalho-div2'></div>
                
            </div>

        </div>

    )
}

export default Cabecalho