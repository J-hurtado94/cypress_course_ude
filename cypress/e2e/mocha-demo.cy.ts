describe('template spec', () => {
    before(() =>{
        cy.log('Hello from the before hook');
    })
    it('testcase #1', () => {
      cy.log("Hello world!");
    })
    it.skip('testcase #2', () => {
        cy.log("Hello world!");
      })
      it.only('testcase #3', () => {
        cy.log("Hello world!");
      })
  })