
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

    it('Settings Page', () => {

        //settings dropdown and pages accessibility check 

        [
            { key: 'Basic Details', index: 2, url: 'general' },
            { key: 'Users and Roles', index: 3, url: 'user' },
            { key: 'Integrations', index: 5, url: 'integration' },
            { key: 'Javascript SDK', index: 6, url: 'sdk' },
            { key: 'Sharing', index: 8, url: 'sharing' },
            { key: 'Pricing', index: 10, url: 'pricing?activeTab=billing' }
        ].map((item) => {
            cy.get('#fa-at-dropdown--settings', { timeout: extraTimeOut }).click();
            cy.get(`.fa-at-overlay--settings > ul > li:nth-child(${item.index}) > span > a`).click({ force: true });
            cy.wait(1000);

            cy.url().should('eq', `${envDetails.backendApiUrl}/settings/${item.url}`);
            if (item.key == 'Pricing') {
                cy.get('.ant-breadcrumb').should('be.visible');
                cy.get(`.ant-breadcrumb span:nth-child(3) > span.ant-breadcrumb-link`).should('have.text', 'Billing');
            } else {
                cy.get('#fa-at-text--page-title').should('be.visible');
                cy.get('#fa-at-text--page-title').contains(item.key);
            }
        });

    });


})