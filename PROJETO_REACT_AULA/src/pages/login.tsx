import { useNavigate } from "react-router-dom";
import { ChangeEvent, useContext, useState } from "react";
import { api } from "../api";
import { UsuarioLogadoContext } from "../contexts/contextAuth";

/* Aula final: 
    - api.ts
    - Login
    - Home
    - Contexto
*/

function Login () {

    const [fUser, setfUser] = useState('');
    const [fSenha, setfSenha] = useState('');

    const navigate = useNavigate();

    const handlefUserChange = (e: ChangeEvent<HTMLInputElement>) => {
        setfUser(e.target.value)
    }

    const handlefSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setfSenha(e.target.value)
    }

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

     
    const RealizarLogin = async () => {
        {
        // Metodo para buscar na API o login e senha informados pelo usuário.

            let json = await api.Logar(fUser, fSenha);
            if (json.status) {
                alert('Bem vindo, ' + fUser);
                UsuarioLogadoCtx?.setName(fUser);
                navigate('/home');
            } else {
                alert(json.message);
            }        
        }
    }
    
    return (
    <div>
        <div className="login">
            <h1>página de Login</h1>
            <p>Usuario Logado: {UsuarioLogadoCtx?.name}</p>               

            <hr />
            
            <input onChange={handlefUserChange}/>
            <br />
            <input onChange={handlefSenhaChange}/>
            <br />
            <button onClick={RealizarLogin}> Logar </button>
        </div>
     
    </div>
    )
}

export default Login;