import Login1 from '../PageObjects/Login1';
import {deviceViewport, extraTimeOut } from '../Utils';  

describe('Account Identification Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TC_RE_01, TC_RE_02 - Account Identification ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Account identification"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','Top accounts that visited your website');

        // Verify table

        cy.get('.ant-table-container',{timeout:extraTimeOut}).should('not.be.empty');
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(1)').should('not.be.empty');
        cy.get('.ant-table-tbody > :nth-child(2) > :nth-child(1)').should('not.be.empty');
    })
    
    it('TC_RE_03 - Account Identification - Add filters ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Account identification"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','Top accounts that visited your website');
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(1)').should('not.be.empty');
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(1)').should('not.be.empty');
        cy.wait(2000)

        // add direct filter 

        cy.get('.gap-4 > :nth-child(1) > .ant-btn').click();
        cy.get('.fa-select-dropdown > .flex').should('be.visible');
        cy.get('[title="Direct"]').click();
        cy.wait(1000)
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2)').should('contain','Direct');
        cy.get('.ant-table-tbody > :nth-child(2) > :nth-child(2)').should('contain','Direct');
        cy.get('.ant-table-tbody > :nth-child(3) > :nth-child(2)').should('contain','Direct');

        // add Paid search filter 

        cy.get('.gap-4 > :nth-child(1) > .ant-btn').click();
        cy.get('.fa-select-dropdown > .flex').should('be.visible');
        cy.get('[title="Paid Search"]').click();
        cy.wait(1000)
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2)').should('contain','Paid Search');
        cy.get('.ant-table-tbody > :nth-child(2) > :nth-child(2)').should('contain','Paid Search');
        cy.get('.ant-table-tbody > :nth-child(3) > :nth-child(2)').should('contain','Paid Search');
    })

    it('TC_RE_04 - Account Identification - Add campaign', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Account identification"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','Top accounts that visited your website');
        cy.get('.ant-table-container',{timeout:extraTimeOut}).should('not.be.empty');
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(1)',{timeout:extraTimeOut}).should('not.be.empty');
        cy.wait(2000)

        // add campaign

        cy.get('.gap-4 > :nth-child(2) > div > .ant-btn').click();
        cy.get('.fa-select-dropdown').should('be.visible');
        cy.get('[title="TD_Search_Remarketing_Competitors"]').click();
        cy.get('.fa-select--buttons > .ant-btn').click();
        cy.get('.ant-table-container',{timeout:extraTimeOut}).should('not.be.empty');
        cy.get('.gap-4 > :nth-child(2) > div > .ant-btn').click();
        cy.get('.fa-select-dropdown').should('be.visible');
        cy.get('[title="TD_Search_US_Deanon_Competition"]').click();
        cy.get('.fa-select--buttons > .ant-btn').click();
    })

    it('TC_RE_05 - Account Identification - Page viewed', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Account identification"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','Top accounts that visited your website');
        cy.get('.ant-table-container',{timeout:extraTimeOut}).should('not.be.empty');
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(1)',{timeout:extraTimeOut}).should('not.be.empty');
        cy.wait(2000)

        // add Page viewed

        cy.get('.gap-4 > :nth-child(3) > div > .ant-btn').click();
        cy.get('.FaSelect_dropdown__select__1L5kx').should('be.visible');
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.xpath('//input[@placeholder="Search"]//following::div[5]').click();
        cy.xpath('//input[@placeholder="Search"]//following::div[7]').click();
        cy.xpath('//input[@placeholder="Search"]//following::div[9]').click();
        cy.wait(1000)
        cy.get('.fa-select--buttons > .ant-btn').click();
        cy.get('.ant-table-wrapper',{timeout:extraTimeOut}).should('be.visible');
        cy.wait(1000)

    })

    it('TC_RE_06 - Account Identification - Search field', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Account identification"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','Top accounts that visited your website');
        cy.get('.ant-table-container',{timeout:extraTimeOut}).should('not.be.empty');
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(1)',{timeout:extraTimeOut}).should('not.be.empty');
        cy.wait(2000)

        cy.get('.DataTable_searchBar__1fGz4 > .justify-between > :nth-child(2) > :nth-child(1) > .ant-btn').click();
        cy.get('.DataTable_searchBar__1fGz4').type('klenty');
        cy.get('.DataTable_searchBar__1fGz4').type('{enter}');
        cy.get('.ant-table-row > :nth-child(1)').should('contain','Klenty');
        cy.get('.DataTable_searchBar__1fGz4 > .justify-between > :nth-child(2) > :nth-child(1) > .ant-btn').click();
        cy.wait(1000)
    })

    it('TC_RE_07 - Account Identification - Download CSV', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Account identification"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','Top accounts that visited your website');
        cy.get('.ant-table-container',{timeout:extraTimeOut}).should('not.be.empty');
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(1)',{timeout:extraTimeOut}).should('not.be.empty');
        cy.wait(2000)

        cy.get(':nth-child(2) > :nth-child(2) > .ant-btn').click();
    })

    it('TC_RE_08 - Account Identification - Date range', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Account identification"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','Top accounts that visited your website');
        cy.get('.ant-table-container',{timeout:extraTimeOut}).should('not.be.empty');
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(1)',{timeout:extraTimeOut}).should('not.be.empty');
        cy.wait(2000)

        cy.xpath('//h4[text()="Channel"]//following::button[3]').click();
        cy.xpath('//div[@title="Today"]//following::div[3]').click();
        cy.get('.ant-table-wrapper',{timeout:extraTimeOut}).should('be.visible');
    })

    it('TC_RE_09 - Account Identification - Share_Send Once', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Account identification"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','Top accounts that visited your website');
        cy.get('.ant-table-container',{timeout:extraTimeOut}).should('not.be.empty');
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(1)',{timeout:extraTimeOut}).should('not.be.empty');
        cy.wait(3000)

        cy.xpath('//span[text()="Share"]',{timeout:extraTimeOut}).should('be.visible').click({force: true});
        cy.wait(1000)
        cy.get('#share-modal-form_subscriptionType > :nth-child(1)').click();
        cy.get('#share-modal-form_emails_0').type('sarath_tdfect@factors.ai');
        cy.get('.justify-between > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();
        cy.get('.ant-notification-notice',{timeout:extraTimeOut}).should('be.visible');

    })

    it('TC_RE_10 - Account Identification - Share_Subscribe copy link', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Account identification"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','Top accounts that visited your website');
        cy.get('.ant-table-container',{timeout:extraTimeOut}).should('not.be.empty');
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(1)',{timeout:extraTimeOut}).should('not.be.empty');
        cy.wait(3000)

        cy.xpath('//span[text()="Share"]',{timeout:extraTimeOut}).should('be.visible').click({force: true});
        cy.wait(1000)
        cy.get('#share-modal-form_emails_0').type('sarath_tdfect@factors.ai');
        cy.xpath('//span[text()="Copy link"]').click();
        cy.xpath('//span[text()="Done"]').click();
        cy.get('.ant-notification-notice',{timeout:extraTimeOut}).should('be.visible');

    })
})