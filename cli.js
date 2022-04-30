#!/usr/bin/env node

import chalk from 'chalk';
import pegaArquivo from './index.js';
import validaURLs from './http-validacao.js';

const caminho = process.argv;

async function processaTexto(caminhoArquivo) {
    const resultado = await pegaArquivo(caminhoArquivo[2]);

    if (caminho[3] == 'validar') {
        console.log(chalk.cyan('Links validados: '), await validaURLs(resultado))
    } else {
        console.log(chalk.yellow('Lista de links'), resultado);
    }
}

processaTexto(caminho);