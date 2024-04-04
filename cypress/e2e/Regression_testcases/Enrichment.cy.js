import Login3 from '../PageObjects/Login3';
import {deviceViewport, extraTimeOut } from '../Utils';  

describe('Enrichment Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('Enrichment', () => {

        const filePath = 'Sample_file_for_page_URL_rules.csv';

        cy.wait(5000)
        cy.get('[id="fa-at-dropdown--settings"]', { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        cy.wait(1000)
        cy.xpath('//h4[text()="Pricing"]').click();
        cy.wait(1000)
        cy.xpath('//div[text()="Enrichment Rules"]').click()
        cy.xpath('//h4[text()="Set up rules for Account identification"]//following::label[2]',{timeout:extraTimeOut}).click()
        cy.xpath('//span[text()="Select pages"]').click()
        cy.xpath('//span[text()="Upload List"]',{timeout:extraTimeOut}).click()
        cy.xpath('//a[text()="file"]',{timeout:extraTimeOut}).click()
        cy.wait(3000)
        cy.get('input[type="file"]').attachFile(filePath);
        cy.wait(1000)
        cy.xpath('//span[text()="Done"]').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > .flex-col > :nth-child(2)').should('be.visible');
        cy.xpath('//span[text()="Save changes"]').scrollIntoView()
        cy.xpath('//span[text()="Save changes"]').click()
        cy.get('.ant-notification-notice',{timeout:extraTimeOut}).should('be.visible');
        cy.xpath('//h4[text()="Identify accounts who visited specific pages"]//following::button[2]').scrollIntoView()
        cy.xpath('//h4[text()="Identify accounts who visited specific pages"]//following::button[2]').click()
        cy.xpath('//span[text()="Delete"]').scrollIntoView()
        cy.xpath('//span[text()="Delete"]',{timeout:extraTimeOut}).click()
        cy.get('.ant-notification-notice',{timeout:extraTimeOut}).should('be.visible');
    })
})
