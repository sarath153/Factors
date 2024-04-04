import envDetails from '../../fixtures/envDetails.json';
import Login from '../PageObjects/Login';
import {deviceViewport, extraTimeOut } from '../Utils';  

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login();

    })

    it('Attribution Page', () => {

        //attribution accessibility

        cy.wait(5000)
        cy.get('#fa-at-link--journeys',{timeout:extraTimeOut}).trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Attribution"]').click({ force: true });
        cy.wait(1000);
        cy.url().should('contain', `${envDetails.backendApiUrl}/attribution`);
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-text--page-title').contains('Attribution');


    });


})