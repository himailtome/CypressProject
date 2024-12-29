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
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    cy.get('.isolate > :nth-child(5) > :nth-child(1)').click();
    cy.get('.apply_btn').click();
    cy.get('.mt-1 > :nth-child(1) > .flex > div').click();
    cy.get('.flex-row > .inline-flex').click();
    cy.get('.inline').click();
    cy.get('.gap-4 > :nth-child(1) > input').click();
    cy.get(':nth-child(6) > .block > .select_box_block > .input_box > .fill').select('Male');
    cy.get('select[name="civil_status"]') // Locate the dropdown
        .should('be.visible')             // Ensure it’s visible
        .select('Single');                // Select the option by visible text
    cy.get(':nth-child(10) > .block > .text_input_block > .flex > .relative > input').type('Farmer');
    cy.get(':nth-child(11) > .block > .text_input_block > .flex > .relative > input').type('TestAdderss');
    cy.get(':nth-child(14) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    cy.wait(10000)
})



it('2. (Butig) Signin to Citizen Dev Portal and do application for LGU Butig for Family Planning of Health Services Appointment', function () {

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
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    cy.get('.isolate > :nth-child(5) > :nth-child(1)').click();
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
    cy.get(':nth-child(14) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    cy.wait(10000)
})

it('3. (Marantao) Signin to Citizen Dev Portal and do application for LGU Marantao for Family Planning of Health Services Appointment', function () {

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
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    cy.get('.isolate > :nth-child(5) > :nth-child(1)').click();
    cy.get('.apply_btn').click();
    cy.get('.mt-1 > :nth-child(2) > :nth-child(3) > div').click();
    cy.get('.flex-row > .inline-flex').click();
    cy.get('.inline').click();
    cy.get('.gap-4 > :nth-child(1) > input').click();
    cy.get(':nth-child(6) > .block > .select_box_block > .input_box > .fill').select('Male');
    cy.get('select[name="civil_status"]') // Locate the dropdown
        .should('be.visible')             // Ensure it’s visible
        .select('Single');                // Select the option by visible text
    cy.get(':nth-child(10) > .block > .text_input_block > .flex > .relative > input').type('Farmer');
    cy.get(':nth-child(11) > .block > .text_input_block > .flex > .relative > input').type('TestAdderss');
    cy.get(':nth-child(14) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    cy.wait(10000)
})


it('4. (Piagapo) Signin to Citizen Dev Portal and do application for LGU Piagapo for Family Planning of Health Services Appointment', function () {

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
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    cy.get('.isolate > :nth-child(5) > :nth-child(1)').click();
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
    cy.get(':nth-child(14) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    cy.wait(10000)
})



it('5. (Taraka) Signin to Citizen Dev Portal and do application for LGU Taraka for Family Planning of Health Services Appointment', function () {

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
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    cy.get('.isolate > :nth-child(5) > :nth-child(1)').click();
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
    cy.get(':nth-child(14) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    cy.wait(10000)
})



it('6. (Datu Blah T. Sinsuat) Signin to Citizen Dev Portal and do application for LGU Datu Blah T. Sinsuat for Family Planning of Health Services Appointment', function () {

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
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    cy.get('.isolate > :nth-child(5) > :nth-child(1)').click();
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
    cy.get(':nth-child(14) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    cy.wait(10000)
})


it('7. (Parang) Signin to Citizen Dev Portal and do application for LGU Parang for Family Planning of Health Services Appointment', function () {

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
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    cy.get('.isolate > :nth-child(5) > :nth-child(1)').click();
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
    cy.get(':nth-child(14) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    cy.wait(10000)
})


it('8. (Sultan Kudarat) Signin to Citizen Dev Portal and do application for LGU Sultan Kudarat for Family Planning of Health Services Appointment', function () {

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
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    cy.get('.isolate > :nth-child(5) > :nth-child(1)').click();
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
    cy.get(':nth-child(14) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    cy.wait(10000)
})


it('9. (Buluan) Signin to Citizen Dev Portal and do application for LGU Buluan for Family Planning of Health Services Appointment', function () {

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
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    cy.get('.isolate > :nth-child(5) > :nth-child(1)').click();
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
    cy.get(':nth-child(14) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    cy.wait(10000)
})


it('10. (Shariff Aguak) Signin to Citizen Dev Portal and do application for LGU Shariff Aguak for Family Planning of Health Services Appointment', function () {

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
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    cy.get('.isolate > :nth-child(5) > :nth-child(1)').click();
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
    cy.get(':nth-child(14) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    cy.wait(10000)
})

it('11. (Talipao) Signin to Citizen Dev Portal and do application for LGU Talipao for Family Planning of Health Services Appointment', function () {

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
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    cy.get('.isolate > :nth-child(5) > :nth-child(1)').click();
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
    cy.get(':nth-child(14) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    cy.wait(10000)
})



it('12. (Bongao) Signin to Citizen Dev Portal and do application for LGU Bongao for Family Planning of Health Services Appointment', function () {

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
    cy.get('[href="/service/appointment-for-health-services"] > .flex > .title').click();
    cy.get('.isolate > :nth-child(5) > :nth-child(1)').click();
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
    cy.get(':nth-child(14) > .block > .text_input_block > .flex > .relative > input').type('TestParent');
    cy.get('.far').click();
    cy.contains('Next').click();
    cy.get('.next_btn').click();
    cy.wait(10000)
})










