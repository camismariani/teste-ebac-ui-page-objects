///<reference types="cypress"/>

beforeEach(() => {
    // abrir site
    cy.visit('/produtos')
});



describe('Seleciona produto e adiciona ao carrinho', () => {

    it('Selecionar produto', () => {
        // selecionar o produto
        cy.get('[class="product-block grid"]')
            //.eq(3) pega o quarto item da lista
            //.first() pega o primeiro item da lista
            .contains("Abominable Hoodie") // pega o item que contém no texto esse  nome
            .click()
    });

    it('Adicionar produto ao carrinho', () => {
        var qtd=3

        cy.get('[class="product-block grid"]')
            .contains("Abominable Hoodie")
            .click()

        // selecionar quantidade
        cy.get('.input-text').clear().type(qtd)
        // selecionar cor
        cy.get('.button-variable-item-Blue').click()
        // selecionar tamanho
        cy.get('.button-variable-item-XS').click()

        // clicar em comprar
        cy.get('.single_add_to_cart_button').click()
        
        // abre o carrinho
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()

        //verificar se o item foi add no carrinho
        cy.get('.cart_item > .product-name').should("contain", "Abominable Hoodie")
        cy.get('.quantity > .input-text').should("have.value",qtd)
    });
});