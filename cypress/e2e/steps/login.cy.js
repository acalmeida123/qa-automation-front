  import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('que estou na tela de login', () => {
  // Implemente ações necessárias para ir para a página inicial
});

Given('que tenho uma URL de VCN')
When('eu acessar a URL {string}', (url) => {
  cy.visit(url);
});

Then('devo ver o titulo {string}', (texto) => {
  cy.contains(texto).should('be.visible');
});