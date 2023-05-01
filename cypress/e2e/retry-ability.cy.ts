describe('Retry ability', () => {
    it('visit with delay', () => {
        cy.visit("/loaddelay")
        cy.get('.btn').click()
        
    });
    // it('visit with delay-default', () => {
    //     cy.visit("/clientdelay")
    //     cy.get('#ajaxButton').click()
    //     cy.get('.bg-success').should('have.text','Data calculated on the client side.')
        
    // });
});