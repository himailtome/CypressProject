/// <reference types="cypress"/>

it('1. (City of Lamitan) Signin to Citizen Dev Portal and do application for LGU City of Lamitan for Animal Bite of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
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
    cy.wait(10000)
    cy.log('Application Successful');
})

it('2. (Butig) Signin to Citizen Dev Portal and do application for LGU Butig for Animal Bite of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
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
    cy.contains('LGU Butig').click();
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
    cy.wait(10000)
    cy.log('Application Successful');
})

it('3. (Marantao) Signin to Citizen Dev Portal and do application for LGU Marantao for Animal Bite of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
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
    cy.contains('LGU Marantao').click();
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
    cy.wait(10000)
    cy.log('Application Successful');
})


it('4. (Piagapo) Signin to Citizen Dev Portal and do application for LGU Piagapo for Animal Bite of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
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
    cy.wait(5000)
    //cy.contains('Animal Bite').click();
    cy.get('.isolate > :nth-child(6) > :nth-child(1)').click();
    cy.get('.apply_btn').click();
    cy.contains('LGU Piagapo').click();
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
    cy.wait(10000)
    cy.log('Application Successful');
})

it('5. (Taraka) Signin to Citizen Dev Portal and do application for LGU Taraka for Animal Bite of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
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
    cy.contains('LGU Taraka').click();
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
    cy.wait(10000)
    cy.log('Application Successful');
})

it('6. (Datu Blah T. Sinsuat) Signin to Citizen Dev Portal and do application for LGU Datu Blah T. Sinsuat for Animal Bite of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
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
    cy.contains('LGU Datu Blah T. Sinsuat').click();
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
    cy.wait(10000)
    cy.log('Application Successful');
})


it('7. (Parang) Signin to Citizen Dev Portal and do application for LGU Parang for Animal Bite of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
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
    cy.contains('LGU Parang').click();
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
    cy.wait(10000)
    cy.log('Application Successful');
})


it('8. (Sultan Kudarat) Signin to Citizen Dev Portal and do application for LGU Sultan Kudarat for Animal Bite of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
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
    cy.contains('LGU Sultan Kudarat').click();
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
    cy.wait(10000)
    cy.log('Application Successful');
})

it('9. (Buluan) Signin to Citizen Dev Portal and do application for LGU Buluan for Animal Bite of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
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
    cy.contains('LGU Buluan').click();
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
    cy.wait(10000)
    cy.log('Application Successful');
})


it('10. (Shariff Aguak) Signin to Citizen Dev Portal and do application for LGU Shariff Aguak for Animal Bite of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
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
    cy.contains('LGU Shariff Aguak').click();
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
    cy.wait(10000)
    cy.log('Application Successful');
})


it('11. (Talipao) Signin to Citizen Dev Portal and do application for LGU Talipao for Animal Bite of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
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
    cy.contains('LGU Talipao').click();
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
    cy.wait(10000)
    cy.log('Application Successful');
})


it('12. (Bongao) Signin to Citizen Dev Portal and do application for LGU Bongao for Animal Bite of Health Services Appointment', function () {

    cy.visit('https://citizen-dev.ph.orangebd.com/');
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
    cy.contains('LGU Bongao').click();
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
    cy.wait(10000)
    cy.log('Application Successful');
})

