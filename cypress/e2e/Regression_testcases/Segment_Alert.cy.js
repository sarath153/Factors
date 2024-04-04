import envDetails from '../../fixtures/envDetails.json';
import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';

describe('Segment Alert Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Segment Alert', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.xpath('//h4[text()="Automations"]').click();
        cy.get('#fa-at-text--page-title').should('be.visible')

        cy.xpath('//span[text()="Templates"]').click()
        cy.xpath('(//div[text()="Account Executives"])[2]', { timeout: extraTimeOut }).click()
        cy.xpath('//span[text()="This is correct"]').click()

        cy.get('[title="Performs an event"]', { timeout: extraTimeOut }).click()
        cy.get('[title="Enter the segment"]').click()
        cy.get('.active').scrollIntoView()
        cy.xpath('//h4[text()="Segment name"]//following::div[3]').click()
        cy.xpath('//div[text()="In Hubspot"]').click({ force: true })

        cy.get('#alert_name').clear()
        cy.get('#alert_name').type(testName)

        cy.xpath('(//button[@role="switch"])[1]').click();
        cy.xpath('//span[text()="Select Channel"]').click();
        cy.get('[placeholder="Select channels"]').type('stag');
        cy.xpath('//div[text()="#alert-test-staging"]//preceding::input[@type="checkbox"][1]').click();
        cy.xpath('//span[text()="Close"]//following::button').click();

        cy.xpath('(//button[@type="submit"])[2]').click();
        cy.wait(1000)
        cy.get('.ant-notification-notice',{timeout:extraTimeOut}).should('be.visible');

        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).click({ force: true });
        cy.xpath('//span[text()="Remove alert"]').click();
        cy.xpath('//span[text()="OK"]').click({force:true});
        cy.get('.ant-notification-notice',{timeout:extraTimeOut}).should('be.visible');

    })
})