describe('Checkbox option', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("demoQA")+"/checkbox");
    })
    it('Check a hide checkbox with invoke', () => {
        cy.get("#tree-node-home").invoke("show").check().should('be.checked')
    });
    it('Check a hide checkbox with {force}', () => {
        cy.get("#tree-node-home").check({force: true}).should('be.checked');
        cy.get(".text-success")
    });
});