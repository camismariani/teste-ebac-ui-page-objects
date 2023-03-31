///<reference types="cypress"/>

context('funcionalidade login',() => {
    it('deve fazer login com sucesso',() =>{
        //abrir site
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        //capturar elemento e fazer ação login e senha
        cy.get('#username').type("aluno_ebac@teste.com")
        cy.get('#password').type("teste@teste.com")

        //clicar no botão de entrar
        cy.get('.woocommerce-form > .button').click()
        
        //resultado
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it.only('login com usuário inválido',() =>{
        //abrir site
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        //capturar elemento e fazer ação login e senha
        cy.get('#username').type("aluno_eba@teste.com")
        cy.get('#password').type("teste@teste.com")

        //clicar no botão de entrar
        cy.get('.woocommerce-form > .button').click()
        
        //resultado
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    })

    it.only('login com senha inválida',() =>{
        //abrir site
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        //capturar elemento e fazer ação login e senha
        cy.get('#username').type("aluno_ebac@teste.com")
        cy.get('#password').type("teste2@teste.com")

        //clicar no botão de entrar
        cy.get('.woocommerce-form > .button').click()
        
        //resultado
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        cy.get('.woocommerce-error > li').should('contain', 'stá incorreta. Perdeu a senha?')
    })

    it.only('usuário desconhecido',() =>{
        //abrir site
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        //capturar elemento e fazer ação login e senha
        cy.get('#username').type("camilamariani")
        cy.get('#password').type("teste2@teste.com")

        //clicar no botão de entrar
        cy.get('.woocommerce-form > .button').click()
        
        //resultado
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        cy.get('.woocommerce-error > li').should('contain', 'Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.')
    })

})