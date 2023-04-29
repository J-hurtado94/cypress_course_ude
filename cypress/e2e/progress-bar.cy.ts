describe('Validate progress bar', () => {
    it('should stop in 75 percent', () => {
        cy.visit("/progressbar")
        cy.get('#startButton').click()
        cy.get('.progress',{timeout:25000}).should('have.have.text','75%').then(() =>
        cy.get('#stopButton').click()
        )
    
    });
});