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
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left',{timeout:extraTimeOut}).should('be.visible');

        // Search Account

        cy.get('.relative > .ant-btn').click();
        cy.xpath('//*[@placeholder="Search Accounts"]').type('factors');
        cy.wait(1000)
        cy.xpath('//*[@placeholder="Search Accounts"]').type('{enter}');
        cy.wait(1000)
        // cy.get('[title="factors.ai"]',{timeout:extraTimeOut}).should('be.visible').click();
        // cy.get('.fa-select--buttons > .ant-btn').click();
        cy.get(':nth-child(2) > .ant-table-cell-fix-left',{timeout:extraTimeOut}).should('contain','factors.ai');
        cy.wait(1000)

        // Download columns
        cy.get('.inline-flex > :nth-child(2)').click();
        cy.get('.fai-text__size--h5',{timeout:extraTimeOut}).should('contain','Selects which columns to include');
        cy.get('.ant-btn-primary').should('be.visible').click();
        cy.wait(3000)

        // Add filter

        cy.get('.w-full > .ant-btn',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('(//*[text()="Add filter"])[1]').click();
        cy.get('.FaSelect_hoveredOption__Cs1tw').click();
        cy.get('[title="Visited Website"]').click();
        cy.wait(1000)
        cy.get('[title="True"]').click();
        cy.get('.fa-select--buttons > .ant-btn').click();
        cy.xpath('//*[text()="Add event"]').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(5)').click();
        cy.get('[title="Form Button Click"]').click();
        cy.wait(1000)
        cy.get('.flex > .ant-btn-primary > span').click();
        cy.wait(1000)
        
        // Save Segment

        cy.get('.w-full > .ant-btn-default').click();
        cy.wait(1000)
        cy.get('.flex > .ant-input').click().type('Demo');
        cy.wait(1000)
        cy.xpath('//*[text()="Save"]').click();
        cy.wait(2000)

        // open the saved segment

        cy.get('.row-gap-3 > .flex-col > .ant-input-affix-wrapper > .ant-input').type('de');
        cy.get('.row-gap-3 > .flex-col > .cursor-pointer').click();
        cy.wait(1000)

        // renaming segment

        cy.get('.inline-flex > .ant-btn-default').click();
        cy.get('.ant-popover-inner-content > :nth-child(1) > .flex-col > :nth-child(1)').click();
        cy.get('.flex > .ant-input').type(' Segment');
        cy.xpath('//*[text()="Save"]').click();
        cy.wait(1000)
        cy.get('#fa-at-text--page-title').should('contain','Demo Segment');

        //deleting the segment

        cy.get('.inline-flex > .ant-btn-default').click();
        cy.get('.border-b > .ant-typography').click();
        cy.wait(1000) 
        cy.xpath('//*[text()="Confirm"]').click();
        cy.wait(1000)

        // add column
        
        cy.get('.inline-flex > :nth-child(3)',{timeout:extraTimeOut}).click();
        cy.get('.ant-popover-inner-content').should('be.visible');
        cy.get('[data-id="Company name"] > .justify-between').click();
        cy.get(':nth-child(2) > .ant-btn > span').click();
    })
})