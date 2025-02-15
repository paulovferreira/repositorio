import './estilo/estilo.css'
import Outrocomponente from './Outrocomponente'


function Atividade () {
    return(
        <div>
            <hr />
            <div className='app-container'>      
                <div className='app-div1'>
                    <div className='app-div1-1'></div>
                    <div className='app-div1-2'>
                       <Outrocomponente />
                    </div>        
                    <div className='app-div1-3'></div>
                </div>

                <div className='app-div2'>
                    <div className='app-div2-1'></div>
                    <div className='app-div2-2'></div>
                </div>
                
                <div className='app-div3'>
                    <div className='app-div3-1'></div>
                    <div className='app-div3-2'></div>
                </div>
                </div>
            <hr />
        </div>
        

    )
}

export default Atividade