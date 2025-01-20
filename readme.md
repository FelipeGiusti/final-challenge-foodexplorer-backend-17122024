# Projeto Final - Curso Explorer [Back-End] - RocketSeat

## Descrição

Este é o projeto final do curso Explorer, no qual foi desenvolvido o Food Explorer. O objetivo deste projeto é desenvolver uma aplicação completa para um cardápio digital utilizando as tecnologias aprendidas HTML, CSS, JavaScript, Node.js e React.js.

O projeto tem como propósito a criação de uma interface amigável para a visualização e interação com os pratos de um restaurante ficticio, oferecendo uma experiência imersiva desde a seleção até o pagamento do pedido.

## Funcionalidades

- Cadastro e acesso do usuário: Permite ao usuário se cadastrar e acessar os pratos disponiveis no sistema.
- Gerenciamento por ADMIN: Permite ao ADMIN gerenciar os pratos fazendo a inclusão, edição e exclusão dos itens.
- Favoritar um prato: Permite o usuário favoritar os seus pratos preferidos.

## Tecnologias Utilizadas

- Node.js - Ambiente de execução de códigos JavaScript;
- Express.js - Framework para criação de aplicativos e APIs;
- CORS - Mecanismo que garente a navegação segura do usuário;
- SQLite - Banco de dados relacional que não necessita de um servidor;
- JSON Web Token (JWT) - Uma forma de autenticação que permite a transmissão segura de informações entre duas partes;
- Multer - Middleware do Node.js que permite fazer upload de arquivos;
- Knex.js - Ferramenta que facilita o acesso e a interação com bancos de dados relacionais;
- BCrypt.js - Método de criptografia do tipo hash para senhas;

## Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas no seu sistema:

- Visual Studio Code;
- Node.js;

### Passos para rodar o projeto

1. Clone este repositório para o seu computador:

   ```bash
        git clone https://github.com/FelipeGiusti/final-challenge-foodexplorer-backend-17122024.git
   ```
2. Navegue até o diretório do projeto:
    ```bash
        cd /final-challenge-foodexplorer-backend-17122024
    ```

3. Instale as dependências (caso aplicável):
    ```bash
        npm install
    ```

4. Configure as variaveis de ambiente criando um arquivo ```.env``` utilizando as variaveis abaixo:
    ```bash
        PORT=3333
        AUTH_SECRET=
    ```

5. Execute as migrations:
    ```bash
        npm run migrate
    ```

6. Execute as seeds:
    ```bash
        npm run seed
    ```

7. Execute o servidor da aplicação:
    ```bash
        npm start
    ```

### Credenciais de acesso
Para criar o token de autenticação, utilize as credenciais fornecidas no endpoint /sessions.

Administrador:

    Login: admin@email.com
    Senha: 123456

Usuário:

    Login: user@email.com
    Senha: 123456

### Front-End
O projeto frontend para executar junto desta aplicação encontra-se no repositório [Front-End Food Explorer](https://github.com/FelipeGiusti/final-challenge-foodexplorer-frontend-16122024).

### API
Este projeto está publica no Render para consumo do Front End, basta acessar o link abaixo e confirmar a mensagem de retorno.

[API](https://foodexplore-api-felipegiusti.onrender.com)

## Licença MIT

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

A Licença MIT é uma licença permissiva que permite a você usar, copiar, modificar, fundir, publicar, distribuir, sublicenciar e/ou vender cópias do software, desde que inclua a seguinte declaração de direitos autorais e a isenção de responsabilidade no software ou nas partes dele que forem distribuídas:

> Copyright (c) [2024] [Felipe Giusti]
> 
> O software é fornecido "no estado em que se encontra", sem qualquer garantia expressa ou implícita, incluindo, mas não se limitando a garantias de comercialização ou adequação a um propósito específico. Em nenhum caso os autores ou detentores dos direitos autorais serão responsáveis por qualquer reclamação, dano ou outra responsabilidade, seja em uma ação de contrato, ato ilícito ou outra, resultante de ou em conexão com o software ou o uso ou outros negócios com o software.


## Contato
 - [Email](felipeegiusti@gmail.com)
 - [LinkedIn](in/felipegiusti2806)
 - [GitHub](https://github.com/felipegiusti)
 - [WhatsApp](https://wa.me/5544997720625?text=Ol%C3%A1%2C%20vi%20seu%20projeto%20Food%20Explorer%20no%20LinkedIn!)

## Guia de Resolução
 - [Entrega](https://app.rocketseat.com.br/explorer/final-challenge)
 - [Guia](https://efficient-sloth-d85.notion.site/Guia-de-resolu-o-do-desafio-final-do-Explorer-v2-b38a81fe7cb5486e9e3fa600da5b3390?pvs=4)
