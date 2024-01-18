# node-serverless-lambda-typescript

## Description

node-serverless-lambda-typescript: Aplicação serverless dedicada a listar os usuários do Star Wars passando o nome como parametro.

## Environments Urls

| Environment | URL                                |
| ----------- | ---------------------------------- |
| LOCAL       | <http://localhost:3000/local/user> |

## Star Wars Endpoints

| URL                     |
| ----------------------- |
| <https://swapi.dev/api> |

## Getting Started

Copie as variáveis de ambiente exemplo

```sh
$ cp .env.example .env
```

Rode a aplicação

```sh
$ npm install
$ npm run start:dev
```

## Testing

```sh
$ npm run test
```

Envie uma requisição HTTP conforme cURL abaixo:

```
curl --location 'http://localhost:3000/local/user' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Luke Skywalker"
}'
```

## NPM Commands

| Comando             | Descrição                           |
| ------------------- | ----------------------------------- |
| start:dev           | Inicializa o projeto                |
| lint                | Aplica lint em todo o projeto       |
| test                | Executa todos os testes do projeto  |
| update-dependencies | Atualiza as dependências do projeto |

## Build with

- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Lint Staged](https://github.com/okonet/lint-staged#readme)
- [Husky](https://typicode.github.io/husky/#/)
