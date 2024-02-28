//para testar funções presentes em um arquivo TS preciso primeiro importar esse arquivo ts.

import {soma, subtrai, divide, multiplica} from './matematica'

describe('teste de funções de matemática', () => {
    it('Soma correntamente', () => {
        let result = soma(5,8);
        expect(result).toBe(13);
        expect(result).toBeGreaterThan(12); // maior que
        expect(result).toBeLessThan(14); // menor que
    });

    it('Subtrai Corretamente', () => {
        let result = subtrai(10, 5)
        let result2 = subtrai(5, 6)
        expect(result).toBe(5)
        expect(result2).toBe(-1)
    });

    it('Divide Corretamente', () => {
        let result = divide(50, 5)
        expect(result).toBe(10)
    })

    it('Multiplica Corretamente', () => {
        let result = multiplica(10, 5)
        expect(result).toBe(50)        
    })

})

export {}