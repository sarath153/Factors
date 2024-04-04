import envDetails from '../../fixtures/envDetails.json';
import Login1 from '../PageObjects/Login1';
import {deviceViewport, extraTimeOut } from '../Utils';  
import dayjs from 'dayjs';

describe('Peoples Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TC_RE_01 - Peoples_Page Load', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="People"]').click();
        cy.wait(8000)
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All People');

    })

    it('TC_RE_02, TC_RE_03 - Peoples_Page filter', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="People"]').click();
        cy.wait(8000)
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All People');
        cy.get('.w-full > .ant-btn').click();
        cy.wait(1000)
        cy.xpath('//*[text()="Add filter"]').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(3)').click();
        cy.get('[title="is_email_verified"]').click();
        cy.get('[title="true"]').click();
        cy.get('.fa-select--buttons > .ant-btn > span').click();
        cy.wait(1000)
        cy.xpath('//*[text()="Add event"]').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(4)').click()
        cy.get('.FaSelect_hoveredOption__Cs1tw').click();
        cy.get('.ant-btn-primary > span').click();
        cy.get(':nth-child(2) > .ant-table-cell-fix-left',{timeout:extraTimeOut}).should('be.visible');
        
    })

    it('TC_RE_04 - Peoples_Filter clear', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="People"]').click();
        cy.wait(8000)
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All People');
        cy.get('.w-full > .ant-btn').click();
        cy.wait(1000)
        cy.xpath('(//*[text()="Add filter"])[1]').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(3)').click();
        cy.get('[title="is_email_verified"]').click();
        cy.get('[title="true"]').click();
        cy.get('.fa-select--buttons > .ant-btn > span').click();
        cy.wait(1000)
        cy.xpath('//*[text()="Add event"]').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(4)').click()
        cy.get('.FaSelect_hoveredOption__Cs1tw').click();
        cy.get('.ant-btn-primary > span').click();
        cy.get(':nth-child(2) > .ant-table-cell-fix-left',{timeout:extraTimeOut}).should('be.visible');
        cy.get('.w-full > .ant-btn-text').click();
        cy.xpath('//h1[text()="Clear all filters"]').click({force: true});
    })

    it('TC_RE_05 - Peoples_discard changes', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="People"]').click();
        cy.wait(8000)
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All People');
        cy.get('.w-full > .ant-btn').click();
        cy.wait(1000)
        cy.xpath('(//*[text()="Add filter"])[1]').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(3)').click();
        cy.get('[title="is_email_verified"]').click();
        cy.get('[title="true"]').click();
        cy.get('.fa-select--buttons > .ant-btn > span').click();
        cy.wait(1000)
        cy.xpath('//*[text()="Add event"]').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(4)').click()
        cy.get('.FaSelect_hoveredOption__Cs1tw').click();
        cy.xpath('//span[text()="Discard changes"]').click({force: true});

    })

    it('TC_RE_06, TC_RE_07 - People_Search field ', () => {
    
        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="People"]').click();
        cy.wait(8000)
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All People');

        // Search username
        
        cy.get(':nth-child(2) > .ant-table-cell-fix-left',{timeout:extraTimeOut}).should('be.visible');
        cy.get('.relative > .ant-btn').click();
        cy.wait(1000)
        cy.xpath('//*[@placeholder="Search Users"]').type('baliga');
        cy.xpath('//*[@placeholder="Search Users"]').type('{enter}');
        cy.get('.ant-table-row > .ant-table-cell-fix-left').should('contain','baliga@factors.ai');
        cy.xpath('//form[@id="basic"]//following::button[1]').click();
    })

    it('TC_RE_08, TC_RE_09, TC_RE_10, TC_RE_11 - People_New Segment, search, rename and delete ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="People"]').click();
        cy.wait(8000)
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All People');
        cy.xpath('//h4[text()="New Segment"]').click();
        cy.xpath('//*[text()="Add filter"]').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(3)').click();
        cy.get('[title="is_email_verified"]').click();
        cy.get('[title="true"]').click();
        cy.get('.fa-select--buttons > .ant-btn > span').click();
        cy.wait(1000)
        cy.xpath('//*[text()="Add event"]').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(4)').click()
        cy.get('.FaSelect_hoveredOption__Cs1tw').click();
        cy.get('.ant-btn-primary > span').click();
        cy.get(':nth-child(2) > .ant-table-cell-fix-left',{timeout:extraTimeOut}).should('be.visible');
        cy.get('.py-4 > .ant-btn-default').click({force:true});
        cy.get('.flex > .ant-input').click().type(testName);
        cy.xpath('//*[text()="Save"]').click();
        cy.get('.ant-notification-notice',{timeout:extraTimeOut}).should('be.visible');

        // open the saved segment

        cy.get('[placeholder="Search segment"]').type(testName);
        cy.get('.flex-col > :nth-child(7)').contains(testName).click();

        // renaming segment

        cy.xpath('//h1[text()="filter(s)"]//following::button[3]').click({force: true});
        cy.get('.ant-popover-inner-content > :nth-child(1) > .flex-col > :nth-child(1)').click();
        cy.xpath('//*[@placeholder="Name"]').type(randomNumber);
        cy.xpath('(//span[text()="Save"])[2]').click();
        cy.get('#fa-at-text--page-title').contains(combination);
        cy.get('.ant-notification-notice-message').should('be.visible');
        
        //deleting the segment

        cy.xpath('//h1[text()="filter(s)"]//following::button[3]').click({force: true});
        cy.xpath('//h1[text()="Delete Segment"]').click({force: true});
        cy.xpath('//*[text()="Confirm"]').click();
        cy.get('.ant-notification-notice-message').should('be.visible');
    
    })

    it('TC_RE_12, TC_RE_13 - People_Brid views ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="People"]').click();
        cy.wait(8000)
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All People');
        cy.get(':nth-child(2) > .ant-table-cell-fix-left',{timeout:extraTimeOut}).should('be.visible');

        // select account & birdview

        cy.get('.relative > .ant-btn').click();
        cy.xpath('//*[@placeholder="Search Users"]').type('saurabh.singh@webengage.com');
        cy.xpath('//*[@placeholder="Search Users"]').type('{enter}');
        cy.get(':nth-child(2) > .ant-table-cell-fix-left').click();
        cy.get('.timeline-view',{timeout:extraTimeOut}).should('be.visible');

    })

    it('TC_RE_14 - People_Birdviews expand ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="People"]').click();
        cy.wait(8000)
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All People');
        cy.get(':nth-child(2) > .ant-table-cell-fix-left',{timeout:extraTimeOut}).should('be.visible');

        cy.get('.relative > .ant-btn').click();
        cy.xpath('//*[@placeholder="Search Users"]').type('saurabh.singh@webengage.com');
        cy.xpath('//*[@placeholder="Search Users"]').type('{enter}');
        cy.get(':nth-child(2) > .ant-table-cell-fix-left').click();
        cy.get('.timeline-view',{timeout:extraTimeOut}).should('be.visible');
        cy.wait(1000)
        cy.get('.collapse-btn--left').click({ force: true });
        // cy.xpath('(//div[text()=" Show Less"])[1]').scrollIntoView();
        // cy.xpath('(//*[text()=" Show Less"])[1]').should('be.visible');
    })

    it('TC_RE_15 - People_Birdviews account activity ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.get('#fa-at-link--accounts').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="People"]').click();
        cy.wait(8000)
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All People');
        cy.get(':nth-child(2) > .ant-table-cell-fix-left',{timeout:extraTimeOut}).should('be.visible');

        cy.get('.relative > .ant-btn').click();
        cy.xpath('//*[@placeholder="Search Users"]').type('saurabh.singh@webengage.com');
        cy.xpath('//*[@placeholder="Search Users"]').type('{enter}');
        cy.get(':nth-child(2) > .ant-table-cell-fix-left').click();
        cy.get('.timeline-view',{timeout:extraTimeOut}).should('be.visible');
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({force: true});
        cy.xpath('//*[text()="Timestamp"]').click();
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({force: true});
        cy.xpath('//*[text()="Hourly"]').click({force: true});
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({force: true});
        cy.xpath('//*[text()="Weekly"]').click({force: true});
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({force: true});
        cy.xpath('//*[text()="Monthly"]').click({force: true});
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({force: true});
        cy.xpath('//*[text()="Daily"]').click({force: true});
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
    })
})