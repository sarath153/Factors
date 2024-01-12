import envDetails from '../../fixtures/envDetails.json';
import Login from '../PageObjects/Login';
import {deviceViewport, extraTimeOut } from '../Utils';  

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login();

    })

    
    it('Event Report', () => {

        
        cy.get('#fa-at-dropdown--projects > .flex-col',{timeout:extraTimeOut}).click();
        cy.wait(1000);

        // select project
        
        cy.get('.fa-project-list--search').type('acme');
        cy.wait(1000);
        cy.xpath('//*[text()="Acme_Staging_Demo"]').click();
        cy.get('.ant-btn-primary',{timeout:extraTimeOut}).click();
        cy.wait(2000);
        cy.visit(`${envDetails.backendApiUrl}/analyse/event`)

        cy.url().should('contain', `${envDetails.backendApiUrl}/analyse/event`);
        cy.wait(3000)

        // Select Event report & add event

        cy.xpath('(//span[text()="Add First Event"])[2]',{timeout:extraTimeOut}).click();
        cy.get('.fa-filter-select > .ant-input-affix-wrapper > .ant-input').type('web');
        cy.wait(1000)
        cy.get(':nth-child(2) > .flex-row > :nth-child(2) > .ant-typography').should('be.visible').click();
        cy.wait(1000)

        // add filter

        cy.xpath('(//*[text()="Add new"])[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]:nth-child(1)',{timeout:extraTimeOut}).should('be.visible').click();
        cy.wait(1000)
        cy.get('.fa-filter-select > .ant-input-affix-wrapper > .ant-input').type('dom');
        cy.wait(1000)
        cy.get('[title="Li Domain"]',{timeout:extraTimeOut}).should('be.visible').click();
        cy.wait(2000)
        cy.get('[title="I7infomedia.com"]').should('be.visible').click()
        // cy.get('[title="LinkedIn.com/almart.in"]').should('be.visible').click()
        cy.get('[title="Nimbleedge.com"]').should('be.visible').click()
        cy.get('.fa-select--buttons > .ant-btn > span').click();
        cy.wait(1000)

        // select date

        cy.get('.query_card_open-add > :nth-child(1) > .QueryComposer_composer_footer__LVpKT > .fa-custom-datepicker > .ant-btn').click();
        cy.wait(1000)
        cy.get('[data-menu-id]').eq(7).click();
        cy.wait(1000)
        cy.get('.query_card_open-add > :nth-child(1) > .QueryComposer_composer_footer__LVpKT > .ant-btn-primary').click();


        
    })
})