# Projeto de API Node.js com PostgreSQL

Este é um projeto de exemplo que demonstra como criar uma API simples em Node.js que se comunica com um banco de dados PostgreSQL usando o Neon.js.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js: [Download Node.js](https://nodejs.org/)
- Conta Neon: [Entrar/Cadastrar](https://neon.tech/)

## Instalação

1. Clone este repositório em sua máquina:

   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git

2. Navegue até o projeto e execute no seu terminal:

    ```bash
   npm install

## Configuração do Banco de Dados

1. Faça a configuração do seu .env com as informações dos seu Banco de Dados - [Mais Instruções](https://neon.tech/docs/connect/connect-from-any-app)
2. Crie a base de dados "videos" e rode o seguinte comando no seu terminal:

    ```bash
    node create-table.js

3. Caso queira usar uma porta configurada no seu .env, fiqeu a vontade, mas também é possível rodar o projeto diretamente da porta 3333

## Execução do Projeto

1. Inicie o servidor da API:
    ```bash
    npm start
- Também é possível executar da seguinte maneira:
    ```bash
    npm run dev
2. A API estará disponivél em `http://localhost:3333` (ou na porta definida por você no .env)

## Rotas da API

1. Você poderá fazer os testes das rotas usando o arquivo `routes.http` caso esteja usando o VSCode, instale a extenção `Rest Client`

### Rotas:

- POST http://localhost:3333/videos
- GET http://localhost:3333/videos
- PUT http://localhost:3333/videos/:id
- DELETE http://localhost:3333/videos/:id

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Você pode abrir problemas (issues) ou enviar solicitações de pull (pull requests).
