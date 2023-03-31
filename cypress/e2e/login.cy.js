///<reference types="cypress"/>

context('funcionalidade login',() => {
    it('deve fazer login com sucesso',() =>{
        //abrir site
        cy.visit(Cypress.env('url'))
        //capturar elemento e fazer ação login e senha
        cy.get('#username').type(Cypress.env('usuario'))
        cy.get('#password').type(Cypress.env('password'))

        //clicar no botão de entrar
        cy.get('.woocommerce-form > .button').click()
        
        //resultado
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('login com usuário inválido',() =>{
        //abrir site
        cy.visit(Cypress.env('url'))
        //capturar elemento e fazer ação login e senha
        cy.get('#username').type(Cypress.env('usuario_invalido'))
        cy.get('#password').type(Cypress.env('password'))

        //clicar no botão de entrar
        cy.get('.woocommerce-form > .button').click()
        
        //resultado
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    })

    it('login com senha inválida',() =>{
        //abrir site
        cy.visit(Cypress.env('url'))
        //capturar elemento e fazer ação login e senha
        cy.get('#username').type(Cypress.env('usuario'))
        cy.get('#password').type(Cypress.env('password_errado'))

        //clicar no botão de entrar
        cy.get('.woocommerce-form > .button').click()
        
        //resultado
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        cy.get('.woocommerce-error > li').should('contain', 'stá incorreta. Perdeu a senha?')
    })

    it('usuário desconhecido',() =>{
        //abrir site
        cy.visit(Cypress.env('url'))
        //capturar elemento e fazer ação login e senha
        cy.get('#username').type(Cypress.env('usuario_desconhecido'))
        cy.get('#password').type(Cypress.env('password'))

        //clicar no botão de entrar
        cy.get('.woocommerce-form > .button').click()
        
        //resultado
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        cy.get('.woocommerce-error > li').should('contain', 'Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.')
    })

})