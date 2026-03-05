//funcionalidade - login
describe("Login", () => {
it("Login com sucesso", () => {
    //CENÁRIO 1
    //abro a página de login 
    cy.visit("https://www.automationpratice.com.br/login")
    
    //preencho o email
    cy.get('#user').type("usuario@teste.com")
    
    //preencho a senha
    cy.get('#password').type("senha123")
    
    //clico em entrar
    cy.get('#btnLogin').click()
    
    //verifico o login
    cy.get('#swal2-title').should("have.text", "Login realizado")
    cy.get('button.swal2-confirm').click();
})

//CENÁRIO 2
it("Login com senha errada", () => {
    cy.visit("https://www.automationpratice.com.br/login")
    cy.get('#user').type("usuario@teste.com")
    cy.get('#password').type("123")
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should("contain", "Senha inválida")
})

//CENÁRIO 3
it("Login com email inválido", () => {
    cy.visit("https://www.automationpratice.com.br/login")
    cy.get('#user').type("123")
    cy.get('#password').type("123456")
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should("contain", "E-mail inválido")
})

//CENÁRIO 4
it("Login com email e senhas vazios", () => {
    cy.visit("https://www.automationpratice.com.br/login")
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should("contain", "E-mail inválido")
})

})