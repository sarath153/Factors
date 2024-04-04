import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';

describe('Content_groups Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Content_groups', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-dropdown--config').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Content Groups"]').click();
        cy.xpath('//span[text()="Add New"]', { timeout: extraTimeOut }).click()
        cy.get('#content_group_name', { timeout: extraTimeOut }).type(testName)
        cy.get('#content_group_description').type('Testing Purpose')
        cy.xpath('//span[text()="New value"]').click()
        cy.get('#content_group_value', { timeout: extraTimeOut }).type('Testing1')
        cy.xpath('//span[text()="Add rule"]').click()
        cy.get('#rule_0_va').type('25')
        cy.get('[type="submit"]').eq(1).click({ force: true })
        cy.wait(1000)
        cy.xpath('//span[text()="New value"]').click()
        cy.get('#content_group_value', { timeout: extraTimeOut }).type('Testing2')
        cy.get('[value="OR"]').click({ force: true })
        cy.xpath('//span[text()="Add rule"]').click()
        cy.get('[title="Contains"]').click({ force: true })
        cy.get('[title="Equals"]').click({ force: true })
        cy.get('#rule_0_va').type('26')
        cy.get('[type="submit"]').eq(1).click({ force: true })
        cy.wait(1000)
        cy.get('[type="submit"]').click({ force: true })
        cy.get('.ant-notification-notice', { timeout: extraTimeOut }).should('be.visible');
        cy.wait(1000)
        cy.xpath(`//th[text()="Values"]//following::button[1]`).click({ force: true });
        cy.xpath('//a[text()="Remove"]').click()
        cy.xpath('//span[text()="Confirm"]').click()
        cy.get('.ant-notification-notice', { timeout: extraTimeOut }).should('be.visible');
    })
})