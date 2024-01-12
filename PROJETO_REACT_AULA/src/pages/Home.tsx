import { useContext } from "react";
import Cabecalho from "../components/cabecalho";
import { UsuarioLogadoContext, UsuarioLogadoProvider } from "../contexts/contextAuth";


function Home () {
    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    return (
    <div>
        {  ( !UsuarioLogadoCtx?.name || UsuarioLogadoCtx?.name === null) &&
        <>
            <p>
                Usuário Sem permissão de acesso!
            </p>
        </>

    }
    {UsuarioLogadoCtx?.name &&

        <>
            <Cabecalho titulo="home" />        
            <UsuarioLogadoProvider>
                <p>Usuário Logado: {UsuarioLogadoCtx?.name} </p>    
            </UsuarioLogadoProvider>
        
        <h1>ESSA É A PÁGINA HOME!</h1>
       </>
       }
    </div>
    )
}

export default Home