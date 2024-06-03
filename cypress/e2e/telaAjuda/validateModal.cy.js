import telaInicial from '../../support/pageObjects/telaInicial.pageObjects';
import ajudaPage from '../../support/pageObjects/ajudaPageObjects';

describe('Acessar a página da Getnet e verificar funcionalidade de busca', () => {
    beforeEach(() => {
        cy.viewport(1280, 580)
        telaInicial.visit()
        cy.wait(10000)
    });

    it('Deve verificar a funcionalidade de busca na Central de Ajuda', () => {

        telaInicial.openAjuda()

        ajudaPage.search('Boleto')

        ajudaPage.selectResult()

        ajudaPage.verifyModalContent('o texto explicativo a dúvida selecionada')
    });
});
