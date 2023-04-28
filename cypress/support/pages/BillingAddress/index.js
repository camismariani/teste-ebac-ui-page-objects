
const { faker } = require('@faker-js/faker');
const elemento = require('./elements').ELEMENTS

class BillingAdressPage{
    editarDadosPessoais(nome,sobrenome,pais,endereco,numero,cidade,estado,cep,telefone){

        cy.get(elemento.nome).clear().type(nome)
        cy.get(elemento.sobrenome).clear().type(sobrenome)
        cy.get(elemento.pais).click().type(pais).get('[aria-selected="true"]').click()
        cy.get(elemento.endereco).clear().type(endereco)
        cy.get(elemento.numero).clear().type(numero)
        cy.get(elemento.cidade).clear().type(cidade)
        cy.get(elemento.estado).click().type( estado+'{enter}')
        cy.get(elemento.cep).clear().type(cep)
        cy.get(elemento.telefone).clear().type(telefone)
        cy.get(elemento.email).clear().type(faker.internet.email())

    }

    submeterFormularioEdicãoBilling(){
        cy.get(elemento.btnSalvarFormularioEdicao).click()
    }

}

export default new BillingAdressPage()