Desafio do Bootcamp.

## Backend

### Set inicial

Instale através do docker um mongo, postgres e redis.
Configure as variaveis ambiente atraves do arquivo .env na raiz do projeto.

Dentro da pasta backend execute o comando `yarn` para instalar as dependências.

### Migrations

Execute as migrations através do comando

#### `yarn sequelize db:migrate`

### Seeds

Execute as Seeds através do comando abaixo para popular a base com estudantes,
planos e usuário administrador.

#### `yarn sequelize db:seed:all`

### Executar o projeto

Para rodar o projeto, execute o comando

#### `yarn dev`

## Frontend

Dentro da pasta frontend execute o comando `yarn` para instalar as dependências.

Para rodar o projeto, execute o comando:

#### `yarn start`

## Mobile

Dentro da pasta mobile execute o comando `yarn` para instalar as dependências.
O projeto mobile foi construído para Android.

Para rodar o projeto, execute o comando:

#### `react-native run-android`
