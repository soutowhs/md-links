// import { expect, test } from "@jest/globals";
import pegaArquivo from '../index.js';

const arrayResultado = [
    [{
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }]
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async() => {
        const resultado = await pegaArquivo('./test/src')
        expect(resultado).toEqual(arrayResultado);
    })
})