import fs from 'fs'
import trataErros from './erros/trataErros.js'
import { contaPalavras } from './index.js'

const caminhoArquivo = process.argv
const link = caminhoArquivo[2]
const endereco = caminhoArquivo[3]

fs.readFile(link, 'utf-8', (err, texto) => {
    try{
        if(err) throw err
        const resultado = contaPalavras(texto)
        criarESalvarArquivo(resultado, endereco)
    }
    catch(err) {
        trataErros(err)
    }
})

async function criarESalvarArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`
    const texto = JSON.stringify(listaPalavras)

    try{
        await fs.promises.writeFile(arquivoNovo, texto)
        console.log('arquivo criado')
    } 
    catch(erro) {
        throw erro
    }
}