const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args));

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise.all(arrayURLs.map(async url => {
            const res = await fetch(url);
            return `${res.status} - ${res.statusText}`;
        }));
        return arrayStatus;
    } catch (erro) {
        throw trataErro(erro);
    }
}

function trataErro(erro) {
    throw new Error(erro.code, erro.message);
}

function geraArrayURLs(arrayLinks) {
    let atual = 0;
    let arrayResultados = []
    while (atual < arrayLinks.length) {
        let arrayAtual = arrayLinks[atual];
        arrayResultados.push(arrayAtual.map(objetoLink => Object.values(objetoLink).join()));
        atual++;
    }
    let arrayFinal = [].concat(...arrayResultados)
    return arrayFinal;
}

export default async function validaURLs(arrayLinks) {
    const links = geraArrayURLs(arrayLinks);
    const statusLink = await checaStatus(links);

    let atual = 0;
    let arrayResultados = []

    while (atual < arrayLinks.length) {
        let arrayAtual = arrayLinks[atual];
        //spread operator
        arrayResultados.push(arrayAtual.map((objeto, i) => ({
            ...objeto,
            Status: statusLink[i]
        })));
        atual++;
    }
    let arrayFinal = [].concat(...arrayResultados)
    return arrayFinal;
}