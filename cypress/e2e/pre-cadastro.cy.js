///<reference types="cypress"/>

const { faker } = require('@faker-js/faker');

describe('Funcionalidade de pré-cadsatro', () => {
    
beforeEach(() => {
    cy.visit("/minha-conta/")
});

    it('Deve completar o pré-cadastro com sucesso', () => {
        //capturar elemento, digita usuário e senha para cadastro
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(Cypress.env('env_password_usuario_pre_cadastro'),{log:false})

        //clicar no botão de registrar
        cy.get(':nth-child(4) > .button').click()
        
        //resultado
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
         cy.get('.page-title').should('contain', 'Minha conta')

        // acessa os detalhes da conta e termina de preencher o cadastro
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        // preenche nome e sobrenome
        cy.get('#account_first_name').type("Camila")
        cy.get('#account_last_name').type("Mariani")
        //salva os dados
        cy.get('.woocommerce-Button').click()
        
        
    
        //verificar se realmente o cadastro foi salvo verificando se o texto contem o que foi escrito na condição
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados')


    
    });


});