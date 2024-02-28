import { useNavigate } from "react-router-dom";
import { ChangeEvent, useContext, useState } from "react";
import { api } from "../api";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import '../estilo/estilo.css'

/* Aula final: 
    - api.ts
    - Login
    - Home
    - Contexto
*/

function Login () {

    const [fUser, setfUser] = useState('');
    const [fSenha, setfSenha] = useState('');

    const [msgApi, setmsgApi] = useState('');

    const navigate = useNavigate();

    const handlefUserChange = (e: ChangeEvent<HTMLInputElement>) => {
        setfUser(e.target.value)
    }

    const handlefSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setfSenha(e.target.value)
    }

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    const AcessoDireto = () => {                
        UsuarioLogadoCtx?.setName(fUser);      
        navigate('/home');
    }
     
    const RealizarLogin = async () => {
        {
        // Metodo para buscar na API o login e senha informados pelo usuário.

            let json = await api.Logar(fUser, fSenha);

            if (json.status) {
                alert('Bem vindo, ' + fUser);
                UsuarioLogadoCtx?.setName(json.usuario);
                UsuarioLogadoCtx?.setAge(json.idade);
                navigate('/home');
            } else {
                setmsgApi(json.message);
            }        
        }
    }
    
    return (
    <div>
        <div className="login">
            <h1>página de Login</h1>
            <p>Usuario Logado: {UsuarioLogadoCtx?.name}</p>               

            <hr />
            <div className="login-container">
                <div className="input-group">
                    <input className="caixadetexto" onChange={handlefUserChange}/>
                </div>
                <div className="input-group">
                    <input className="caixadetexto"  onChange={handlefSenhaChange}/>
                </div>                

                <button onClick={RealizarLogin}> Logar </button>
                <br />
                {msgApi}
            </div>    
            <br />        
            <button onClick={AcessoDireto}> Acessar Diretamente </button>
        </div>
     
    </div>
    )
}

export default Login;