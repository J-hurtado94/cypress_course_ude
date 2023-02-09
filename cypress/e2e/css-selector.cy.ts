
describe("Locator contains", () => {
    beforeEach(() => {
        cy.visit("/dynamicid");
    })

    it("should to find a locator with contains selector", () => {
        cy.contains("Button with Dynamic ID").click();
    })

    it("Using find into a parent", () => {
        cy.get('body > section > div > ul').find("li")
    
    })

    it("Using class name", () => {
        cy.get('.btn.btn-primary').click();
        
    
})
})
