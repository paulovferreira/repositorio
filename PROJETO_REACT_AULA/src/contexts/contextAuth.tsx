import { ReactNode, createContext,useState } from "react";

type ContextType = {
    name: string;
    age: number;
    setName: (n:string) => void;
    setAge: (n:number) => void;
}

export const UsuarioLogadoContext = createContext<ContextType | null>(null);

export const UsuarioLogadoProvider = ({ children}: {children: ReactNode}) => {
    const[name, setName] = useState('');
    const[age, setAge] = useState(0);
    
    return (
        <UsuarioLogadoContext.Provider value={{name, age, setName, setAge}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )

}