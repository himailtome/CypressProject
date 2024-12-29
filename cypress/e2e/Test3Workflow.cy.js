/// <reference types="cypress"/>

it('1. (Butig) Signin to Citizen Dev Portal and do application for LGU Butig for Family Planning of Health Services Appointment', function () {

    cy.visit('https://workflow-dev.ph.orangebd.com/');

    cy.get('#user_id')
        .type('mamanoaima@gmail.com');
    cy.get('#password')
        .type('superadmin');
    cy.get('.pt-0 > .flex').click();
    cy.get(':nth-child(1) > :nth-child(7) > .flex > .mt-2 > .rounded-full').click();
    cy.get('select[name="decision"]')
        .should('be.visible')
        .select('Proceed');

    cy.get('#business_id_no').type('1234');
    cy.get('#decision-btn').click();
    cy.wait(10000)
})

it('2. (Butig) Signin to Citizen Dev Portal and do application for LGU Butig for Family Planning of Health Services Appointment', function () {

    cy.visit('https://workflow-dev.ph.orangebd.com/');

    cy.get('#user_id')
        .type('sultanmesugpalawan@gmail.com');
    cy.get('#password')
        .type('superadmin');
    cy.get('.pt-0 > .flex').click();
    cy.get(':nth-child(1) > :nth-child(7) > .flex > .mt-2 > .rounded-full').click();
    cy.get('select[name="decision"]')
        .should('be.visible')
        .select('Payment Request');
    cy.get('#payment_request_amount').type('1');
    cy.get('#top_no').type('1');
    cy.get('#gross_essential').type('1');
    cy.get('#gross_nonessential').type('1');
    cy.get('#decision-btn').click();
})

it('1. (City of Lamitan) Signin to Citizen Dev Portal and do application for LGU City of Lamitan for Family Planning of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
    //cy.visit('https://citizen-dev.ph.orangebd.com/signin');
    // cy.wait(5000)
    // cy.get('#headlessui-disclosure-button-1').click();
    //cy.contains('Sign In').click();
    cy.get('div.block > :nth-child(1) > .relative > .block')
        .type('01626585727');
    cy.get(':nth-child(2) > .relative > .block')
        .type('Bangladesh1');
    cy.get('.pt-4 > .flex').click();
    cy.wait(5000)
    //cy.get('#headlessui-disclosure-button-1').click();
    cy.get('#headlessui-disclosure-button-1').click({ force: true });
    cy.get('a[href="/dashboard"]').should('be.visible').click();

    cy.get('a[href="/dashboard"][data-headlessui-state="open"]').click();


    cy.wait(5000)
    cy.contains('All Applications').click();
    cy.wait(5000)
    cy.get('[href="/dashboard"]').click();
    cy.wait(5000)
    cy.get('.action_buttons > :nth-child(1) > .flex').click();
    cy.get('.space-y-1 > [href="/service"]').click();

})

