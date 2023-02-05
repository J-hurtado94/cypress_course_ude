describe('template spec', () => {
  it('passes', () => {
    cy.log("Hello world!");
  })

  it('Typescript introduction', () => {

    let stringVariable:string = "hello world!";
    let numberVariable:number = 23;
    let booleanVariable:boolean = true;
    let anyVariable:any =false;

    function addTwoNumbers(a:number,b:number):number{
      return a + b;
    }
    interface User{
      username:string;
      password:string;
    }
    function returnUserInformation(user:User):void {
           cy.log("This is the user name" + user.username);
           cy.log("This is the user password" + user.password);

    }
  
});
});