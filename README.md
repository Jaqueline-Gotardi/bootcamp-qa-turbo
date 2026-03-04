# 🚀 Bootcamp QA Turbo - Desafio Cypress (Dia 1)

Oi! Este é o meu repositório para o **Bootcamp QA Turbo**, um evento intenso de 3 dias (03, 04 e 05 de março) realizado pela **QAzando**. 

Estou muito empolgada com o que estou aprendendo! Este projeto marca o meu primeiro contato real com automação web utilizando **Cypress**.

## 🎯 O Objetivo
Nesta primeira aula, o foco foi entender como automatizar cenários de teste em uma tela de login, garantindo que o sistema se comporte corretamente tanto em fluxos de sucesso quanto em casos de erro.

## 🧪 Cenários de Teste Automatizados
No arquivo `login.cy.js`, implementei 4 cenários fundamentais para validar a qualidade da página:

1.  **Login com sucesso:** Verifica se o usuário consegue acessar o sistema com dados válidos.
2.  **Login com senha errada:** Valida se o sistema exibe a mensagem de "Senha inválida" corretamente.
3.  **Login com e-mail inválido:** Testa a validação do formato do campo de e-mail.
4.  **Campos vazios:** Garante que o sistema não permita o login sem o preenchimento das credenciais.

## 🛠️ Tecnologias Utilizadas
* **Cypress:** Framework de automação de testes.
* **JavaScript:** Linguagem utilizada para escrever os scripts.
* **Node.js:** Ambiente de execução.

## 🚀 Como rodar este projeto?

Se você quiser baixar e ver os testes rodando na sua máquina, siga os passos abaixo:

**1. Clone o repositório:**
 ```git clone [https://github.com/Jaqueline-Gotardi/bootcamp-qa-turbo.git](https://github.com/Jaqueline-Gotardi/bootcamp-qa-turbo.git)```

**2. Entre na pasta do projeto:** 
```cd bootcamp-qa-turbo```

**3. Instale as dependências:**
```npm install```

**4. Abra o Cypress:** 
```npx cypress open```