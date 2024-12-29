import { Signin_Pages } from "./pages/signin_pages";

const loginPage = new Signin_Pages();

describe('Signin Test', () => {
    beforeEach(() => {
        // Clear cookies and local storage before each test
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Signin', function () {
        // Visit the signin page
        cy.visit('https://citizen.ph.orangebd.com/signin');
        cy.log('Visited signin page.');

        // Enter username
        loginPage.enterUsername();
        cy.log('Entered username.');

        // Enter password
        loginPage.enterPassword();
        cy.log('Entered password.');

        // Intercept the login request
        cy.intercept('POST', 'https://api.ph.orangebd.com/api/citizen/login').as('loginRequest');

        // Click login button
        loginPage.clickLogin();
        cy.log('Clicked login button.');

        // Wait for the login API call to complete and log the response
        cy.wait('@loginRequest').then((interception) => {
            cy.log('Login API Response:');
            console.log(interception.response.body); // Log API response for debugging
        });

        // Validate the URL and check for elements on the post-login page
        cy.url().should('not.eq', 'https://citizen.ph.orangebd.com/signin'); // Ensure it doesn't stay on the login page
        cy.url().then((url) => {
            cy.log('Redirected to URL:', url);
        });

        // Wait for the dashboard or post-login content to load
        // cy.get('selector-for-dashboard-content', { timeout: 10000 }) // Replace this selector with a key element on the dashboard
        //     .should('be.visible')
        //     .then(() => {
        //         cy.log('Post-login content loaded successfully.');
        //     });

        // Log cookies and local storage for debugging session issues
        cy.getCookies().then((cookies) => {
            cy.log('Cookies:', cookies);
        });
        //cy.getLocalStorage().then((localStorage) => {
           // cy.log('Local Storage:', localStorage);
       // });
    });
});
