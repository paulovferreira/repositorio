import '../../estilo/estilo.css'
import Menu from '../menu'

type Props = {
   titulo?: String;
}

function Cabecalho(props: Props){
    return(   
      <div>
         <div className='container_cabecalho'>               
            <Menu />             
         </div>           
         <div className='prop'> Estou na página: {props.titulo} </div>
      </div>
    )
}

export default Cabecalho;