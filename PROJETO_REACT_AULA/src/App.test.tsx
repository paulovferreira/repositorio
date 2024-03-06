
import App from './App'; // importo o componente que quero testar
import {render, screen} from '@testing-library/react' 
                                                      

import{MemoryRouter} from  'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

describe('Testes de Integracao', () => {

    it('Testando rotas de page not found', () => {
        
        render(   // Para testar outra rota, é preciso renderizar a page num rota diferente da padrão.
        // Inicio a página mudando a rota.
            <MemoryRouter initialEntries={['/RotaInexistente']}>  
                <App />
            </MemoryRouter>            
        ); 
        // Após a renderização, testo elementos da página notfound, para ver
            // se ela foi renderizada.

        const ElementoNotFount = screen.getByText(/PÁGINA.*NÃO.*ENCONTRADA/); // EXPRESSÃO REGULAR PARA TESTE DE TEXTOS COMPLEXOS
        // Poderia testar de qualquer forma, pela classe, texto etc...
        expect(ElementoNotFount).toBeInTheDocument();
    });    

    it('Testando permissão de acesso para a home do projeto', () => {
        
        render(   // Para testar outra rota, é preciso renderizar a page num rota diferente da padrão.
        // Inicio a página mudando a rota.
            <MemoryRouter initialEntries={['/home']}>  
                <App />
            </MemoryRouter>            
        ); 
        // Após a renderização, testo elementos da página notfound, para ver
            // se ela foi renderizada.

        const ElementoNotFount = screen.getByText('Usuário Sem permissão de acesso!');
        // Poderia testar de qualquer forma, pela classe, texto etc...
        expect(ElementoNotFount).toBeInTheDocument();
    });    

    it('Testando se existe um elemento H1 rotas HOME renderizada', () => {
        
        const {container} = render(   // Para testar outra rota, é preciso renderizar a page num rota diferente da padrão.
        // Inicio a página mudando a rota.
            <MemoryRouter initialEntries={['/home']}>  
                <App />
            </MemoryRouter>            
        ); 
        
        const h1 = container.getElementsByTagName('h1')[0]; // pego primeiro elemento H1 da minha página.
        expect(h1.innerHTML).toBe('ESSA É A PÁGINA HOME!') // verifico se o texto do meu primeiro h1 é: xxx
        // Método mais confiável.
        
    });      
});



export {}