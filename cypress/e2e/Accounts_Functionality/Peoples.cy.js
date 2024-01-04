import envDetails from '../../fixtures/envDetails.json';
import Login1 from '../PageObjects/Login1';
import {deviceViewport, extraTimeOut } from '../Utils';  

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    
    it('Accounts', () => {

        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.visit(`${envDetails.backendApiUrl}/profiles/people`);
        cy.wait(1000)
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All People');

        // Search username
        cy.get(':nth-child(2) > .ant-table-cell-fix-left',{timeout:extraTimeOut}).should('be.visible');
        cy.get('.relative > .ant-btn').click();
        cy.wait(1000)
        cy.get('.undefined > .ant-input-affix-wrapper').type('bali');
        cy.get('[title="baliga@factors.ai"]').should('be.visible').click();
        cy.get('.fa-select--buttons > .ant-btn > span').click();
        cy.get('.ant-table-row > .ant-table-cell-fix-left').should('contain','baliga@factors.ai');
        cy.wait(1000)

        // add column

        cy.get('.inline-flex > :nth-child(2)').click();
        cy.wait(1000)
        cy.get('.ant-tabs').should('be.visible');
        cy.wait(1000)
        cy.get('[data-id="Company Country"] > .justify-between').click();
        cy.get(':nth-child(2) > .ant-btn > span').click();
        cy.wait(1000)
        cy.get('.ant-table-cell-content > .flex').should('be.visible')
        cy.wait(1000)

        // Add filter

        cy.get('.w-full > .ant-btn').click();
        cy.get('.pt-4 > :nth-child(2) > .ant-btn').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(3)').click();
        cy.get('[title="is_email_verified"]').click();
        cy.get('[title="true"]').click();
        cy.get('.fa-select--buttons > .ant-btn > span').click();
        cy.wait(1000)
        cy.get(':nth-child(2) > .flex-col > .ant-btn').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(4)').click()
        cy.get('.FaSelect_hoveredOption__Cs1tw').click();
        cy.get('.ant-btn-primary > span').click();
        cy.get(':nth-child(2) > .ant-table-cell-fix-left',{timeout:extraTimeOut}).should('be.visible');

        // Save Segment

        cy.get('.w-full > .ant-btn-default').click();
        cy.wait(1000)
        cy.get('.flex > .ant-input').click().type('Test Segment');
        cy.get('.ant-btn-primary > span').click();
        cy.wait(1000)

        // open the saved segment

        cy.get('.flex-col > :nth-child(7)').should('contain','Test Segment').click();
        cy.wait(1000)

        // renaming segment

        cy.get('.inline-flex > .ant-btn-default').click()
        cy.get('.ant-popover-inner-content > :nth-child(1) > .flex-col > :nth-child(1)').click();
        cy.wait(1000)
        cy.get(':nth-child(18) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .row-gap-5 > .flex > .ant-input').type('123');
        cy.wait(1000)
        cy.get(':nth-child(18) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .ant-btn-primary > span').click();
        cy.wait(1000)
        cy.get('#fa-at-text--page-title').should('contain','Test Segment123');
        cy.wait(1000)
        
        //deleting the segment

        cy.get('.inline-flex > .ant-btn-default').click();
        cy.wait(1000)
        cy.get('.ant-popover-inner-content > :nth-child(1) > .flex-col > .border-b').click();
        cy.wait(1000)
        cy.get(':nth-child(19) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .ant-btn-primary > span').click();
        cy.wait(1000)
        cy.get('.ant-notification-notice-message').should('be.visible');
    })
})