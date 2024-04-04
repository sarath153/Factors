import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';

describe('Custom Kpi Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('Custom Kpi', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;


        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.get('#fa-at-dropdown--config').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Custom KPIs"]').click();
        cy.xpath('//span[text()="Add New"]', { timeout: extraTimeOut }).click()
        cy.get('#name',{timeout:extraTimeOut}).type(testName)
        cy.get('#description').type('Testing Purpose')

        cy.get('[title="Default"]').click({force:true})
        cy.get('[title="Derived KPI"]').click({force:true})

        cy.xpath('//span[text()="Add KPI"]').click()
        cy.get('[title="Website Session"]').eq(0).click()
        cy.get('[placeholder="Select Event"]').type('tot')
        cy.get('[title="Total Sessions"]').click()
        cy.xpath('//span[text()="Add another KPI"]').click()
        cy.get('[title="Website Session"]').eq(0).click()
        cy.xpath('//input[@placeholder="Select Event"]//following::div[4]').click()

        cy.get('#for').type('A+B')
        cy.get('#showAspercentage').click()

        cy.get('[type="submit"]').scrollIntoView()
        cy.get('[type="submit"]').click()

        cy.get('.ant-notification-notice', { timeout: extraTimeOut }).should('be.visible');
        cy.xpath(`//h4[text()='${testName}']`, { timeout: extraTimeOut }).scrollIntoView();
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).click({ force: true });
        cy.xpath('//span[text()="Remove"]').click()
        cy.get('.ant-notification-notice', { timeout: extraTimeOut }).should('be.visible');


    })
})