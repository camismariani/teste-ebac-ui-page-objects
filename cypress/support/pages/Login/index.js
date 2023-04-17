class Login {
    

    informarUsuario() {
        cy.get('#username').type(Cypress.env('env_usuario'))
    }

    informarSenha() {
        cy.get('#password').type(Cypress.env('env_password'), { log: false })
    }

    submeterFormularioLogin() {
        cy.get('.woocommerce-form > .button').click()
    }

    validarMsgApresentada(msg) {
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        cy.get('.page-title').should('contain', msg)
    }
}

export default new Login()