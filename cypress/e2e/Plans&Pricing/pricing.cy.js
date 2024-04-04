import Login2 from '../PageObjects/Login2';
import { deviceViewport, extraTimeOut } from '../Utils';
import envDetails from '../../fixtures/envDetails.json';

describe.skip('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login2();

    })

    it.skip('Pricing', () => {

        //   pricing
        cy.wait(5000)
        cy.get('[id="fa-at-dropdown--settings"]', { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        cy.wait(1000)
        cy.xpath('//h4[text()="Pricing"]').click();
        cy.wait(1000)

        // select upgrade plan

        cy.get('.mt-5 > .ant-btn').click();
        cy.wait(1000)
        cy.get('.fai-text__size--h4').should('contain', 'Upgrade to get more out of Factors');
        cy.wait(1000)
        // cy.xpath('//h4[text()="Show All Plans"]').click();

        // buy a plan

        cy.xpath('(//span[text()="Buy this Plan"])[1]').click();
        cy.wait(1000)
        cy.get('.ant-modal-body').should('be.visible');
        cy.xpath('//*[text()="Continue"]').should('be.visible');
        cy.xpath('//*[text()="Continue"]').click();
        cy.wait(1000)


        // Payment gateway

        cy.origin('https://factors-test.chargebee.com', () => {
            cy.url().should('contain', 'chargebee.com');
            cy.get('[data-cb-id="cart_submit"]').click()
            cy.get('[id="first_name"]').clear().type('sonali');
            cy.get('[class="cb-button cb-button__primary"]').click();
            cy.get('[data-cb-id="review_submit"]').click();
            cy.wait(5000)

        })

        // back to staging url

        cy.visit(`${envDetails.backendApiUrl}/settings/pricing?state=succeeded`);
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('be.visible');

        // downgrading

        cy.get('.mt-5 > .ant-btn').click();
        // cy.xpath('//h4[text()="Show All Plans"]').click();
        cy.xpath('(//span[text()="Buy this Plan"])[1]').click();
        cy.get('.ant-modal-body').should('be.visible');
        cy.xpath('//*[text()="Continue"]').click();
        cy.wait(1000)

        cy.origin('https://factors-test.chargebee.com', () => {
            cy.url().should('contain', 'chargebee.com');
            cy.get('[data-cb-id="cart_submit"]').click();
            cy.get('[class="cb-button cb-button__primary"]').click();
            cy.get('[data-cb-id="review_submit"]').click();
            cy.wait(5000)
        })

        cy.visit(`${envDetails.backendApiUrl}/settings/pricing?state=succeeded`);
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('be.visible');


    })
})