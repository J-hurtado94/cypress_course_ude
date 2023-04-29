
describe('Upload file', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('demoQA')+"/upload-download")
    })
    it('upload file from fixture', () => {
        cy.get('#uploadFile').selectFile('C:/Users/USUARIO/Desktop/git_entry.png')
    });
});