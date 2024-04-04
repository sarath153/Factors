import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';

describe('Event Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('Event', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-dropdown--config').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Events"]').click();
        cy.xpath('//span[text()="New Event"]', { timeout: extraTimeOut }).click()
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > .ant-typography', { timeout: extraTimeOut }).should('contain', 'New Custom Event');
        cy.get('#name').type(testName)
        cy.get('#description').type(testName)
        cy.get('#source').click();
        cy.get('[title="Hubspot"]', { timeout: extraTimeOut }).click({ force: true });
        cy.get('#object_type').click();
        cy.get('[title="contact"]').click();
        cy.get('#property_name').click()
        cy.get('[title="city"]', { timeout: extraTimeOut }).click({ force: true })
        cy.xpath('//span[text()="Record modified time"]').click({ force: true })

        cy.xpath('//span[text()="Save"]', { timeout: extraTimeOut }).scrollIntoView();
        cy.xpath('//span[text()="Save"]').click()

        cy.get('.ant-message-notice-content', { timeout: extraTimeOut }).should('be.visible')
        cy.wait(2000)
        cy.xpath('(//span[text()="hubspot"])[1]//following::button[1]').trigger('mouseover', { force: true });
        cy.xpath('//a[text()="Remove Event"]').click({ force: true })
        cy.get('.ant-message-notice-content', { timeout: extraTimeOut }).should('be.visible')
    })
})