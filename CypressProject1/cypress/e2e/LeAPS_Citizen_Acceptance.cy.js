/// <reference types="cypress"/>

it('Signin', () => {

    cy.visit('https://citizen.ph.orangebd.com/signin');
    cy.wait(5000)
    //cy.get('body').click()
    cy.url().should('include', '/signin');

    cy.get('div.block > :nth-child(1) > .relative > .block').type('sanjoywelcome@gmail.com')
    cy.wait(5000)
    cy.get(':nth-child(2) > .relative > .block').type('Bangladesh1')
    cy.wait(5000)
    cy.get('.pt-4 > .flex').click()
    cy.wait(1000)
   // cy.reload();
    

})