describe('Links tabs', () => {
    beforeEach(() =>{
        cy.visit(Cypress.env("demoQA")+"/links")
    })
    it('Remove the target of a new tab', () => {
        cy.get("#simpleLink").invoke('removeAttr','target').click()
        
    });
});