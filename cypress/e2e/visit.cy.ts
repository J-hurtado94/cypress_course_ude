describe("basics", () => {
    beforeEach(() => {
            cy.visit('/textinput');
        });

        it("Get url", () => {
            cy.url().then((url) => {
                cy.log(`Printing url: ${url}`);
                expect(url).to.contains("/textinput");
            });
        });

        it("Validate title", () => {
            cy.title().then((title) => {
                const text:string=title
                cy.log(text);
                expect(text).to.equal("Text Input")
            });
        });
        it("Enter a text and validate text button", () => {
            cy.get('#newButtonName').type("test").then(() => {
                cy.get('#updatingButton').click().get("#updatingButton").should('have.text','test')
            
            });
               

        });
    });
    
