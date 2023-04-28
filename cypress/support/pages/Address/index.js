const elemento = require('./elements').ELEMENTS


class AddressPage{
    acessarBillingAdress(){
        //abrir pagina de edicão de Billing
        cy.get(elemento.bntEditarBillingAddress).click()

    }

    acessarShippingAdress(){
        //abrir pagina de edicão de Billing
        cy.get(elemento.btnEditarShippingAddress).click()
    }

    validarMsgEnderecoAlteradoComSucesso(){
        return cy.get(elemento.msgEnderecoAlteradoComSucesso)
    }

}

export default new AddressPage()