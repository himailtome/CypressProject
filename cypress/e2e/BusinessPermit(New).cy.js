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

it('2. (Proceed Workflow Decide Licensing Officer Butig) Signin to Workflow Acceptance Portal and do Decision for LGU Butig for New Application of Business Permit', function () {

    cy.visit('https://workflow.ph.orangebd.com/');

    cy.get('#user_id')
        .type('mamanoaima@gmail.com');
    cy.get('#password')
        .type('superadmin');
    cy.get('.pt-0 > .flex').click();
    cy.get('.odd > :nth-child(7) > .flex > .mt-2 > .rounded-full').click({ multiple: true });
    cy.get('select[name="decision"]')
        .should('be.visible')
        .select('Proceed');
    cy.get('#decision-btn').click();
    cy.wait(10000)
})

it('3. (Payment Request Workflow Butig) Signin to Workflow Acceptance Portal and do Payment Request for LGU Butig for New Application of Business Permit', function () {

    cy.visit('https://workflow.ph.orangebd.com/');

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
    cy.get('#decision-btn').click();
    cy.wait(10000)
})

// it('4. (Do Payment citizen Butig) Signin to Citizen Acceptance Portal and do Payment for LGU Butig for New Application of Business Permit', function () {

//     cy.visit('https://citizen.ph.orangebd.com/');
//     cy.wait(5000)
//     cy.get('#headlessui-disclosure-button-1').click();
//     cy.contains('Sign In').click();
//     cy.get('div.block > :nth-child(1) > .relative > .block')
//         .type('01626585727');
//     cy.get(':nth-child(2) > .relative > .block')
//         .type('Bangladesh1');
//     cy.get('.pt-4 > .flex').click();
//     cy.get('.space-y-1 > [href="/service"]')
//         .should('be.visible')
//         .click({ force: true });
//     cy.wait(10000)
//     cy.get('#headlessui-disclosure-button-1')
//         .should('be.visible')
//         .click({ force: true });
//     cy.get('[href="/dashboard"]').click();

//     cy.wait(10000)
//     cy.get(':nth-child(1) > :nth-child(7) > .action_buttons > :nth-child(1) > .fa')
//         .should('be.visible')
//         .click({ force: true });

//     cy.wait(10000)
//     cy.get('.mt-1 > .border').type('1');

//     //cy.contains('Select File')
//     cy.get('.text_overflow')
//         .should('be.visible')
//         .click({ force: true });
//     cy.wait(10000)

//     cy.contains('Submit')
//         .should('be.visible')
//         .click({ force: true });
//     cy.wait(10000)
// })

// it('5. (Payment Success Workflow Butig) Signin to Workflow Acceptance Portal and do Payment Success for LGU Butig for New Application of Business Permit', function () {

//     cy.visit('https://workflow.ph.orangebd.com/');

//     cy.get('#user_id')
//         .type('sultanmesugpalawan@gmail.com');
//     cy.get('#password')
//         .type('superadmin');
//     cy.get('.pt-0 > .flex').click();
//     cy.get(':nth-child(1) > :nth-child(7) > .flex > .mt-2 > .rounded-full').click();

//     cy.get('#decisionWiseAction')
//         .should('be.visible')
//         .select('Payment Success');

//     cy.get('#org_no')
//         .should('be.visible')
//         .type('1');

//     // cy.get('select[name="decision"]')
//     //     .should('be.visible')
//     //     .select('Payment Request');
//     // cy.get('#payment_request_amount').type('1');
//     cy.get('#decision-btn').click();
//     cy.wait(10000)
// })

// it('6. (Approved Payment Workflow Butig) Signin to Workflow Acceptance Portal and Approved Payment for LGU Butig for New Application of Business Permit', function () {

//     cy.visit('https://workflow.ph.orangebd.com/');

//     cy.get('#user_id')
//         .type('dimnatang_pansar@yahoo.com');
//     cy.get('#password')
//         .type('superadmin');
//     cy.get('.pt-0 > .flex').click();
//     cy.get(':nth-child(1) > :nth-child(7) > .flex > .mt-2 > .rounded-full').click();

//     cy.get('#decisionWiseAction')
//         .should('be.visible')
//         .select('Approved');
//     cy.get('#decision-btn').click();
//     cy.wait(10000)
// })

// it('7. (Download Certificate citizen Butig) Signin to Citizen Acceptance Portal and Download Certificate for LGU Butig for New Application of Business Permit', function () {

//     cy.visit('https://citizen.ph.orangebd.com/');
//     cy.wait(5000)
//     cy.get('#headlessui-disclosure-button-1').click();
//     cy.contains('Sign In').click();
//     cy.get('div.block > :nth-child(1) > .relative > .block')
//         .type('01626585727');
//     cy.get(':nth-child(2) > .relative > .block')
//         .type('Bangladesh1');
//     cy.get('.pt-4 > .flex').click();
//     cy.get('.space-y-1 > [href="/service"]')
//         .should('be.visible')
//         .click({ force: true });
//     cy.wait(10000)
//     cy.get('#headlessui-disclosure-button-1')
//         .should('be.visible')
//         .click({ force: true });
//     cy.get('[href="/dashboard"]').click();

//     cy.wait(10000)
//     cy.contains('Download Certificate')
//         .should('be.visible')
//         .click({ force: true });
//     cy.wait(5000)
// })