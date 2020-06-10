# Ecoleta

![Ecoleta](https://i.ibb.co/5MLNKSp/Ecoleta-Copy.png)

Ecoleta é uma aplicação desenvolvida .durante a semana Next Level Week da RocketSeat que tem como objetivo o cadastro e visualização no mapa de pontos de coleta de resíduos, como: Lâmpadas, Pilhas e Baterias, Resíduos Orgânicos, etc.

Abaixo, segue um resumo do conteúdo aprendido durante o desenvolvimento da aplicação. Verifique o histórico de commits para mais detalhes das features e código utilizado.

## BackEnd 

Backend desenvolvido em NODE.js utilizando principalmente a biblioteca express para lidar com as rotas da aplicação.

##### Entendendo Rotas e Recursos: 

  - **Rotas**: São os caminhos que o usuário quer acessar em um site, por exemplo `localhost:3333/users`, para listar todos os usuários da aplicação. É o endereço completo da requisição. Obs.: Rotas devem ser semânticas e intuitivas.
  - **Recursos**: São exatamente as entidades do sistema que o usuário quer acessar. Por exemplo: `/users` no caminho acima. 

##### Métodos HTTP:

Existem diversos métodos HTTP com variadas funções, entretanto, estão listadas abaixo as que foram utilizadas no projeto.

- **GET**: Buscar uma ou mais infomações do back-end.
- **POST**: Criar uma nova informação no back-end.
- **PUT**: Atualizar uma informação existente no back-end.
- **DELETE**: Remover uma informação do back-end.

##### Tipos de Parâmetros HTTP:

- **Request Param**: Parâmetros que são enviados na própria rota e que identificam um único recurso. Exemplo: `http://localhost:3333/:id`. Normalmente são parâmetros obrigatórios para que a rota exista.

```javascript
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const search = users[id];
    return response.json(search);
}); 
```

- **Query Param**: Parâmetros que também são passados pela rota, entretanto, são opcionais. Utilizados normalmente para fazer **filtros na aplicação**. 

```javascript
app.get('/users', (request, response) => {
    const query = String(request.query.search);
    const filteredUsers = query ? users.filter(user => user.includes(query)) : users;
    return response.json(filteredUsers);
}); 
``` 

- **Request Body**: Corpo da requisição, são parâmetros para criação e atualização de informações, **que não devem aparecer ou conter na rota**. 

```javascript
app.post('/users', (request, response) => {
    const data = request.body;
    const user = {
        name: data.name,
        email: data.email
    }
    return response.json(user);
});
```

## Banco de Dados

##### Tecnologias utilizadas:

- **SQLITE**
- **KNEX**: Uma interface/biblioteca que permite trabalhar com banco de dados SQL utilizando uma linguagem universal para quase todos esses bancos, no caso desse projeto, JavaScript.

> **Migrations**: funcionam como o histórico do banco de dados, como se fosse um controle de versão de código, só que do banco de dados. 
> **Seeds**: Serve para popular tabelas quando precisamos que a aplicação já comece com alguns dados básicos, nesse caso, **os items que podem ser utilizados pelo Ecoleta**.

- **Serialização**: Processo de transformar os dados para um novo formato para facilitar a acessibilidade para quem vai requisitar esses dados. Nesso caso, as imagens dos items.
- **Transaction**: Funcionalidade do Knex que permite que queries sejam executadas somente se ambas tiverem sucesso, caso uma dependa da outra.

## FrontEnd

FrontEnd da aplicação desenvolvido com REACT e TypeScript.

##### Conceitos

- **DOM**: Árvore de elementos do HTML.
- **JSX**: A possibilidade de escrever HTML dentro do JavaScript. Sintaxe de XML dentro do JavaScritp.
- **Componentes**: É o ato de separar a aplicação em pequenos blocos que podem ser reutilizados, basicamente é desacoplamento.
- **Propriedades**: É basicamente um atributo que enviamos para os componentes, parecido com os atributos do HTML.
- **React FC**: Componente escrito em formato de função. Tipo generic, é basicamente um tipo do TypeScritp que pode receber parâmentros.
- **Interface**: É uma forma de definir a tipagem de um objeto. Sempre que precisamos criar um estado para um **Array ou Objeto** precisamos manualmente informar o tipo da variável que vai ser armazenada ali dentro. Dessa forma, utilizamos uma **Interface** para criar uma representação do formato que aquele objeto vai ter.
- **Estado e Imutabilidade**:
> **Estado**: Devemos utilizar um estado quando queremos armazenar uma informação a partir de um componente. Armazenar as informações de ação dos usuários, por exemplo. São informações mantidas pelo próprio componente.
> **Imutabilidade**: Não é possível alterar o valor de um estado de forma direta, precisamos criar um novo valor para o estado com as modificações que precisamos.


## Configuração e uso

##### Backend
Ecoleta precisa do [Node.js](https://nodejs.org/) v12+ para executar corretamente.

Instale as dependências e as dependências de desenvolvimento, inicialize o banco de dados e inicie o servidor.

```sh
$ cd server
$ npm install -d
$ npm run knex:migrate
$ npm run knex:seed 
$ npm run dev
```

##### Frontend

Instale as dependências e as dependências de desenvolvimento, e inicie o servidor.

```sh
$ cd web
$ npm install -d 
$ npm start
```
