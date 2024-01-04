import '../../estilo/estilo.css'



const Menu = () =>{

  let PaginaPrincial: string = 'Página Principal'

  return(
    <div>
        <table>
            <tr>
                <td> <a href="https://www.google.com"> <div> {PaginaPrincial}</div> </a></td>
                <td>Menu 2</td>
                <td>Menu 3</td>
            </tr>
    </table>
    </div>
  )    
}

function cabecalho(){
    return(
       <div className='container_cabecalho'>        
          <div className='divclass1'> teste    </div>

          <div className='divclass2'>
             teste
          </div>

          <div className='divclass3'> Logout </div>
          <div className='divclass3'> Logout </div>
          <div className='divclass3'> Logout </div>
          <div className='divclass3'> Logout </div>
          <div className='divclass3'> Logout </div>
          <div className='divclass3'> Logout </div>
          <div className='divclass3'> Logout </div>
          <div className='divclass3'> Logout </div>
          <div className='divclass3'> Logout </div>
          <div className='divclass3'> Logout </div>
          <div className='divclass3'> Logout </div>
          <div className='divclass3'> Logout </div>
          <div className='divclass3'> Logout </div>
          <div className='divclass3'> Logout </div>
       </div>
    )
}

export default cabecalho