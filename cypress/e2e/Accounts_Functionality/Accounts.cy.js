import Login1 from '../PageObjects/Login1';
import {deviceViewport, extraTimeOut } from '../Utils';  
import dayjs from 'dayjs';

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

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left',{timeout:extraTimeOut}).should('be.visible');

        // Search Account

        cy.get('.relative > .ant-btn').click();
        cy.xpath('//*[@placeholder="Search Accounts"]').type('factors');
        cy.wait(1000)
        cy.xpath('//*[@placeholder="Search Accounts"]').type('{enter}');
        cy.wait(1000)
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
        cy.xpath('//input[@placeholder="Select Event"]//following::div[3]').click();
        cy.wait(1000)
        cy.get('.flex > .ant-btn-primary > span').click();
        cy.wait(1000)
        
        // Save Segment

        cy.get('.w-full > .ant-btn-default').click();
        cy.wait(1000)
        cy.get('.flex > .ant-input').click().type(testName);
        cy.wait(1000)
        cy.xpath('//*[text()="Save"]').click();
        cy.wait(2000)

        // open the saved segment

        cy.get('[placeholder="Search segment"]').type(testName);
        cy.wait(1000)
        cy.xpath('//h4[text()="Segments"]//following::div[2]').click();
        cy.wait(1000)

        // renaming segment

        cy.xpath('//h1[text()="filter(s)"]//following::button[4]').click({force: true});
        cy.get('.ant-popover-inner-content > :nth-child(1) > .flex-col > :nth-child(1)').click();
        cy.get('.flex > .ant-input').type(randomNumber);
        cy.xpath('//*[text()="Save"]').click();
        cy.wait(2000)
        cy.get('#fa-at-text--page-title').contains(combination);

        //deleting the segment

        cy.xpath('//h1[text()="filter(s)"]//following::button[4]').click({force: true});
        cy.wait(1000)
        cy.xpath('//h1[text()="Delete Segment"]').click({force: true});
        cy.wait(1000) 
        cy.xpath('//*[text()="Confirm"]').click();
        cy.wait(3000)

        // add column
        
        cy.get('.inline-flex > :nth-child(3)',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.get('.ant-popover-inner-content').should('be.visible');
        cy.wait(1000)
        cy.get('[data-id="Company name"] > .justify-between').click();
        cy.wait(1000)
        cy.xpath('//span[text()="Apply"]').click();
    })
})