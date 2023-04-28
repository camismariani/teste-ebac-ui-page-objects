///<reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')
const massaDeDadosShippping = require('../fixtures/enderecoShipping.json')
import Login from '../support/pages/Login';
import Address from '../support/pages/Address';
import BillingAddress from '../support/pages/BillingAddress';
import ShippingAddress from '../support/pages/ShippingAddress';

// antes de cada teste
beforeEach(() => {
    // abrir site
    cy.visit('minha-conta/')

});

context('Testar endereço de registro', () => {
    it.only('Endereço de pagamento', () => {
        
        Login.informarUsuario("aluno_ebac@teste.com")
        Login.informarSenha("env_password")
        Login.submeterFormularioLogin()
        Login.abrirEnderecoPage()
        Address.acessarBillingAdress()
        BillingAddress.editarDadosPessoais("Camila","Mariani","Brasil","Rua Teste","342","Camboriú","Bahia","88330-000","(99)99999-9999")
        BillingAddress.submeterFormularioEdicaoBilling()
        Address.validarMsgEnderecoAlteradoComSucesso().should('contain',"Endereço alterado com sucesso")

    })

    it('Endereço de entrega', () => {
        Login.informarUsuario("aluno_ebac@teste.com")
        Login.informarSenha("env_password")
        Login.submeterFormularioLogin()
        Login.abrirEnderecoPage()
        Address.acessarShippingAdress()
        ShippingAddress.editarDadosPessoaisShippingAddress(
            massaDeDadosShippping[1].nome,
            massaDeDadosShippping[1].sobrenome,
            massaDeDadosShippping[1].pais,
            massaDeDadosShippping[1].endereco,
            massaDeDadosShippping[1].numero,
            massaDeDadosShippping[1].cidade,
            massaDeDadosShippping[1].estado,
            massaDeDadosShippping[1].cep)
        ShippingAddress.submeterFormularioEdicaoShipping()
        Address.validarMsgEnderecoAlteradoComSucesso().should('contain',"Endereço alterado com sucesso")




    })

})