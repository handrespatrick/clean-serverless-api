# node-serverless-lambda-typescript

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=handrespatrick_node-serverless-lambda-typescript&metric=bugs&token=223c3cc05872a4dbd7e170f7426414a437cf7834)](https://sonarcloud.io/summary/new_code?id=handrespatrick_node-serverless-lambda-typescript) [![Code_smells](https://sonarcloud.io/api/project_badges/measure?project=handrespatrick_node-serverless-lambda-typescript&metric=code_smells&token=223c3cc05872a4dbd7e170f7426414a437cf7834)](https://sonarcloud.io/summary/new_code?id=handrespatrick_node-serverless-lambda-typescript) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=handrespatrick_node-serverless-lambda-typescript&metric=coverage&token=223c3cc05872a4dbd7e170f7426414a437cf7834)](https://sonarcloud.io/summary/new_code?id=handrespatrick_node-serverless-lambda-typescript) [![Duplicated_lines_density](https://sonarcloud.io/api/project_badges/measure?project=handrespatrick_node-serverless-lambda-typescript&metric=duplicated_lines_density&token=223c3cc05872a4dbd7e170f7426414a437cf7834)](https://sonarcloud.io/summary/new_code?id=handrespatrick_node-serverless-lambda-typescript) [![Ncloc](https://sonarcloud.io/api/project_badges/measure?project=handrespatrick_node-serverless-lambda-typescript&metric=ncloc&token=223c3cc05872a4dbd7e170f7426414a437cf7834)](https://sonarcloud.io/summary/new_code?id=handrespatrick_node-serverless-lambda-typescript) [![Sqale_rating](https://sonarcloud.io/api/project_badges/measure?project=handrespatrick_node-serverless-lambda-typescript&metric=sqale_rating&token=223c3cc05872a4dbd7e170f7426414a437cf7834)](https://sonarcloud.io/summary/new_code?id=handrespatrick_node-serverless-lambda-typescript) [![Alert_status](https://sonarcloud.io/api/project_badges/measure?project=handrespatrick_node-serverless-lambda-typescript&metric=alert_status&token=223c3cc05872a4dbd7e170f7426414a437cf7834)](https://sonarcloud.io/summary/new_code?id=handrespatrick_node-serverless-lambda-typescript) [![Reliability_rating](https://sonarcloud.io/api/project_badges/measure?project=handrespatrick_node-serverless-lambda-typescript&metric=reliability_rating&token=223c3cc05872a4dbd7e170f7426414a437cf7834)](https://sonarcloud.io/summary/new_code?id=handrespatrick_node-serverless-lambda-typescript) [![Security_rating](https://sonarcloud.io/api/project_badges/measure?project=handrespatrick_node-serverless-lambda-typescript&metric=security_rating&token=223c3cc05872a4dbd7e170f7426414a437cf7834)](https://sonarcloud.io/summary/new_code?id=handrespatrick_node-serverless-lambda-typescript) [![Sqale_index](https://sonarcloud.io/api/project_badges/measure?project=handrespatrick_node-serverless-lambda-typescript&metric=sqale_index&token=223c3cc05872a4dbd7e170f7426414a437cf7834)](https://sonarcloud.io/summary/new_code?id=handrespatrick_node-serverless-lambda-typescript) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=handrespatrick_node-serverless-lambda-typescript&metric=vulnerabilities&token=223c3cc05872a4dbd7e170f7426414a437cf7834)](https://sonarcloud.io/summary/new_code?id=handrespatrick_node-serverless-lambda-typescript)

## Description

node-serverless-lambda-typescript: Aplicação serverless dedicada a listar as informações do personagem do Star Wars, passando o nome como parametro.

![node-serverless-lambda-typescript](./docs/node-lambda-serverless.gif)

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
- [SonarQube](https://www.sonarqube.org/)
- [Serverless](https://www.serverless.com/)
