
 describe('Find a element in a table', () => {

    beforeEach(() => {
        cy.visit("/dynamictable")
    });
    it('Find a word in a table', () => {
        cy.get("div[role='row']>span").each(($nombre) => {
            // if ($nombre.text() === "Chrome") {
            //     cy.log($nombre.next().text())
          cy.wrap($nombre).then((a)=>{
        const t = a.text();
        if(t==="Chrome") {
          cy.wrap(t).should('contain',"Chrome");
          }

            

        })
    });



})

})

 