import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';

describe('Timeline Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Account Timeline -- User Properties and Event Properties', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.relative > .ant-btn').click();
        cy.xpath('//*[@placeholder="Search Accounts"]').type('accenture.com')
        cy.xpath('//*[@placeholder="Search Accounts"]').type('{enter}');
        cy.xpath('(//h4[text()="accenture.com"])[1]').click();
        cy.wait(1000)
        cy.get('.timeline-view').eq(0, { timeout: extraTimeOut }).should('be.visible');
        cy.xpath('//*[text()="Timeline"]').click({ force: true });
        cy.wait(2000)
        cy.get('#rc-tabs-0-panel-timeline', { timeout: extraTimeOut }).should('to.visible');
        cy.wait(1000)
        cy.xpath('(//div[text()="Page View"])[1]').click()
        cy.get('.ant-drawer-body', { timeout: extraTimeOut }).should('be.visible');
        cy.xpath('//h4[text()="Company State"]//following::button[1]').click({ force: true })
        cy.get('.ant-message-notice-content', { timeout: extraTimeOut }).should('to.visible');
        cy.wait(1000)
        cy.xpath('(//span[text()="Add property"])[2]', { timeout: extraTimeOut }).click()
        cy.get('[title="Company identification"]').eq(0).click()
        cy.get('[placeholder="Select Property"]').type('company state')
        cy.wait(1000)
        cy.get('[title="Company State"]', { timeout: extraTimeOut }).click()
        cy.get('.ant-message-notice-content', { timeout: extraTimeOut }).should('to.visible');
        cy.wait(2000)
        cy.xpath('//span[text()="Event Properties"]', { timeout: extraTimeOut }).click()
        cy.wait(1000)
        cy.xpath('//h4[text()="Page URL"]//following::button[1]').click({ force: true })
        cy.get('.ant-message-notice-content', { timeout: extraTimeOut }).should('to.visible');
        cy.wait(2000)
        cy.xpath('//span[text()="Event Properties"]', { timeout: extraTimeOut }).click()
        cy.wait(1000)
        cy.xpath('(//span[text()="Add property"])[2]', { timeout: extraTimeOut }).click()
        cy.get('[title="Page properties"]').eq(0).click()
        cy.wait(1000)
        cy.get('[title="Page URL"]', { timeout: extraTimeOut }).click()
        cy.get('.ant-message-notice-content', { timeout: extraTimeOut }).should('to.visible');
        cy.wait(2000)
        cy.xpath('//span[text()="Event Properties"]', { timeout: extraTimeOut }).click()
    })

})