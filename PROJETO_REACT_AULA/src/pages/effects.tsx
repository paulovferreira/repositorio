
import { useEffect, useState } from "react";
import Cabecalho from "../components/cabecalho";
import '../estilo/estilo.css';


function Effects() { 

    const [nome, setnome] = useState('Paulo');
    const [age, setAge] = useState(90)

    const [sobrenome, setSobrenome] = useState('Ferreira')
    const [nomecompleto, setNomecompleto] = useState('')

    // useEffect( ()=> {
    //     console.log('RODOU O EFFECT ... ')}, // primeiro parametro do effect é o que ele deve rodar.
    //     []  // Segundo parâmetro é quando deve rodar. // o Array vazio não permite executar mais de uma vez.
    //         // Essa tag vazia monitora QUANDO será executado o effect. Para monitorar uma const, basta colocar [age] [name] etc...
    //  )

    // /* USANDO EFFECT PARA CONCATENAR VARIÁVEIS
    
    // useEffect( () => { 
    //     setNomecompleto(nome+' '+sobrenome)
    //     console.log(nomecompleto)    },
    //  [nome, sobrenome] 
     
    //  );*/


     // Podemos ainda utilizar o useEffect para concatenar constantes existentes.
     // Veja o exemplo de Nome e Sobrenome
  
    return(
        <div>   
            Meu nome é: {nome} e eu tenho {age} Anos

            <br />

            <button onClick={() => {setnome('Vinicius')}}>Mudar para Vinícius</button>
            <button onClick={() => {setnome('Pedro')}}>Mudar para Pedro</button>

            <hr />
            <button onClick={() => {setAge(10)}}>Mudar para 10 anos</button>
            <button onClick={() => {setAge(18)}}>Mudar para 18 anos</button>

           
        </div>
    )
}


export default Effects;