class Login {
    
    informarUsuario(user) {
        cy.get('#username').type(user)
    }

    informarSenha(password) {
        cy.get('#password').type(Cypress.env(password), { log: false })
    }

    submeterFormularioLogin() {
        cy.get('.woocommerce-form > .button').click()
    }

    validarMsgAposLoginComSucesso() {
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        return cy.get('.page-title')
    }

    validarMsgLoginSemSucesso() {
         return cy.get('.woocommerce-error > li')
    
   } 
}

export default new Login()