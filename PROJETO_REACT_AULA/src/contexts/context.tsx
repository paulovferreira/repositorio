import { createContext } from "react";

type ContextType = {
    nome: string;
    idade: number;
}

const initialState = {
   nome: 'Senac',
   idade: 50
}

export const Context = createContext<ContextType>(initialState);

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )
}



