# Ciclo Completo de Testes de Software
Projeto Final UC: Gestão e Qualidade de Software


## Tecnologias utilizadas👨‍💻
<p align="center">
    <a href="https://www.cypress.io/">
        <img src="https://github.com/user-attachments/assets/4b4e959d-5bf2-4147-bf51-5fa78871f68d" alt="logo_cypress" width="200">
    </a>

</p>

## Sumário🔍
- [Ciclo Completo de Testes de Software](#ciclo-completo-de-testes-de-software)
  - [Tecnologias utilizadas👨‍💻](#tecnologias-utilizadas)
  - [Sumário🔍](#sumário)
  - [Introdução](#introdução)
  - [Execução dos Testes](#execução-dos-testes)
    - [Testes Funcionais](#testes-funcionais)
    - [Dependências do Cypress ⚠️](#dependências-do-cypress-️)
    - [Saiba mais sobre automação de testes em Cypress🔗🦾](#saiba-mais-sobre-automação-de-testes-em-cypress)
  - [Resultados e Análises](#resultados-e-análises)
  - [Documentação completa](#documentação-completa)


## Introdução
Realizamos análises e testes do site [The Internet](https://the-internet.herokuapp.com/). Desenvolvemos casos de teste baseadas nas funções do sistema estudado, implementamos a automação de testes no [Cypress](https://www.cypress.io/), avaliando sua usabilidade, validação de alertas, autenticações e de upload de arquivos. 


## Execução dos Testes

### Testes Funcionais 
Durante o projeto, executamos testes funcionais do sistema de forma automatizada com o [Cypress](https://www.cypress.io/), e realizamos de acordo com os casos de teste desenvolvidos. 

Realizamos os testes funcionais na expectativa de verificar se as funções do site estão de acordo com o esperado, verificando entradas do usuário e respostas retornadas do sistema. Com isso, apontaremos possíveis melhorias e correções que poderiam melhorar a experiência do usuário final.

### Dependências do Cypress ⚠️
É necessário ter o Node.js no sistema, em conjunto do Npm, que comumente é instalado em conjunto com o Node.js.

Utilizamos as seguintes versões:
- Node.JS: 20.17.0
- npm: 10.8.2
- Cypress: 13.16.0

### [Saiba mais sobre automação de testes em Cypress🔗🦾](https://github.com/brayan-duwe/testes-gestao-e-qualidade/tree/main/AULA_AUTOMACAO_CYPRESS)

O passo a passo também está disponível na [documentação completa do trabalho](https://docs.google.com/document/d/1sfQ5ebAMr92Ezx_eIJmeqRVZb66p95vc_G8lKgs7ZTs/edit?usp=sharing).


## Resultados e Análises
- **autenticação.cy.js:** 
*(TC001 - Validar entrada no sistema com login e senha corretos)*

Teste realizado em uma página básica de login via prompt do navegador, conta com autenticação básica.
<p align="center">
    <img src="https://github.com/user-attachments/assets/18dd8ca8-51d3-49ed-b881-6ce44fd305bf" alt="prompt de login" width="250">
</p>

Entrada esperada:
- **usuário:** admin
- **senha:** admin

Após o login com as credenciais válidas, o sistema retorna uma mensagem de sucesso. 

<p align="center">
    <img src="https://github.com/user-attachments/assets/ab8a30a9-d178-491c-8907-0f12121df416" alt="prompt de login" width="420">
</p>

Em caso de credenciais incorretas, o sistema retorna a parte do login, limpa os campos de usuário e senha e dá a oportunidade do usuário digitar novamente.

- **uploadArquivo.cy.js**
*(TC002 - Validar upload de arquivos no sistema)*

Para esse teste, tivemos que instalar a biblioteca "cypress-file-upload", e adicionar o comando “import 'cypress-file-upload';” no arquivo [commands.js](./cypress/support/commands.js).

<p align="center">
<img src="https://github.com/user-attachments/assets/b51dab51-3af0-4cdc-acce-029e24ea9abd" alt="página de upload de arquivos" width="500">
</p>
<p align="center">Página de upload de arquivos</p>


Testamos o upload do arquivo [CASOS DE TESTES.pdf](./CASOS%20DE%20TESTES.pdf) e o mesmo foi bem sucedido, o sistema retorna a mensagem **"File Uploaded!"** e mostra o nome do arquivo que foi enviado.

uma observação é que ao clicar diretamente no botão de **"Upload"** sem antes ter selecionado um arquivo, o sistema redireciona a uma página em branco com a mensagem de erro: "Internal Server Error", ao invés de retornar uma mensagem como "Selecione um arquivo para upload" ou semelhante, e dando a alternativa do usuário fazer o upload sem ter que recarregar a página. 

<p align="center">
<img src="https://github.com/user-attachments/assets/6b20b0fd-c5a9-485d-9d8f-3ec0c8ff466b" alt="página de upload de arquivos" width="300">
</p>
<p align="center">Página de erro ao clicar em Upload sem ter selecionado um arquivo</p>

Fizemos o teste de upload de um arquivo de pouco mais de 120mb, que é um valor razoável para a maioria dos arquivos e o sistema demorou um pouco para realizar o upload mas realizou e retornou a mensagem "File Uploaded!" também.



## Documentação completa
**[Clique aqui](https://docs.google.com/document/d/1sfQ5ebAMr92Ezx_eIJmeqRVZb66p95vc_G8lKgs7ZTs/edit?usp=sharing)** para acesso a documentação completa do trabalho 📃