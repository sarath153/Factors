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

    
    it('Account Identification', () => {

        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.visit(`${envDetails.backendApiUrl}/reports/visitor_report`);
        cy.wait(1000)
        cy.url().should('contain', `${envDetails.backendApiUrl}/reports/visitor_report`);
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','Top accounts that visited your website');
        cy.wait(2000)

        // Verify table
        
        cy.get('.ant-table-container',{timeout:extraTimeOut}).should('not.be.empty');
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(1)').should('not.be.empty');
        cy.get('.ant-table-tbody > :nth-child(2) > :nth-child(1)').should('not.be.empty');

        // Apply filter for orgnaic search

        cy.get('.gap-4 > :nth-child(1) > .ant-btn').click();
        cy.get('.fa-select-dropdown > .flex').should('be.visible');
        cy.get('[title="Organic Search"]').click();
        cy.wait(1000)
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2)').should('contain','Organic Search');
        cy.get('.ant-table-tbody > :nth-child(2) > :nth-child(2)').should('contain','Organic Search');
        cy.get('.ant-table-tbody > :nth-child(3) > :nth-child(2)').should('contain','Organic Search');

        // Apply filter for Direct

        cy.get('.gap-4 > :nth-child(1) > .ant-btn').click();
        cy.get('.fa-select-dropdown > .flex').should('be.visible');
        cy.get('[title="Direct"]').click();
        cy.wait(1000)
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2)').should('contain','Direct');
        cy.get('.ant-table-tbody > :nth-child(2) > :nth-child(2)').should('contain','Direct');
        cy.get('.ant-table-tbody > :nth-child(3) > :nth-child(2)').should('contain','Direct');

         // Apply filter for Paid Social

        cy.get('.gap-4 > :nth-child(1) > .ant-btn').click();
        cy.get('.fa-select-dropdown > .flex').should('be.visible');
        cy.get('[title="Paid Social"]').click();
        cy.wait(1000)
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2)').should('contain','Paid Social');
        cy.get('.ant-table-tbody > :nth-child(2) > :nth-child(2)').should('contain','Paid Social');
        cy.get('.ant-table-tbody > :nth-child(3) > :nth-child(2)').should('contain','Paid Social');

         // Apply campaign filter

        cy.get('.gap-4 > :nth-child(2) > div > .ant-btn').click();
        cy.get('.fa-select-dropdown').should('be.visible');
        cy.get('[title="TD_Search_Remarketing_Competitors"]').click();
        cy.get('.fa-select--buttons > .ant-btn').click();
        cy.get('.ant-table-container',{timeout:extraTimeOut}).should('not.be.empty');
        cy.get('.gap-4 > :nth-child(2) > div > .ant-btn').click();
        cy.get('.fa-select-dropdown').should('be.visible');
        cy.get('[title="TDD_RMK"]').click();
        cy.get('[title="TD_Search_US_Deanon_Competition"]').click();
        cy.get('.fa-select--buttons > .ant-btn').click();

        // Apply page view 

        cy.get('.gap-4 > :nth-child(3) > div > .ant-btn').click();
        cy.get('.FaSelect_dropdown__select__1L5kx').should('be.visible');
        cy.get('[title="app.factors.ai"]').click();
        cy.get('[title="staging-app.factors.ai"]').click();
        cy.get('[title="www.factors.ai"]').click();
        cy.get('[title="staging-app.factors.ai/login"]').click();
        cy.wait(1000)
        cy.get('.fa-select--buttons > .ant-btn').click();
        cy.get('.ant-table-wrapper',{timeout:extraTimeOut}).should('be.visible');
        cy.wait(1000)

        // Selete date

        cy.get('.justify-between.items-center > :nth-child(2) > .ant-btn').click();
        cy.get('[title="Dec 10th to Dec 16th"]').click();
        cy.get('.ant-table-wrapper',{timeout:extraTimeOut}).should('be.visible');
        cy.wait(1000)

        // Share

        cy.get('.justify-between.align-middle > :nth-child(2)').should('be.visible').click();
        cy.wait(1000)
        cy.get('#share-modal-form_subscriptionType > :nth-child(1)').click();
        cy.get('#share-modal-form_emails_0').type('sarath_tdfect@factors.ai');
        cy.get('.justify-between > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();
        cy.get('.ant-notification-notice',{timeout:extraTimeOut}).should('be.visible');

        // clear the filter

        cy.get('.gap-4 > :nth-child(2) > div > .ant-btn').click();
        cy.get('.FaSelect_dropdown__clear_opt__263i6 > .ant-btn').click();
        cy.get('.fa-select--buttons > .ant-btn').click();
        cy.wait(1000)
        cy.get('.gap-4 > :nth-child(3) > div > .ant-btn').click();
        cy.get('.FaSelect_dropdown__clear_opt__263i6 > .ant-btn').click();
        cy.get('.fa-select--buttons > .ant-btn').click();
        cy.wait(1000)

        // Search

        cy.get('.justify-between > :nth-child(2) > :nth-child(1) > .ant-btn').click();
        cy.get('.DataTable_searchBar__1fGz4').type('klenty');
        cy.get('.ant-table-row > :nth-child(1)').should('contain','Klenty');
        cy.get('.justify-between > :nth-child(2) > :nth-child(1) > .ant-btn').click();
        cy.wait(1000)

        // download

        cy.get(':nth-child(2) > :nth-child(2) > .ant-btn').click();

    })
})