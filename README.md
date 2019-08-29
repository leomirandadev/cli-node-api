# cli-node-api CLI

A CLI for cli-node-api.

## Customizing your CLI

Check out the documentation at https://github.com/infinitered/gluegun/tree/master/docs.

## Publishing to NPM

To package your CLI up for NPM, do this:

```shell
$ npm login
$ npm whoami
$ npm lint
$ npm test
(if typescript, run `npm run build` here)
$ npm publish
```

# License

MIT - see LICENSE


---


# Libs Utilizadas para API gerada
- ``Express`` : Responsável pela lib http;
- ``Sequelize`` : ORM;
- ``YUP`` : Responsável verificação de dados;
- ``BCryptJs`` : Responsável critografia;
- ``JsonWebToken`` : Responsável pela geração de webtoken para permissão de usuários para a utilização de algumas áreas da API;
### Dependencias de desenvolvimento
- ``Nodemon`` : Responsável por fornecer levantar o servidor e manter atualizado conforme o código vai alterando;
- ``Sucrase`` : Responsável por disponibilizar o 'import' e o 'export default' com o padrão ES6+
- ``Sequelize-cli`` : Interface de linha de comando utilizado junto com a lib sequelize para geração de migrations,
