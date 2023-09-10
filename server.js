//Importando o modulo do servidor do NodeJS
import { createServer } from 'node:http'

//Criando o Servidor
const server = createServer((request, response) => {
    response.write('Hi World')

    return response.end()
})

//Definindo a porta que o Servidor usara
server.listen(3333)