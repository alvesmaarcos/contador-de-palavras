import fs from 'fs'
import trataErros from './erros/trataErros.js'
import { contaPalavras } from './index.js'

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