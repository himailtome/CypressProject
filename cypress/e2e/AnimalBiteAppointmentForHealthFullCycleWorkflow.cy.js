/// <reference types="cypress"/>

// it('1. (Butig) Signin to Citizen Dev Portal and do application for LGU Butig for Animal Bite of Health Services Appointment', function () {

//     cy.visit('https://citizen-dev.ph.orangebd.com/');
//     cy.log('Visited Home  page.');
//     cy.get('#headlessui-disclosure-button-1').click();
//     cy.contains('Sign In').click();
//     cy.log('Clicked on Sign In Button.');
//     cy.get('div.block > :nth-child(1) > .relative > .block')
//         .type('01626585727');
//     cy.log('Entered username.');
//     cy.get(':nth-child(2) > .relative > .block')
//         .type('Bangladesh1');
//     cy.log('Entered password.');
//     cy.get('.pt-4 > .flex').click();
//     cy.log('Clicked login button.');
//     cy.get('.space-y-1 > [href="/service"]').click();
//     cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
//     //cy.contains('Animal Bite').click();
//     cy.get('.isolate > :nth-child(6) > :nth-child(1)').click();
//     cy.get('.apply_btn').click();
//     cy.contains('LGU Butig').click();
//     cy.get('.flex-row > .inline-flex').click();
//     cy.get('.inline').click();
//     cy.get('.gap-4 > :nth-child(1) > input').click();
//     cy.get(':nth-child(6) > .block > .select_box_block > .input_box > .fill').select('Male');
//     cy.get('select[name="civil_status"]') // Locate the dropdown
//         .should('be.visible')             // Ensure it’s visible
//         .select('Single');                // Select the option by visible text
//     cy.get(':nth-child(10) > .block > .text_input_block > .flex > .relative > input').type('Farmer');
//     cy.get(':nth-child(11) > .block > .text_input_block > .flex > .relative > input').type('TestAdderss');
//     cy.get('.number_input_block > .flex > input').type('1234');
//     cy.get(':nth-child(16) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
//     cy.get('.far').click();
//     cy.contains('Next').click();
//     cy.get('.next_btn').click();
//     cy.wait(10000)
//     cy.log('Application Successful');
// })


// it('2. (Proceed Workflow Decide Licensing Officer Butig) Signin to Workflow Acceptance Portal and do Decision for LGU Butig for New Application of Business Permit', function () {

//     cy.visit('https://workflow-dev.ph.orangebd.com/');

//     cy.get('#user_id')
//         .type('clerk1@leaps.ph');
//     cy.get('#password')
//         .type('superadmin');
//     cy.get('.pt-0 > .flex').click();

//     cy.get(':nth-child(1) > :nth-child(7) > .flex > .mt-2 > .rounded-full').click();
//     cy.get('select[name="decision"]')
//         .should('be.visible')
//         .select('Appointment');
//     cy.get('#decision-btn').click();
//     cy.wait(10000)

//     cy.get(':nth-child(1) > :nth-child(7) > .flex > .mt-2 > .rounded-full').click();
//     cy.get('select[name="decision"]')
//         .should('be.visible')
//         .select('Proceed');
//     cy.get('#decision-btn').click();
//     cy.wait(10000)
// })

it('3. (Proceed Workflow Decide Licensing Officer Butig) Signin to Workflow Acceptance Portal and do Decision for LGU Butig for New Application of Business Permit', function () {

    cy.visit('https://workflow-dev.ph.orangebd.com/');

    cy.get('#user_id')
        .type('triage@leaps.ph');
    cy.get('#password')
        .type('superadmin');
    cy.get('.pt-0 > .flex').click();

    cy.get(':nth-child(1) > :nth-child(7) > .flex > [title="View Request Details"] > .rounded-full').click();
    cy.get('[onclick="viewFullScreen();"]').click();
    
    // describe('Test iframe without plugin', () => {
    //     it('Clicks a button inside iframe', () => {
    //       cy.get('#iframeData').then(($iframe) => {
    //         const body = $iframe.contents().find('body');
    //         cy.wrap(body).find("button[class='inline-flex w-full ...']").click();
    //       });
    //     });
    //   });


    describe('Interact with iframe', () => {
        it('Clicks a button inside the iframe', () => {
          cy.visit('https://workflow-dev.ph.orangebd.com/wf-request/create'); // Replace with your test page URL
          
          cy.frameLoaded('#iframeData'); // Replace with the iframe ID or selector
          cy.iframe().find('button.className').should('be.visible').click(); // Adjust selector as needed
        });
      });
      
      

    // cy.get(':nth-child(1) > :nth-child(7) > .flex > .mt-2 > .rounded-full').click();
    // cy.get('#decisionWiseAction')
    // cy.get('select[name="decision"]')
    //     .should('be.visible')
    //     .select('Proceed');
    // cy.get('#decision-btn').click();
    // cy.wait(10000)

    // cy.get(':nth-child(1) > :nth-child(7) > .flex > .mt-2 > .rounded-full').click();
    // cy.get('select[name="decision"]')
    //     .should('be.visible')
    //     .select('Proceed');
    // cy.get('#decision-btn').click();
    // cy.wait(10000)
})


// it('3. (Payment Request Workflow Butig) Signin to Workflow Acceptance Portal and do Payment Request for LGU Butig for New Application of Business Permit', function () {

//     cy.visit('https://workflow-dev.ph.orangebd.com/');

//     cy.get('#user_id')
//         .type('sultanmesugpalawan@gmail.com');
//     cy.get('#password')
//         .type('superadmin');
//     cy.get('.pt-0 > .flex').click();
//     cy.get(':nth-child(1) > :nth-child(7) > .flex > .mt-2 > .rounded-full').click();
//     cy.get('select[name="decision"]')
//         .should('be.visible')
//         .select('Payment Request');
//     cy.get('#payment_request_amount').type('1');
//     cy.get('#decision-btn').click();
//     cy.wait(10000)
// })