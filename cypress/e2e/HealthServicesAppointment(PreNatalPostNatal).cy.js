/// <reference types="cypress"/>


it('1. (Butig) Signin to Citizen Portal and do application for LGU Butig for Health Services Appointment', function () {

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
    cy.wait(10000)
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    cy.get('.isolate > :nth-child(2) > :nth-child(1)').click();
    cy.get('.apply_btn').click();
    cy.get('.mt-1 > :nth-child(2) > :nth-child(2) > div').click();
    cy.get('.flex-row > .inline-flex').click();
    cy.get(':nth-child(1) > .flex-row > .fa').click();
    cy.get(':nth-child(1) > .text-center > .gap-2 > .flex > .fa').click();
    cy.get('.inline').click();
    cy.get('.gap-4 > :nth-child(1) > input').click();
    cy.get(':nth-child(6) > .block > .select_box_block > .input_box > .fill').select('Male');
    cy.get('select[name="civil_status"]') // Locate the dropdown
        .should('be.visible')             // Ensure it’s visible
        .select('Single');                // Select the option by visible text
    cy.get(':nth-child(10) > .block > .text_input_block > .flex > .relative > input').type('Farmer');
    cy.get(':nth-child(11) > .block > .text_input_block > .flex > .relative > input').type('TestAdderss');
    cy.get(':nth-child(16) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    cy.wait(10000)
})


it('2. (Proceed Workflow Decide Clerk Butig) Signin to Workflow Portal and do Decision for LGU Butig', function () {

    cy.visit('https://workflow-dev.ph.orangebd.com/');

    cy.get('#user_id')
        .type('clerk1@leaps.ph');
    cy.get('#password')
        .type('superadmin');
    cy.get('.pt-0 > .flex').click();




    cy.get(':nth-child(1) > :nth-child(7) > .flex > [title="View Request Details"] > .rounded-full').click();
    cy.get('[onclick="viewFullScreen();"]').click();
    cy.get('.relative > .w-full').click();
    cy.get('#iframeDetailsView > .z-10 > .flex > .relative > .dec_title > .text-xl').click();




    describe('Interact with iframe content', () => {
        it('should find and interact with elements inside the iframe', () => {
          // Load the page containing the iframe
          cy.visit('https://workflow-dev.ph.orangebd.com/application?tab=1&id=676a7b8c8f232');
      
          // Ensure the iframe is loaded
          cy.frameLoaded('iframe[src*="https://citizen-dev.ph.orangebd.com/citizen-application-info"]');
      
          // Switch context to the iframe
          cy.iframe('iframe[src*="https://citizen-dev.ph.orangebd.com/citizen-application-info"]').within(() => {
            // Now you can interact with elements inside the iframe
            cy.get('.some-element-selector').click();
            cy.get('.another-element-selector').should('contain', 'Expected Text');
          });
        });
      });


    // cy.get(':nth-child(1) > :nth-child(7) > .flex > .mt-2 > .rounded-full').click();
    // cy.get('select[name="decision"]')
    //     .should('be.visible')
    //     .select('Appointment');
    // cy.get('#decision-btn').click();
    // cy.wait(10000)

    // cy.get(':nth-child(1) > :nth-child(7) > .flex > .mt-2 > .rounded-full').click();
    // cy.get('select[name="decision"]')
    //     .should('be.visible')
    //     .select('Proceed');
    // cy.get('#decision-btn').click();
    // cy.wait(10000)
})

// it('3. (Proceed Workflow Decide Butig) Signin to Workflow Portal and do Decision for LGU Butig', function () {

//     cy.visit('https://workflow-dev.ph.orangebd.com/');

//     cy.get('#user_id')
//         .type('triage@leaps.ph');
//     cy.get('#password')
//         .type('superadmin');
//     cy.get('.pt-0 > .flex').click();

//     cy.get(':nth-child(1) > :nth-child(7) > .flex > .mt-2 > .rounded-full').click();
//     cy.get('#decisionWiseAction')
//     cy.get('select[name="decision"]')
//         .should('be.visible')
//         .select('Proceed');
//     cy.get('#decision-btn').click();
//     cy.wait(10000)
// })

// it('4. (Proceed Workflow Decide Doctor Butig) Signin to Workflow Portal and do Decision for LGU Butig', function () {

//     cy.visit('https://workflow-dev.ph.orangebd.com/');

//     cy.get('#user_id')
//         .type('doctor@leaps.ph');
//     cy.get('#password')
//         .type('superadmin');
//     cy.get('.pt-0 > .flex').click();

//     cy.get(':nth-child(1) > :nth-child(7) > .flex > .mt-2 > .rounded-full').click();
//     cy.get('select[name="decision"]')
//         .should('be.visible')
//         .select('Approved');
//     cy.get('#decision-btn').click();
// })


// it('5. (Download Certificate citizen Butig) Signin to Citizen Portal and Download Certificate for LGU Butig', function () {

//     cy.visit('https://citizen-dev.ph.orangebd.com/');
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