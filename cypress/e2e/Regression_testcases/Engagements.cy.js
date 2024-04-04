import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';

describe('Engagements Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('Engagements', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-dropdown--config').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Engagements"]').click();
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain', 'Engagement Scoring');

        cy.xpath('//span[text()="Add signal"]').click()
        cy.wait(1000)
        cy.get('[placeholder="Eg: Pricing page visit"]').type(testName)
        cy.xpath('//span[text()="Select Event"]').click()
        cy.get('[title="Others"]').eq(0).click({force:true});
        cy.xpath('//input[@placeholder="Select Event"]//following::div[3]').click()
        cy.xpath('//h4[text()="Assign weight"]//following::span[2]').click({force:true})
        cy.xpath('//span[text()="Add Signal"]').click()
        cy.get('.ant-notification-notice', { timeout: extraTimeOut }).should('be.visible');
        cy.xpath('//li[@title="Next Page"]//preceding::li[1]').click()
        cy.wait(1000)
        cy.xpath(`//td[text()='${testName}']//following::button[2]`,{timeout:extraTimeOut}).click({ force: true });
        cy.xpath('//span[text()="Yes"]').click()
        cy.get('.ant-notification-notice', { timeout: extraTimeOut }).should('be.visible');

    })
})
