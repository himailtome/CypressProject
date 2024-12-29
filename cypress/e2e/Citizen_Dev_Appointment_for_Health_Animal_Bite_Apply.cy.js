/// <reference types="cypress"/>

it('1. (City of Lamitan) Signin to Citizen Dev Portal and do application for LGU City of Lamitan for Animal Bite of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
    cy.wait(5000)
    cy.log('Visited Home  page.');
    cy.get('#headlessui-disclosure-button-1').click();
    cy.contains('Sign In').click();
    cy.log('Clicked on Sign In Button.');
    cy.get('div.block > :nth-child(1) > .relative > .block')
        .type('01626585727');
    cy.log('Entered username.');
    cy.get(':nth-child(2) > .relative > .block')
        .type('Bangladesh1');
    cy.log('Entered password.');
    cy.get('.pt-4 > .flex').click();
    cy.log('Clicked login button.');
    cy.get('.space-y-1 > [href="/service"]').click();
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    //cy.contains('Animal Bite').click();
    cy.get('.isolate > :nth-child(6) > :nth-child(1)').click();
    cy.get('.apply_btn').click();
    cy.contains('LGU City of Lamitan').click();
    cy.get('.flex-row > .inline-flex').click();
    cy.get('.inline').click();
    cy.get('.gap-4 > :nth-child(1) > input').click();
    cy.get(':nth-child(6) > .block > .select_box_block > .input_box > .fill').select('Male');
    cy.get('select[name="civil_status"]') // Locate the dropdown
        .should('be.visible')             // Ensure it’s visible
        .select('Single');                // Select the option by visible text
    cy.get(':nth-child(10) > .block > .text_input_block > .flex > .relative > input').type('Farmer');
    cy.get(':nth-child(11) > .block > .text_input_block > .flex > .relative > input').type('TestAdderss');
    cy.get('.number_input_block > .flex > input').type('1234');
    cy.get(':nth-child(16) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    //cy.get('.success-message').should('contain', 'Congratulations');
    cy.wait(1000)
})

it('Signin to Citizen Dev Portal and do application for Animal Bite of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
    cy.wait(5000)
    cy.log('Visited Home  page.');
    cy.get('#headlessui-disclosure-button-1').click();
    cy.contains('Sign In').click();
    cy.log('Clicked on Sign In Button.');
    cy.get('div.block > :nth-child(1) > .relative > .block')
        .type('01626585727');
    cy.log('Entered username.');
    cy.get(':nth-child(2) > .relative > .block')
        .type('Bangladesh1');
    cy.log('Entered password.');
    cy.get('.pt-4 > .flex').click();
    cy.wait(5000)
    cy.log('Clicked login button.');
    cy.get('.space-y-1 > [href="/service"]').click();
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    //cy.contains('Animal Bite').click();
    cy.get('.isolate > :nth-child(6) > :nth-child(1)').click();
    cy.get('.apply_btn').click();
    cy.get('.mt-1 > :nth-child(2) > :nth-child(2) > div').click();
    cy.get('.flex-row > .inline-flex').click();
    cy.get('.inline').click();
    cy.get('.gap-4 > :nth-child(1) > input').click();
    cy.get(':nth-child(6) > .block > .select_box_block > .input_box > .fill').select('Male');
    cy.get('select[name="civil_status"]') // Locate the dropdown
        .should('be.visible')             // Ensure it’s visible
        .select('Single');                // Select the option by visible text
    cy.get(':nth-child(10) > .block > .text_input_block > .flex > .relative > input').type('Farmer');
    cy.get(':nth-child(11) > .block > .text_input_block > .flex > .relative > input').type('TestAdderss');
    cy.get('.number_input_block > .flex > input').type('1234');
    cy.get(':nth-child(16) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    //cy.get('.success-message').should('contain', 'Congratulations');
    cy.wait(1000)
})

