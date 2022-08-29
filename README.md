# Semana Front-end Mundo Invertido DIO.

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/diasPaulo/semana-frontend-mundo-invertido?style=flat)
![GitHub language count](https://img.shields.io/github/languages/count/diasPaulo/semana-frontend-mundo-invertido?style=flat)

Projeto construído para fins didáticos, com o objetivo de colocar em prática os conhecimentos de HTML, CSS e JavaScript aprendidos na DIO.

O repositório do projeto encontra-se disponível [neste link](https://github.com/digitalinnovationone/semana-frontend-mundo-invertido/).

## O Projeto
---

<br />

![Mockup do projeto mostrando a tela do projeto em um notebook](./images/mockup.png)

> Projeto desenvolvido com o intuíto de aprimorar minhas habilidades de HTML, CSS e Javascript. Este projeto foi retirado do [repositório da semana Frontend Mundo Invertido da DIO](https://github.com/digitalinnovationone/semana-front-end-mundo-invertido/) na qual foi realizado nos dias 23, 24 e 25 de setembro de 2022 com o intuito didático e disceminação de conhecimento na área de front-end.

## Tecnologias

 - HTML
 - CSS
 - Javascript
 - Firebase

## ☕ Desenvolvimento

Inspirada na série Stranger Things, landing page desenvolvida durante a semana Front-end da DIO. 

Durante a semana foram realizadas abordagens para o desenvolvimento do projeto apenas para a plataforma desktop. Com o intuito de tornar o projeto mais acessível, estendi o desenvolvimento para dispositivos portáteis.

O projeto conta com conexão com bando de dados utilizando o Firestore Database da Firebase. Sendo este responsável pelo armazenamento de dados provenientes do formulário no final da página.

Mais detalhes sobre as tecnologias empregadas e o projeto estão disponíveis no [repositório da Semana Front-end DIO](https://github.com/digitalinnovationone/semana-frontend-mundo-invertido/).

## 🚀 Instalação e Utilização

Clonando o repositório você poderá usufluir da landing page exceto pelo banco de dados.

Para utilização do banco de dados é necessário criar uma base de dados no Firebase: 

1. Crie uma conta na Firebase (necessário tem uma conta Google)
2. No menu "Criação" clique em "Firestore Database"
3. Dê um nome ao projeto
4. Na etapa seguinte não é preciso ativar o Google Analytics, não iremos abordar este tema, por tanto desative o Google Analytics e crie o projeto
5. Após a criação do projeto, clique em "Firestore Database" e, em seguida, em "Criar banco de dados"
6. Defina as regras de permissão, defina o local de armazenamento e ative
7. No símbolo de engrenagem ⚙️ e em "Configurações do projeto"
8. No fim da página, em "Seus aplicativos" clique no símbolo "</>"
9. Dê um apelido para o App e clique em "Registrar app"
10. Em seguida, marque a opção "Usar a tag \<script>"
11. Copie toda a linha de código abaixo do comentário "// Your web app's Firebase configuration"

Agora será necessário alterar algumas informações no arquivo assets/js/firebase/app.js

Subistitua a linha a seguir pela linha copiada no passo 11.

```
const firebaseConfig = {
  apiKey: "Your apiKey",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "Your appId"
};
```
Pronto. Agora poderá usufluir de toda funcionalidade desta landing page.

Para mais detalhes sobre a criação e utilização do Firebse acesse [a documentação oficial](https://firebase.google.com/docs/guides?authuser=0&%3Bhl=pt&hl=pt)

Você também pode conferir este projeto através da [demo](https://diaspaulo.github.io/semana-frontend-mundo-invertido/).


[⬆ Voltar ao topo](#Semana_Front-end_Mundo_Invertido_DIO.)