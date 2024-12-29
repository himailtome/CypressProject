/// <reference types="cypress"/>

it('1. (City of Lamitan) Signin to Citizen Dev Portal and do application for LGU City of Lamitan for Family Planning of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
    cy.wait(5000)
    cy.get('#headlessui-disclosure-button-1').click();
    cy.contains('Sign In').click();
    cy.get('div.block > :nth-child(1) > .relative > .block')
        .type('01626585727');
    cy.get(':nth-child(2) > .relative > .block')
        .type('Bangladesh1');
    cy.get('.pt-4 > .flex').click();
    cy.get('.space-y-1 > [href="/service"]').click();
    cy.get('[href="/service/business-permit"] > .flex > .title').click();
    cy.get('.text-gray-900 > :nth-child(1)').click();
    cy.get('.apply_btn').click();
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
    cy.get(':nth-child(1) > :nth-child(2) > .text_input_block > .flex > .relative > input').type('1');
    cy.get(':nth-child(2) > :nth-child(2) > .text_input_block > .flex > .relative > input').type('2');

    cy.get('select[name="business_geo"]')
        .should('be.visible')
        .select('Region I');

    // cy.get('select[name="business_geo"]')
    //     .should('be.visible')
    //     .select('Ilocos Norte');

    // cy.get('select[name="kind_of_ownership"]')
    //     .should('be.visible')
    //     .select('Sole Proprietorship');



    //cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    // cy.get('.isolate > :nth-child(5) > :nth-child(1)').click();
    // cy.get('.apply_btn').click();
    // cy.get('.mt-1 > :nth-child(1) > .flex > div').click();
    // cy.get('.flex-row > .inline-flex').click();
    // cy.get('.inline').click();
    // cy.get('.gap-4 > :nth-child(1) > input').click();
    // cy.get(':nth-child(6) > .block > .select_box_block > .input_box > .fill').select('Male');
    // cy.get('select[name="civil_status"]') // Locate the dropdown
    //     .should('be.visible')             // Ensure it’s visible
    //     .select('Single');                // Select the option by visible text
    // cy.get(':nth-child(10) > .block > .text_input_block > .flex > .relative > input').type('Farmer');
    // cy.get(':nth-child(11) > .block > .text_input_block > .flex > .relative > input').type('TestAdderss');
    // cy.get(':nth-child(14) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    // cy.get('.far').click();
    // cy.contains('Next').click();
    // cy.get('.next_btn').click();
    //cy.wait(10000)
})