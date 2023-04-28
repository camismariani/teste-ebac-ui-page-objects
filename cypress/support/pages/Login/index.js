const elemento = require('./elements').ELEMENTS

class LoginPage {
    
    informarUsuario(user) {
        cy.get(elemento.username).type(user)
    }

    informarSenha(password) {
        cy.get(elemento.password).type(Cypress.env(password), { log: false })
    }

    submeterFormularioLogin() {
        cy.get(elemento.btnSubmeterFormularioLogin).click()
    }

    validarMsgAposLoginComSucesso() {
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        return cy.get(elemento.validarMsgLoginComSucesso)
    }

    validarMsgLoginSemSucesso() {
         return cy.get(elemento.validarMsgLoginSemSucesso)
    
   } 

   abrirEnderecoPage(){
     cy.get(elemento.btnAbrirEnderecoPage).click()
   }
}

export default new LoginPage()