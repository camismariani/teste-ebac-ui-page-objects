const { faker } = require('@faker-js/faker');
const elemento = require('./elements').ELEMENTS

class ShippingAddressPage{

    editarDadosPessoaisShippingAddress(nome,sobrenome,pais,endereco,numero,cidade,estado,cep){

        cy.get(elemento.nome).clear().type(nome)
        cy.get(elemento.sobrenome).clear().type(sobrenome)
        cy.get(elemento.pais).click().type(pais).get('[aria-selected="true"]').click()
        cy.get(elemento.endereco).clear().type(endereco)
        cy.get(elemento.numero).clear().type(numero)
        cy.get(elemento.cidade).clear().type(cidade)
        cy.get(elemento.estado).click().type( estado+'{enter}')
        cy.get(elemento.cep).clear().type(cep)

    }

    submeterFormularioEdicaoShipping(){
        cy.get(elemento.btnSalvarFormularioEdicaoShipping).click()
    }


}

export default new ShippingAddressPage()