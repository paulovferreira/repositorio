import { useContext } from "react";
import { Context } from "../contexts/context";

// Criando o import do reducer - Nativo do React
import { useReducer } from "react";

// Para controle total do estado do meu count, preciso controlá-lo atravez de um type.
type reducerState= {
    count: number;
    
    
}

// O action é o que determinará o que será possível executar no meu reducer. 
type reducerAction= {
    type: String;    

}

// O InitialState determinará o valor inicial do meu State, no caso meu count;
const initialState = {count: 0 }

//o myreducer, irá tratar de entender qual a ação esperada e executar a ação para modificação do State.
const myreducer = (state: reducerState,  action: reducerAction ) => {
    switch(action.type) {
      case 'ADD':
        return {...state, count: state.count + 1}        
        break;

      case 'DEL':
        if (state.count) {
           return {...state, count: state.count - 1}
        }

        break;

      case 'RESET':
        return initialState;

    }
    return state;

}

function Reducer () {

    const {nome, idade} = useContext(Context);

    const [state, dispach] = useReducer(myreducer, initialState)

    return (
    <div>
        <h1> EXEMPLO DE REDUCER - Página única  </h1>
        Utilizando Contexto nome = {nome} Idade = {idade} anos
        <br /><br /><hr /><br />

        {/* UTILIZANDO O REDUCER CRIADO  */}

        <h1> CONTAGEM = {state.count} </h1>
        <br />
        <hr />
        <button onClick={()=>dispach({type: 'ADD'})} > ADICIONAR </button>
        <button onClick={()=>dispach({type: 'DEL'})} > REMOVER</button>
        <button onClick={()=>dispach({type: 'RESET'})} > RESETAR</button>
        

        
     
    </div>
    )
}

export default Reducer;