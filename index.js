import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();


function extraiLinks(arquivos) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;

    while ((temp = regex.exec(arquivos)) !== null) {
        arrayResultados.push({
            [temp[1]]: temp[2]
        })
    }

    return arrayResultados.length == 0 ? "Não há links" : arrayResultados;
}

function trataErro(erro) {
    throw new Error(erro.code, erro.message);
}

export default async function pegaArquivo(caminhoArquivo) {
    const caminhoAbsoluto = path.join(__dirname, '.', caminhoArquivo);
    const encoding = 'UTF-8';
    try {
        const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
        const result = await Promise.all(arquivos.map(async(arquivo) => {
            const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
            const texto = await fs.promises.readFile(localArquivo, encoding);
            return extraiLinks(texto);
        }));
        console.log('arquivos', arquivos);
        return result;
    } catch (erro) {
        trataErro(erro);
    }
}