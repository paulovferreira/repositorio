//Comando para procurar um arquivo de teste e executar todos eles.


//Criando um teste generico.
describe('Testes de funções de matemática Matematica', () => {

    it('Somar 1 + 1', () => {   // condição para o teste acontecer
        let result = 1 + 1; // teste acontecendo

        expect(result).toBe(2);

    }); 

    it('Testes de multiplicação de números 5 e 3', () => {

        let result = 5 * 3;

        expect (result).toBe(15)

    })
})

// teste pronto, basta executar: npm run test
// Verifique no package.json a biblioteca de testes implenetada e disponibilizada para execução.

// Após o teste executado e rodando, toda modificação será recompilada o teste.



export {};