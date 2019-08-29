# CLI para projetos de API com Node.js

## Instalação gluegun
```
sudo yarn global add gluegun
```

## Criação de uma CLI
```
gluegun new nome-cli
```

## Tornando sua CLI um comando do terminal
```
sudo yarn link
```

----

# Libs Utilizadas para API
- ``Express`` : Responsável pela lib http;
- ``Sequelize`` : ORM;
- ``YUP`` : Responsável verificação de dados;
- ``BCryptJs`` : Responsável critografia;
- ``JsonWebToken`` : Responsável pela geração de webtoken para permissão de usuários para a utilização de algumas áreas da API;
### Dependencias de desenvolvimento
- ``Nodemon`` : Responsável por fornecer levantar o servidor e manter atualizado conforme o código vai alterando;
- ``Sucrase`` : Responsável por disponibilizar o 'import' e o 'export default' com o padrão ES6+
- ``Sequelize-cli`` : Interface de linha de comando utilizado junto com a lib sequelize para geração de migrations,
