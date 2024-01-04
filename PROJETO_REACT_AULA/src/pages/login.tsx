import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/context";


function Login () {

    const {nome, idade} = useContext(Context);

    return (
    <div>
        <div className="login">
            <h1>página de Login</h1>
            teste de acesso do {nome} que tem idade = {idade} anos

            <hr />
            <input />
            <br />
            <input /> 
            <br />
            <button> <Link to="/home">Ir para Home</Link></button>
        </div>
     
    </div>
    )
}

export default Login;