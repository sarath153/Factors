import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';

describe('Properties Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('Properties', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;


        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-dropdown--config').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Properties"]').click();
        cy.xpath('//span[text()="Add New"]', { timeout: extraTimeOut }).click()
        cy.get('#name',{timeout:extraTimeOut}).type(testName)
        cy.get('#description').type('Testing Purpose')
        cy.xpath('//span[text()="New Value"]').click()

        cy.get('#rcDialogTitle0', { timeout: extraTimeOut }).should('contain', 'Add/Edit new value');
        cy.get('#value', { timeout: extraTimeOut }).type('Test')
        cy.xpath('//span[text()="New Filter"]').click()
        cy.xpath('//span[contains(text(),"Select Property")]').click()
        cy.xpath('//span[text()="name"]').click()
        cy.xpath('//h4[text()="Filters"]//following::input[@type="text"]').type('Test')
        cy.get('#rcDialogTitle0', { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Save"])[2]').click()
        cy.wait(1000)
        cy.xpath('//span[text()="Save"]').click()
        cy.get('.ant-notification-notice', { timeout: extraTimeOut }).should('be.visible');
        cy.xpath('(//span[text()="Cancel"])[1]').click({ force: true })
        cy.wait(1000)
        cy.xpath(`//span[text()='${testName}']`, { timeout: extraTimeOut }).scrollIntoView();
        cy.xpath(`//span[text()='${testName}']//following::button[1]`).click({ force: true });
        cy.xpath('//a[text()="Remove Property"]').click()
        cy.xpath('//span[text()="Confirm"]').click()
        cy.get('.ant-notification-notice', { timeout: extraTimeOut }).should('be.visible');

    })
})