/// <reference types="cypress"/>

it('1. (Business Permit Butig Citizen Application) Signin to Citizen Acceptance Portal and do application for LGU Butig for New Application of Business Permit', function () {

    cy.visit('https://citizen.ph.orangebd.com/');
    cy.wait(5000)
    cy.get('#headlessui-disclosure-button-1').click();
    cy.contains('Sign In').click();
    cy.get('div.block > :nth-child(1) > .relative > .block')
        .type('01626585727');
    cy.get(':nth-child(2) > .relative > .block')
        .type('Bangladesh1');
    cy.get('.pt-4 > .flex').click();
    cy.get('.space-y-1 > [href="/service"]').click();

    cy.intercept('/api/service/category').as('getServices');
    cy.wait('@getServices');
    cy.contains('Business Permit')
        .should('be.visible')
        .click({ force: true });

    cy.get('.text-gray-900 > :nth-child(1)').click();
    cy.get('.apply_btn').click();
    cy.wait(5000)
    //cy.get('.mt-1 > :nth-child(2) > :nth-child(2) > div').click();
    cy.get('.mt-1 > :nth-child(2) > :nth-child(2) > div').click();
    cy.get('.flex-row > .inline-flex').click();
    cy.get(':nth-child(1) > .flex-row > .fa').click();
    cy.get(':nth-child(1) > .text-center > .gap-2 > .flex > .fa').click();
    cy.get(':nth-child(2) > .flex-row > .fa').click();
    cy.get(':nth-child(2) > .text-center > .gap-2 > .flex > .fa').click();
    cy.get(':nth-child(3) > .flex-row > .fa').click();
    cy.get(':nth-child(3) > .text-center > .gap-2 > .flex > .fa').click();
    cy.get(':nth-child(4) > .flex-row > .fa').click();
    cy.get(':nth-child(4) > .text-center > .gap-2 > .flex > .fa').click();
    cy.get(':nth-child(5) > .flex-row > .fa').click();
    cy.get(':nth-child(5) > .text-center > .gap-2 > .flex > .fa').click();
    cy.get('.inline').click();
    cy.wait(5000)
    cy.get('.dp__pointer').click();
    cy.get('[data-test="Sun Dec 15 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)"] > .dp__cell_inner').click();
    cy.get('[data-test="select-button"]').click();
    cy.get('select[name="kind_of_ownership"]')
        .should('be.visible')
        .select('Sole Proprietorship');
    cy.get('select[name="mode_of_payment"]')
        .should('be.visible')
        .select('Quarterly');
    cy.get(':nth-child(11) > .block > .text_input_block > .flex > .relative > input').type('TestLastName');
    cy.get(':nth-child(12) > .block > .text_input_block > .flex > .relative > input').type('TestFirstName');
    cy.get('.gap-4 > :nth-child(1) > input').click();
    cy.get('input[placeholder="Business Name"]')
        .should('be.visible')
        .type('TestBusinessName');
    cy.contains('Next').click();
    cy.wait(5000)


    // cy.get('.dp__pointer').click();
    // cy.get('[data-test="Sun Dec 15 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)"] > .dp__cell_inner').click();
    // cy.get('[data-test="select-button"]').click();
    // cy.get(':nth-child(11) > .block > .text_input_block > .flex > .relative > input').type('TestLastName');
    // cy.get(':nth-child(12) > .block > .text_input_block > .flex > .relative > input').type('TestFirstName');
    // cy.contains('Next').click();


    cy.get(':nth-child(1) > :nth-child(2) > .text_input_block > .flex > .relative > input').type('1');
    cy.get(':nth-child(2) > :nth-child(2) > .text_input_block > .flex > .relative > input').type('2');
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    cy.wait(20000)
})