///<reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')
import Login from '../support/pages/Login';

// antes de cada teste
beforeEach(() => {
    // abrir site
    cy.visit('minha-conta/')

});

context('funcionalidade login', () => {
    it('deve fazer login com sucesso', () => {

        Login.informarUsuario("aluno_ebac@teste.com")
        Login.informarSenha("env_password")
        Login.submeterFormularioLogin()
        Login.validarMsgAposLoginComSucesso().should('contain',"Minha conta")

    })

    it('login com e-mail inválido', () => {

        Login.informarUsuario("aluno_eba@teste.com")
        Login.informarSenha("env_password")
        Login.submeterFormularioLogin()
        Login.validarMsgLoginSemSucesso().should('contain',"Endereço de e-mail desconhecido")
        
    })

    it('login com senha inválida e e-mail correto', () => {

        Login.informarUsuario("aluno_ebac@teste.com")
        Login.informarSenha("env_password_errado")
        Login.submeterFormularioLogin()
        Login.validarMsgLoginSemSucesso().should('contain',"stá incorreta. Perdeu a senha?")
        
    })


    it('usuário desconhecido', () => {

        Login.informarUsuario("camilamariani")
        Login.informarSenha("env_password")
        Login.submeterFormularioLogin()
        Login.validarMsgLoginSemSucesso().should('contain',"Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.")
        
    })

})