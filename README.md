# Ciclo Completo de Testes de Software
*Projeto Final UC: Gestão e Qualidade de Software*


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
    - [Dependências do Cypress⚠️](#dependências-do-cypress️)
    - [Saiba mais sobre automação de testes em Cypress🔗🦾](#saiba-mais-sobre-automação-de-testes-em-cypress)
  - [Resultados e Análises🧪](#resultados-e-análises)
    - [Documento com todos os casos de testes📑](#documento-com-todos-os-casos-de-testes)
  - [Documentação completa](#documentação-completa)


## Introdução
Realizamos análises e testes do site [The Internet](https://the-internet.herokuapp.com/). Desenvolvemos casos de teste baseadas nas funções do sistema estudado, implementamos a automação de testes no [Cypress](https://www.cypress.io/), avaliando sua usabilidade, validação de alertas, autenticações e de upload de arquivos. 


## Execução dos Testes

### Testes Funcionais 
Durante o projeto, executamos testes funcionais do sistema de forma automatizada com o [Cypress](https://www.cypress.io/), e realizamos de acordo com os casos de teste desenvolvidos. 

Realizamos os testes funcionais na expectativa de verificar se as funções do site estão de acordo com o esperado, verificando entradas do usuário e respostas retornadas do sistema. Com isso, apontaremos possíveis melhorias e correções que poderiam melhorar a experiência do usuário final.

### Dependências do Cypress⚠️
É necessário ter o Node.js no sistema, em conjunto do Npm, que comumente é instalado em conjunto com o Node.js.

Utilizamos as seguintes versões:
- **Node.JS:** 20.17.0
- **npm:** 10.8.2
- **Cypress:** 13.16.0

### [Saiba mais sobre automação de testes em Cypress🔗🦾](https://github.com/brayan-duwe/testes-gestao-e-qualidade/tree/main/AULA_AUTOMACAO_CYPRESS)

O passo a passo também está disponível na [documentação completa do trabalho](https://docs.google.com/document/d/1sfQ5ebAMr92Ezx_eIJmeqRVZb66p95vc_G8lKgs7ZTs/edit?usp=sharing).


## Resultados e Análises🧪

### [Documento com todos os casos de testes📑](/CASOS%20DE%20TESTES.pdf)
- **[autenticação.cy.js:](/cypress/e2e/autenticacao.cy.js)** 
*(TC001 - Validar entrada no sistema com login e senha corretos)*

**Entrada esperada:**
- **usuário:** admin
- **senha:** admin

**Descrição do Teste:**
Teste realizado em uma página básica de login via prompt do navegador, conta com autenticação básica.
<p align="center">
    <img src="https://github.com/user-attachments/assets/18dd8ca8-51d3-49ed-b881-6ce44fd305bf" alt="prompt de login" width="250">
</p>



Após o login com as credenciais válidas, o sistema retorna uma mensagem de sucesso. 

<p align="center">
    <img src="https://github.com/user-attachments/assets/ab8a30a9-d178-491c-8907-0f12121df416" alt="prompt de login" width="420">
</p>

Em caso de credenciais incorretas, o sistema retorna a parte do login, limpa os campos de usuário e senha e dá a oportunidade do usuário digitar novamente.

- **[uploadArquivo.cy.js](/cypress/e2e/uploadArquivo.cy.js)**
*(TC002 - Validar upload de arquivos no sistema)*

Para esse teste, tivemos que instalar a biblioteca "cypress-file-upload", e adicionar o comando “import 'cypress-file-upload';” no arquivo [commands.js](./cypress/support/commands.js).

<p align="center">
<img src="https://github.com/user-attachments/assets/b51dab51-3af0-4cdc-acce-029e24ea9abd" alt="página de upload de arquivos" width="500">
</p>
<p align="center">
<sup>Página de upload de arquivos</sup>
</p>

Testamos o upload do arquivo [CASOS DE TESTES.pdf](./CASOS%20DE%20TESTES.pdf) e o mesmo foi bem sucedido, o sistema retorna a mensagem **"File Uploaded!"** e mostra o nome do arquivo que foi enviado.

**Observações:**
Ao clicar diretamente no botão de **"Upload"** sem antes ter selecionado um arquivo, o sistema redireciona a uma página em branco com a mensagem de erro: "Internal Server Error", ao invés de retornar uma mensagem como "Selecione um arquivo para upload" ou semelhante, e dando a alternativa do usuário fazer o upload sem ter que recarregar a página. 

<p align="center">
<img src="https://github.com/user-attachments/assets/6b20b0fd-c5a9-485d-9d8f-3ec0c8ff466b" alt="página de upload de arquivos" width="300">
</p>
<p align="center">
<sup>Página de erro ao clicar em Upload sem ter selecionado um arquivo</sup>
</p>

**Observações:**
Fizemos o teste de upload de um arquivo de pouco mais de 120mb, que é um valor razoável para a maioria dos arquivos e o sistema demorou um pouco para realizar o upload mas realizou e retornou a mensagem "File Uploaded!" também.

- **[checkboxes.cy.js](/cypress/e2e/checkboxes.cy.js)**
*(TC005 - Verificar o funcionamento do "Checkboxes"")*

O teste foi realizado na página "Checkboxes", onde o usuário pode marcar e desmarcar as caixas de seleção.

**Entrada esperada:**
Nenhuma entrada adicional é necessária além da interação com as caixas de seleção.

**Descrição do Teste:**
Testamos a funcionalidade das caixas de seleção, verificando se elas podem ser marcadas e desmarcadas corretamente. O processo consistiu em:
1. Marcar cada caixa de seleção.
2. Desmarcar as caixas de seleção.
3. Confirmar que o estado de cada caixa (marcada ou desmarcada) foi alterado com sucesso.
   
**Comportamento observado:**
- Ao clicar nas caixas de seleção, elas alternaram entre os estados de marcada e desmarcada como esperado.
- O sistema respondeu rapidamente, sem falhas, durante as interações.
- Testado nos navegadores Chrome, Firefox e Edge, o comportamento foi consistente em todos.
  
**Observações:**
- O comportamento de marcação/desmarcação foi muito rápido e não apresentou nenhum atraso ou erro de renderização.
- Seria interessante testar com um maior número de caixas de seleção para verificar se o desempenho se mantém estável com mais elementos na página.

- **[dropdown.cy.js](/cypress/e2e/dropdown.cy.js)**
*(TC008 - Validar o funcionamento do "Dropdown")*

O teste foi realizado na página de Dropdown, que permite selecionar opções a partir de uma lista suspensa.

**Entrada esperada:**
Nenhuma entrada adicional é necessária além da seleção de opções no dropdown.

**Descrição do Teste:**
Testamos o funcionamento do dropdown selecionando as opções disponíveis ("Option 1" e "Option 2"). Ambas as seleções foram realizadas com sucesso, e o sistema destacou corretamente a opção selecionada.

**Comportamento observado:**
- O sistema respondeu corretamente ao clique, exibindo as opções disponíveis e marcando a seleção no campo do dropdown.
- Nenhum erro foi observado durante o teste em navegadores Chrome, Firefox e Edge.

**Observações:**
Uma melhoria seria incluir uma mensagem ou notificação após a seleção, informando que a escolha foi registrada ou vinculada a uma ação. Isso pode ser útil para sistemas mais complexos.

- **[alertas.cy.js](/cypress/e2e/alertas.cy.js)**
*(TC013 - Validar a funcionalidade de "JavaScript Alerts")*

O teste foi realizado na página de JavaScript Alerts, que exibe diferentes tipos de alertas acionados por botões.

**Entrada esperada:**
Nenhuma entrada adicional é necessária.

**Descrição do Teste:**
Testamos os três tipos de alertas disponíveis na página:
1. **Alerta simples (alert):** O botão exibiu corretamente uma caixa de diálogo com a mensagem "I am a JS Alert", que foi fechada ao clicar em "OK".
2. **Alerta de confirmação (confirm):** O botão exibiu um alerta com as opções "OK" e "Cancel". Ao clicar em "OK", foi exibida a mensagem "You clicked: Ok". Ao clicar em "Cancel", foi exibida a mensagem "You clicked: Cancel".
3. **Alerta com prompt:** O botão exibiu uma caixa de diálogo com campo para entrada de texto. Após digitar um valor e confirmar, a mensagem exibida foi "You entered: [texto digitado]".

**Comportamento observado:**
- Todos os tipos de alerta funcionaram conforme o esperado.
- A interação com os alertas foi consistente em diferentes navegadores testados (Chrome, Firefox e Edge).




## Documentação completa
**[Clique aqui para acesso a documentação completa do trabalho 📃](https://docs.google.com/document/d/1sfQ5ebAMr92Ezx_eIJmeqRVZb66p95vc_G8lKgs7ZTs/edit?usp=sharing)**