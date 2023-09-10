/* Servidor feito em JS limpo */
// //Importando o modulo do servidor do NodeJS
// import { createServer } from 'node:http'

// //Criando o Servidor
// const server = createServer((request, response) => {
//     response.write('Hi World')

//     return response.end()
// })

// //Definindo a porta que o Servidor usara
// server.listen(3333)

/* Servidor usando Fastify */
import { fastify } from 'fastify'
import { DatabaseMemory } from "./database-memory.js";

//Instanciando Objeto para usar o framework
const server = fastify()

const database = new DatabaseMemory()

// Definindo a rota do servidor
// Usando '/' -> Rais do projeto
// (JS PURO) Request, Response => (FASTIFY) Request, Reply
server.post('/videos', (request, reply) => {

    //Criando o Request Body
    const { title, description, duration } = request.body

    database.create({
        title,
        description,
        duration,
    })

    return reply.status(201).send()
})

server.get('/videos', () => {

})

//O /:id que esta no link se chama Route Parameter
server.put('/videos/:id', () => {

})

server.delete('/videos/:id', () => {

})

server.listen({
    port: 3333,
})