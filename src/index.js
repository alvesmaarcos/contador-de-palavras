const fs = require('fs')
const trataErros = require('./trataErros')
const caminhoArquivo = process.argv
const link = caminhoArquivo[2]

fs.readFile(link, 'utf-8', (err, texto) => {
    try{
        if(err) throw err
        contaPalavras(texto)
    }
    catch(err) {
        trataErros(err)
    }
})

function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return []
        return verificaPalavrasDuplicadas(paragrafo)
    })
    console.log(contagem)
}


function extraiParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n')
    return paragrafos
}



function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}



function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ')
    const resultado = {}

    listaPalavras.forEach(palavra => {
        if(palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra)
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    });

    return resultado
}