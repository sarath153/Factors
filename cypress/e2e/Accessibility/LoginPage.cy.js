import userDetails from '../../fixtures/userDetails.json';
import envDetails from '../../fixtures/envDetails.json';
import Login from '../PageObjects/Login';
import {deviceViewport, extraTimeOut } from '../Utils'; 

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

    })

    it('Login Page - Success', () => {

        Login();

        //checking if Login is success
        cy.url().should('eq', `${envDetails.backendApiUrl}/`);

        //Displays logged in user details
        cy.wait(5000)
        cy.get('#fa-at-dropdown--projects div.opacity-80',{ timeout: extraTimeOut }).should('be.visible')
        cy.get('#fa-at-dropdown--projects div.opacity-80',{ timeout: extraTimeOut }).should('have.text', userDetails.email);

        //landing in default screen - All account
        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{ timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-text--page-title',{ timeout: extraTimeOut }).should('have.text', 'All Accounts');

    });


})