import '../../estilo/estilo.css'

type Parametros = {
    descricao: String;
    textopadrao: String;
    naoobr?: String;
}

function resultado(params: Parametros){
     return(
        <div>
            <div className='resultado'> {params.descricao} </div>
            <div className='resultado'> {params.textopadrao} </div>
            <div> {params.naoobr} </div>
        </div>
    )
}   

export default resultado