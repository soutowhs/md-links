# md-links

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Os arquivos `Markdown` normalmente contém _links_ que podem estar
quebrados, ou que já não são válidos, prejudicando muito o valor da
informação que está ali.

com essa lib, é possível, pesquisar por arquivos markdown em um diretório,
encontrar os links presentes nesses arquivos do diretório e validar o status
de cada um desses links, tudo isso, feito por apenas uma linha de comando.

## Instalação

### NPM

No terminal, executar o comando:

`npm i mdlinksfind`

Após a instalação, execute a lib com o comando `npx mdlinksfind <path-to-dir>`

* Exemplo: `npx mdlinksfind ./arquivos`

*** Nesse exemplo, a pasta arquivos contem ao menos um arquivo com a extensão .md (markdown)

Para avaliar cada link e receber a lista com os links e os status http, executar o comando:
`npx mdlinksfind <path-to-dir> validar`

* Exemplo: `npx mdlinksfind ./arquivos validar`


Link no [NPM](https://www.npmjs.com/package/mdlinksfind)
