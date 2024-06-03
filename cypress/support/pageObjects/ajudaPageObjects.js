import { ELEMENTS } from '../selectors/ajudaPage.elements';

class AjudaPage {
    search(keyword) {
        cy.get(ELEMENTS.searchInput).should('be.visible').type(`${keyword}{enter}`);
    }

    selectResult() {
        cy.xpath(ELEMENTS.searchResult).should('be.visible').click();
    }

    verifyModalContent(expectedText) {
        cy.xpath(ELEMENTS.modalContent).should('be.visible');
        cy.xpath(ELEMENTS.modalContent).should('contain.text', expectedText);
    }
}

export default new AjudaPage();
