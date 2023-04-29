describe('Environment Variable demo', () => {
    it('Environment variable', () => {
        cy.log(Cypress.env("demoVar"))
        
    });
});