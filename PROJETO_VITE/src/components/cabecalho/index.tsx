import '../../estilo/estilo.css'
import Menu from '../menu'

type Informacoes = {
    titulo?: string;
    pagina?: string;
    parametro?: string;
}

function Cabecalho(valores: Informacoes) {
    return(
        <div>
            <div className="cabecalho-container">
                
                <div className='cabecalho-div1'> 
                    <Menu />
                </div>                
                <div className='cabecalho-div2'></div>
                <div>
                    Titulo = {valores.titulo} <br />
                    Pagina = {valores.pagina} <br />
                    Parametro = {valores.parametro}
                </div>
                
             

            </div>

        </div>

    )
}

export default Cabecalho