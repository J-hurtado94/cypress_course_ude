describe("basics", () => {
    beforeEach(() => {
            cy.visit('/textinput');
        });

        it("Get url", () => {
            cy.url().then((url) => {
                cy.log(`Printing url: ${url}`);
            });
        });
    });
    
