///<reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')

beforeEach(() => {
    // abrir conta
    cy.visit('minha-conta/')
    cy.login(perfil.usuario,perfil.senha)
});

describe('Testar endereço de registro', () => {
    it('Endereço', () => {
        
    });
});