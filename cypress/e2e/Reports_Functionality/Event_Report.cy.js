import envDetails from '../../fixtures/envDetails.json';
import Login3 from '../PageObjects/Login3';
import {deviceViewport, extraTimeOut } from '../Utils';  

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    
    it('Event Report', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.visit(`${envDetails.backendApiUrl}/analyse/event`)

        cy.url().should('contain', `${envDetails.backendApiUrl}/analyse/event`);
        cy.wait(3000)

        // Select Event report & add event

        cy.xpath('(//span[text()="Add First Event"])[2]',{timeout:extraTimeOut}).click();
        cy.get('[placeholder="Search"]').type('webs');
        cy.wait(1000)
        cy.get('[title="Website Session"]').eq(0).should('be.visible').click();
        cy.wait(1000)

        // add filter

        cy.xpath('(//*[text()="Add new"])[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.get('[title="All Accounts"]',{timeout:extraTimeOut}).eq(0).should('be.visible').click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click({ force: true });
        cy.wait(1000)
        cy.xpath('//span[text()="Clear all"]//following::div[1]',{timeout:extraTimeOut}).click({force:true});
        cy.xpath('//span[text()="Apply"]').click();
        cy.wait(1000)

        // select date

        cy.get('.query_card_open-add > :nth-child(1) > .QueryComposer_composer_footer__LVpKT > .fa-custom-datepicker > .ant-btn').click();
        cy.wait(1000)
        cy.get('[data-menu-id]').eq(7).click();
        cy.wait(1000)
        cy.get('.query_card_open-add > :nth-child(1) > .QueryComposer_composer_footer__LVpKT > .ant-btn-primary').click();


        
    })
})