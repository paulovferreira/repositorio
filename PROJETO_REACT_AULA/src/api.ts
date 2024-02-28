import { isForStatement } from "typescript";

export const api = {
    CarregarUsuarioUnico: async(param: string) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/' + param);            
        let json = await response.json(); 
        return json;
    },

    CarregarTodosUsuarios: async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/');    
        let json = await response.json(); 
        return json;
    },
    
    AdicionarUsuarios: async (title: string, body: string, userId: number) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', 
        {        
            method: 'POST',
            body: JSON.stringify
            ({         
                title, body, userID: 1}),                
            headers: {              
                'Content-Type': 'application/json'
                }                                        
         }   
         );    
        let json = await response.json();        

        console.log(json);
        return json;
    },

    AdicionarcomArquivo: async (formData: FormData) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', // url de exemplo, não permite inserção de informações.
        {        
            method: 'POST',
            body: formData                                       
         }   
         );    
        let json = await response.json();        

        console.log(json);
        return json;
    },

    Logar: async(username:string, password:String) => {
        {             
            
            let response = await fetch('http://localhost:3010/usuarios/login', 
            {              
                method: 'POST',
                body: JSON.stringify
                ({         
                   email:username, senha:password }),                   
                headers: {              
                    'Content-Type': 'application/json; charset=utf-8'
                    }                 
                
             }   
             );    
            let json = await response.json();        
    
            console.log(json);
            return json;
        }
    }






}