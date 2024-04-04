import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';

describe('Accounts Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TC_RE_01 - Accounts_Page Load', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.wait(2000)
    })

    it('TC_RE_02, TC_RE_03 - Accounts_properties filter, Accounts_Event', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.w-full > .ant-btn', { timeout: extraTimeOut }).click();
        cy.xpath('(//*[text()="Add filter"])[1]').click();
        cy.get('.FaSelect_hoveredOption__Cs1tw').click();
        cy.get('[title="Visited Website"]').click();
        cy.wait(1000)
        cy.get('[title="True"]').click();
        cy.get('.fa-select--buttons > .ant-btn').click();

        cy.xpath('//*[text()="Add event"]').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(5)').click();
        cy.xpath('//input[@placeholder="Select Event"]//following::div[3]').click();
        cy.get('.flex > .ant-btn-primary > span').click();
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
    })

    it('TC_RE_04 - Accounts_Clear filter', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.w-full > .ant-btn', { timeout: extraTimeOut }).click();
        cy.xpath('(//*[text()="Add filter"])[1]').click();
        cy.get('.FaSelect_hoveredOption__Cs1tw').click();
        cy.get('[title="Visited Website"]').click();
        cy.wait(1000)
        cy.get('[title="True"]').click();
        cy.get('.fa-select--buttons > .ant-btn').click();

        cy.xpath('//*[text()="Add event"]').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(5)').click();
        cy.xpath('//input[@placeholder="Select Event"]//following::div[3]').click();
        cy.get('.flex > .ant-btn-primary > span').click();
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.w-full > .ant-btn-text').click();
        cy.xpath('//h1[text()="Clear all filters"]').click({ force: true });
    })

    it('TC_RE_05 - Accounts_discard changes', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.w-full > .ant-btn', { timeout: extraTimeOut }).click();
        cy.xpath('(//*[text()="Add filter"])[1]').click();
        cy.get('.FaSelect_hoveredOption__Cs1tw').click();
        cy.get('[title="Visited Website"]').click();
        cy.wait(1000)
        cy.get('[title="True"]').click();
        cy.get('.fa-select--buttons > .ant-btn').click();

        cy.xpath('//*[text()="Add event"]').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(5)').click();
        cy.xpath('//input[@placeholder="Select Event"]//following::div[3]').click();
        cy.xpath('//span[text()="Discard changes"]').click({ force: true });
    })

    it('TC_RE_06, TC_RE_07 - Accounts_Search field ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.relative > .ant-btn').click();
        cy.xpath('//*[@placeholder="Search Accounts"]').type('factors');
        cy.wait(1000)
        cy.xpath('//*[@placeholder="Search Accounts"]').type('{enter}');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('contain', 'factors.ai');
        cy.xpath('//form[@id="basic"]//following::button[1]').click();

    })

    it('TC_RE_08 - Accounts_Exporting CSV ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.inline-flex > :nth-child(2)').click();
        cy.get('.fai-text__size--h5', { timeout: extraTimeOut }).should('contain', 'Selects which columns to include');
        cy.get('.ant-btn-primary').should('be.visible').click();
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
    })

    it('TC_RE_09 - Accounts_Table Properties ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.inline-flex > :nth-child(3)', { timeout: extraTimeOut }).click();
        cy.get('.ant-popover-inner-content').should('be.visible');
        cy.get('[data-id="Company name"] > .justify-between').click();
        cy.get('[data-id="Company phone"] > .justify-between').click();
        cy.xpath('//span[text()="Apply"]').click();
    })

    it('TC_RE_10, TC_RE_11, TC_RE_12, TC_RE_13 - Accounts_New Segment, search, rename and delete ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.xpath('//h4[text()="New Segment"]').click();
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
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.py-4 > .ant-btn-default').click({ force: true });
        cy.get('.flex > .ant-input').click().type(testName);
        cy.xpath('//*[text()="Save"]').click();
        cy.get('.ant-notification-notice', { timeout: extraTimeOut }).should('be.visible');

        // search saved segment

        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('[placeholder="Search segment"]').type(testName);
        cy.xpath('//h4[text()="Segments"]//following::div[2]').click();

        // rename

        cy.xpath('//h1[text()="filter(s)"]//following::button[4]').click({ force: true });
        cy.get('.ant-popover-inner-content > :nth-child(1) > .flex-col > :nth-child(1)').click();
        cy.get('.flex > .ant-input').type(randomNumber);
        cy.xpath('//*[text()="Save"]').click();
        cy.get('.ant-notification-notice', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).contains(combination);

        //delete

        cy.xpath('//h1[text()="filter(s)"]//following::button[4]').click({ force: true });
        cy.xpath('//h1[text()="Delete Segment"]').click({ force: true });
        cy.xpath('//*[text()="Confirm"]').click();
        cy.get('.ant-notification-notice', { timeout: extraTimeOut }).should('be.visible');

    })

    it('TC_RE_14, TC_RE_15 - Accounts_Brid views ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.relative > .ant-btn').click();
        cy.xpath('//*[@placeholder="Search Accounts"]').type('infosys.com');
        cy.xpath('//*[@placeholder="Search Accounts"]').type('{enter}');
        cy.xpath('(//h4[text()="infosys.com"])[1]').click();
        cy.get('.timeline-view', { timeout: extraTimeOut }).should('not.be.empty');
    })

    it('TC_RE_16 - Accounts_Timeline Views ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.relative > .ant-btn').click();
        cy.xpath('//*[@placeholder="Search Accounts"]').type('infosys.com');
        cy.xpath('//*[@placeholder="Search Accounts"]').type('{enter}');
        cy.xpath('(//h4[text()="infosys.com"])[1]').click();
        cy.get('.timeline-view', { timeout: extraTimeOut }).should('be.visible');
        cy.xpath('//*[text()="Timeline"]').click({ force: true });
        cy.get('#rc-tabs-0-panel-timeline').should('not.be.empty');
    })

    it('TC_RE_17 - Accounts_Birdviews expand ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.relative > .ant-btn').click();
        cy.xpath('//*[@placeholder="Search Accounts"]').type('infosys.com');
        cy.xpath('//*[@placeholder="Search Accounts"]').type('{enter}');
        cy.xpath('(//h4[text()="infosys.com"])[1]').click();
        cy.get('.timeline-view', { timeout: extraTimeOut }).should('not.be.empty');
        cy.get('.collapse-btn--left').click({ force: true });
        // cy.xpath('(//div[text()=" Show Less"])[1]').scrollIntoView();
        // cy.xpath('(//div[text()=" Show Less"])[1]').should('be.visible');

    })

    it('TC_RE_18 - Accounts_Birdviews account activity ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.relative > .ant-btn').click();
        cy.xpath('//*[@placeholder="Search Accounts"]').type('infosys.com');
        cy.xpath('//*[@placeholder="Search Accounts"]').type('{enter}');
        cy.xpath('(//h4[text()="infosys.com"])[1]').click({ force: true });
        cy.get('.timeline-view', { timeout: extraTimeOut }).should('not.be.empty');
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({ force: true });
        cy.xpath('//*[text()="Timestamp"]').click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({ force: true });
        cy.xpath('//*[text()="Hourly"]').click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({ force: true });
        cy.xpath('//*[text()="Weekly"]').click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({ force: true });
        cy.xpath('//*[text()="Monthly"]').click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({ force: true });
        cy.xpath('//*[text()="Daily"]').click({ force: true });
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');

    })

    it('TC_RE_19 - Accounts_Birdviews Properties ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.relative > .ant-btn').click();
        cy.xpath('//*[@placeholder="Search Accounts"]').type('infosys.com');
        cy.xpath('//*[@placeholder="Search Accounts"]').type('{enter}');
        cy.xpath('(//h4[text()="infosys.com"])[1]').click({ force: true });
        cy.get('.timeline-view', { timeout: extraTimeOut }).should('not.be.empty');
        cy.get('.timeline-actions__group > .ant-btn-lg').click({ force: true });
        cy.get('#rc-tabs-1-tab-properties > .fa-activity-filter--tabname').click();
        cy.xpath('//h4[text()="Company Country"]').click({ force: true });
        cy.wait(3000)
        cy.xpath('//*[text()="Date and Time"]//following::h4[2]', { timeout: extraTimeOut }).should('not.be.empty')
        cy.xpath('//*[text()="Company State"]').click({ force: true });
        cy.xpath('//*[text()="Date and Time"]//following::h4[2]', { timeout: extraTimeOut }).should('not.be.empty')

    })

    it('TC_RE_20 - Accounts Properties - filter Equals - true', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.w-full > .ant-btn', { timeout: extraTimeOut }).click();
        cy.xpath('(//*[text()="Add filter"])[1]').click();
        cy.get('[title="All Accounts"]').eq(0).click();
        cy.get('[title="In Hubspot"]').click();
        cy.get('[title="True"]').click();
        cy.get('.fa-select--buttons > .ant-btn').click();

    })

    it('TC_RE_21 - Accounts filter Choose Equal - and Select value' , () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.w-full > .ant-btn', { timeout: extraTimeOut }).click();
        cy.xpath('(//*[text()="Add filter"])[1]').click();
        cy.get('[title="All Accounts"]').eq(0).click();
        cy.get('[title="Engagement Score"]').click();
        cy.xpath('//span[text()="equals"]//following::div[1]').click();
        cy.xpath('//span[text()="equals"]//following::div[1]').type('5'),{force: true};
        cy.xpath('//span[text()="equals"]//following::div[1]').type('{enter}')
    })

    it('TC_RE_22 - Accounts filter - Company Identification' , () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');
        cy.get('.w-full > .ant-btn', { timeout: extraTimeOut }).click();
        cy.xpath('(//*[text()="Add filter"])[1]').click();
        cy.get('[title="All Accounts"]').eq(0).click();
        cy.get('[title="Engagement Score"]').click();
        cy.xpath('//span[text()="equals"]//following::div[1]').click();
        cy.xpath('//span[text()="equals"]//following::div[1]').type('5'),{force: true};
        cy.xpath('//span[text()="equals"]//following::div[1]').type('{enter}')
    })
})