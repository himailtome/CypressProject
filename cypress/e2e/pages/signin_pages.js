// ./pages/signin_pages.js
export class Signin_Pages {
    // Method to enter the username
    enterUsername() {
        cy.get('div.block > :nth-child(1) > .relative > .block')
            .type('sanjoywelcome@gmail.com');
    }

    // Method to enter the password
    enterPassword() {
        cy.get(':nth-child(2) > .relative > .block')
            .type('Bangladesh1');
    }

    // Method to click the login button
    clickLogin() {
        cy.get('.pt-4 > .flex').click();
    }
}
