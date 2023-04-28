///<reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')
import Login from '../support/pages/Login';
import Address from '../support/pages/Address';
import BillingAddress from '../support/pages/BillingAddress';

// antes de cada teste
beforeEach(() => {
    // abrir site
    cy.visit('minha-conta/')

});

context('Testar endereço de registro', () => {
    it('Endereço', () => {
        
        Login.informarUsuario("aluno_ebac@teste.com")
        Login.informarSenha("env_password")
        Login.submeterFormularioLogin()
        Login.abrirEnderecoPage()
        Address.acessarBillingAdress()
        BillingAddress.editarDadosPessoais("Camila","Mariani","Brasil","Rua Teste","342","Camboriú","Bahia","88330-000","(99)99999-9999")
        BillingAddress.submeterFormularioEdicãoBilling()
        Address.validarMsgEnderecoAlteradoComSucesso().should('contain',"Endereço alterado com sucesso")

    })

})