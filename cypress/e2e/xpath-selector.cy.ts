describe("Locator xpath", () => {
  beforeEach(() => {
    cy.visit("/classattr")
  })
  it("How to find a element by its text", () => {
    cy.xpath("//*[text()='Correct variant is']").should("have.text",'Correct variant is')
  })

  it("How to find a element by its attribute with xpath", () => {
    cy.xpath("//pre[@class=' language-html']").should("have.text",'<button class="btn btn-primary btn-test">')
   
  })

  it("How to find a element by its attribute with xpath with spaces", () => {
    cy.xpath("//button[contains(concat(' ', normalize-space(@class), ' '), 'btn-primary btn-test')]").click()
   
  })

  

})