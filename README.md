<p align="center">
  <img src="./images/cover.jpg" alt="my banner">
</p>


## 🎯 Objetivo 

&emsp; O objetivo deste relatório é documentar um caso de teste de software relacionado ao projeto do Módulo 5 da Turma 9 - Engenharia de Software. Para isso, será utilizado o framework Jest para a realização de testes unitários e de integração.


&emsp; O caso de teste a ser documentado é referente à funcionalidade de envio de listas de presença para um banco de dados. A funcionalidade é composta por um endpoint que recebe uma lista de presença e a insere no banco de dados mockado.

### Tecnologias Utilizadas

![](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)


## 🔍 Pré Condições 
Antes de executar os casos de teste, é necessário que:

- O ambiente esteja configurado com as dependências necessárias para a execução dos testes.
- O servidor esteja em execução.
- O banco de dados de presenças está funcional, esteja ele vazio ou contendo registros existentes.
- O sistema está acessível e operacional.

## 🛠️ Procedimentos de Teste

- Enviar uma solicitação POST para a rota /presenca com os parâmetros studentid e classid.
- Verificar o retorno da solicitação.

## 💭 Resultados Esperados

### Caso 1 - Se a presença for registrada com sucesso
- O sistema deve retornar um status HTTP 201 (Created).
- O corpo da resposta deve conter a mensagem "Presença registrada com sucesso.".

### Caso 2 - Se a lista de presença estiver vazia
- O sistema deve retornar um status HTTP 400 (Bad Request).
- O corpo da resposta deve conter a mensagem "A lista de presença está vazia.".

### Caso 3 - Se algum dos parâmetros studentid ou classid for nulo
- O sistema deve retornar um status HTTP 400 (Bad Request).
- O corpo da resposta deve conter a mensagem "Parâmetros nulos.".

### Caso 4 - Se algum dos parâmetros studentid ou classid for inválido
- O sistema deve retornar um status HTTP 400 (Bad Request).
- O corpo da resposta deve conter a mensagem "Parâmetros inválidos.".

### Caso 5 - Se a presença já estiver registrada no banco de dados
- O sistema deve retornar um status HTTP 400 (Bad Request).
- O corpo da resposta deve conter a mensagem "Presença já registrada.".

## ✅ Resultados Obtidos

### Caso 1 - Se a presença for registrada com sucesso
- O sistema retornou um status HTTP 201 (Created).
- O corpo da resposta continha a mensagem "Presença registrada com sucesso.".
- O banco de dados de presenças contém um novo registro.

### Caso 2 - Se a lista de presença estiver vazia
- O sistema retornou um status HTTP 400 (Bad Request).
- O corpo da resposta continha a mensagem "A lista de presença está vazia.".
- O banco de dados de presenças não foi alterado.

### Caso 3 - Se algum dos parâmetros studentid ou classid for nulo
- O sistema retornou um status HTTP 400 (Bad Request).
- O corpo da resposta continha a mensagem "Parâmetros nulos.".
- O banco de dados de presenças não foi alterado.

### Caso 4 - Se algum dos parâmetros studentid ou classid for inválido
- O sistema retornou um status HTTP 400 (Bad Request).
- O corpo da resposta continha a mensagem "Parâmetros inválidos.".
- O banco de dados de presenças não foi alterado.

### Caso 5 - Se a presença já estiver registrada no banco de dados
- O sistema retornou um status HTTP 400 (Bad Request).
- O corpo da resposta continha a mensagem "Presença já registrada.".
- O banco de dados de presenças não foi alterado.

## 📊 Pós Condições

- O banco de dados de presenças pode conter novos registros, dependendo do resultado do teste.
- O sistema permanece acessível e operacional.
- O servidor permanece em execução, a menos que especificado de outra forma.
