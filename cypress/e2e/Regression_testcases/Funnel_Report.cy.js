import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs'; 

describe('Funnel Report Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('TC_RE_01 - Funnel Report - New Report', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').should('not.be.disabled')

    })

    it('TC_RE_02 - Funnel Report - Generate the Funnel report', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(10000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('Web')
        cy.get('[title="Website Session"]').eq(0, { timeout: extraTimeOut }).click()

    })

    it('TC_RE_03 - Funnel Report - adding multiple Event ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('Web')
        cy.get('[title="Website Session"]').eq(0, { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Clicked"]').click();

    })

    it('TC_RE_04 - Funnel Report - Local filter ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('Web')
        cy.get('[title="Website Session"]').eq(0, { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Clicked"]').click();
        cy.wait(1000)

    })

    it('TC_RE_05 - Funnel Report - check the filter option is visible ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('Web')
        cy.get('[title="Website Session"]').eq(0, { timeout: extraTimeOut }).click()

        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Clicked"]').click();

        cy.get('.query_card_open-add > :nth-child(1) > :nth-child(4)').should('be.visible')

    })

    it('TC_RE_06 - Funnel Report - add multiple filter for one session ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('Web')
        cy.get('[title="Website Session"]').eq(0, { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Clicked"]').click();

        cy.xpath('(//h4[text()="Analyse"])[2]//following::button[3]').trigger('mouseover', { force: true }).click({ force: true });
        cy.wait(1000)
        cy.get('[title="Traffic source"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Channel"]').click();
        cy.get('[title="Others"]').click();
        cy.xpath('//span[text()="Apply"]').click();

    })

    it('TC_RE_07 - Funnel Report - the delete option works ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('Web')
        cy.get('[title="Website Session"]').eq(0, { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Clicked"]').click();

        cy.xpath('(//h4[text()="Analyse"])[2]//following::button[8]').trigger('mouseover', { force: true }).click({ force: true });

    })

    it('TC_RE_08, TC_RE_09 - Funnel Report - global filter more than one ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('Web')
        cy.get('[title="Website Session"]').eq(0, { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Clicked"]').click();

        cy.xpath('(//h4[text()="FILTER BY"])[2]//following::span[text()="Add new"][1]').click();
        cy.wait(1000)
        cy.get('[title="All Accounts"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="In Hubspot"]').click({ force: true });
        cy.wait(1000)
        cy.get('[title="True"]').click();
        cy.xpath('//span[text()="Apply"]').click();

    })

    it('TC_RE_10 - Funnel Report - clicking on the + icon ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('Web')
        cy.get('[title="Website Session"]').eq(0, { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Clicked"]').click();

        cy.xpath('(//h4[text()="FILTER BY"])[2]//following::span[text()="Add new"][1]').click();
        cy.wait(1000)
        cy.get('[title="All Accounts"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="In Hubspot"]').click({ force: true });
        cy.wait(1000)
        cy.get('[title="True"]').click();
        cy.xpath('//span[text()="Apply"]').click();

        cy.xpath('(//h4[text()="FILTER BY"])[2]//following::button[@index="0"]').click();
        cy.get('[title="All Accounts"]').eq(0, { timeout: extraTimeOut }).click();
        cy.wait(3000)
        cy.get('[title="Visited G2"]', { timeout: extraTimeOut }).click({ force: true });
        cy.get('[title="True"]', { timeout: extraTimeOut }).click();
        cy.xpath('//span[text()="Apply"]').click();

        cy.xpath('(//h4[text()="FILTER BY"])[2]//following::h4[1]').should('contain','or')

    })

    it('TC_RE_11 - Funnel Report - breakdown ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('Web')
        cy.get('[title="Website Session"]').eq(0, { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Clicked"]').click();

        cy.xpath('(//h4[text()="BREAKDOWN"])[2]//following::span[text()="Add new"]').click();
        cy.get('[title="All Accounts"]').eq(0,{timeout:extraTimeOut}).click();
        cy.get('[title="Engagement Level"]',{timeout:extraTimeOut}).click();

    })

    it('TC_RE_12 - Funnel Report - criteria ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('Web')
        cy.get('[title="Website Session"]').eq(0, { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Clicked"]').click();

        cy.xpath('(//h4[text()="Conversion within"])[2]//following::div[1]').click();
        cy.get('[role="tooltip"]').should('be.visible')
        cy.xpath('(//div[@role="tooltip"]//following::span)[2]').click({force:true});
        cy.get('[title="Hours"]').click();
        cy.xpath('(//div[@role="tooltip"]//following::span)[2]').click({force:true});
        cy.get('[title="Minutes"]').click();
        cy.xpath('(//div[@role="tooltip"]//following::span)[2]').click({force:true});
        cy.get('[title="Days"]').click();
        cy.xpath('//span[text()="Apply"]').click();

    })

    it('TC_RE_13 - Funnel Report - custom range ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('Web')
        cy.get('[title="Website Session"]').eq(0, { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Clicked"]').click();

        cy.xpath('(//h4[text()="Conversion within"])[2]//following::div[1]').click();
        cy.get('[role="tooltip"]').should('be.visible')
        cy.xpath('(//div[@role="tooltip"]//following::span)[2]').click({force:true});
        cy.get('[title="Hours"]').click();
        cy.xpath('(//div[@role="tooltip"]//following::span)[2]').click({force:true});
        cy.get('[title="Minutes"]').click();
        cy.xpath('(//div[@role="tooltip"]//following::span)[2]').click({force:true});
        cy.get('[title="Days"]').click();
        cy.xpath('//span[text()="Apply"]').click();

        cy.xpath('(//h4[text()="FUNNEL CRITERIA"])[2]//following::button[1]').click();
        cy.get('[role="menuitem"]').eq(9).click();
        cy.xpath('(//span[text()="Run Analysis"])[2]').click();

    })

    it('TC_RE_14 - Funnel Report -  KPI, filters and breakdown and run analysis ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('Web')
        cy.get('[title="Website Session"]').eq(0, { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Clicked"]').click();

        cy.xpath('(//h4[text()="FILTER BY"])[2]//following::span[text()="Add new"][1]').click();
        cy.wait(1000)
        cy.get('[title="All Accounts"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="In Hubspot"]').click({ force: true });
        cy.wait(1000)
        cy.get('[title="True"]').click();
        cy.xpath('//span[text()="Apply"]').click();

        cy.xpath('(//h4[text()="BREAKDOWN"])[2]//following::span[text()="Add new"]').click();
        cy.get('[title="All Accounts"]').eq(0,{timeout:extraTimeOut}).click();
        cy.get('[title="Engagement Level"]',{timeout:extraTimeOut}).click();

        cy.xpath('(//span[text()="Run Analysis"])[2]').click();

    })

    it('TC_RE_15 - Funnel Report -  download the CSV file ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('Web')
        cy.wait(2000)
        cy.get('[title="Website Session"]').eq(0, { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Clicked"]').click();

        cy.xpath('(//h4[text()="FILTER BY"])[2]//following::span[text()="Add new"][1]').click();
        cy.wait(1000)
        cy.get('[title="All Accounts"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="In Hubspot"]').click({ force: true });
        cy.wait(1000)
        cy.get('[title="True"]').click();
        cy.xpath('//span[text()="Apply"]').click();

        cy.xpath('(//h4[text()="BREAKDOWN"])[2]//following::span[text()="Add new"]').click();
        cy.get('[title="All Accounts"]').eq(0,{timeout:extraTimeOut}).click();
        cy.get('[title="Engagement Level"]',{timeout:extraTimeOut}).click();

        cy.xpath('(//span[text()="Run Analysis"])[2]').click();

        cy.get('[id="csvLink"]').scrollIntoView().click({force:true})
        

    })

    it('TC_RE_16 - Funnel Report -  Search ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('cont')
        cy.wait(2000)
        cy.get('[title="Contact Updated"]').eq(0, { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Viewed"]').click();

        cy.xpath('(//h4[text()="BREAKDOWN"])[2]//following::span[text()="Add new"]').click();
        cy.get('[title="All Accounts"]').eq(0,{timeout:extraTimeOut}).click();
        cy.get('[title="Top Engagement Signals"]',{timeout:extraTimeOut}).click();

        cy.xpath('(//h4[text()="FUNNEL CRITERIA"])[2]//following::button[1]').click();
        cy.xpath('//a[text()="Select Month"]').click()
        cy.get('[title="2024-01"]').click();

        cy.xpath('(//span[text()="Run Analysis"])[2]').click();

        cy.xpath('//div[text()="Break-up"]').scrollIntoView();
        cy.xpath('//div[text()="Break-up"]//following::button[1]').click()
        cy.get('[placeholder="Search"]').type('Demo')

        cy.get('.ant-table-container').should('be.visible')

    })

    it ('TC_RE_17 - Funnel Report -  save ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click({ force: true });
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('cont')
        cy.wait(2000)
        cy.get('[title="Contact Updated"]').eq(0, { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Viewed"]').click();

        cy.xpath('(//h4[text()="BREAKDOWN"])[2]//following::span[text()="Add new"]').click();
        cy.get('[title="All Accounts"]').eq(0,{timeout:extraTimeOut}).click();
        cy.get('[title="Top Engagement Signals"]',{timeout:extraTimeOut}).click();

        cy.xpath('(//h4[text()="FUNNEL CRITERIA"])[2]//following::button[1]').click();
        cy.xpath('//a[text()="Select Month"]').click()
        cy.get('[title="2024-01"]').click();

        cy.xpath('(//span[text()="Run Analysis"])[2]').click();
        cy.wait(2000)
        cy.get('.mt-24',{timeout : extraTimeOut }).should('be.visible');

        cy.xpath('//span[text()="Save"]').click()
        cy.get('[placeholder="Report Name"]').type(testName)
        cy.get('[placeholder="Description (Optional)"]').type('Testing Report')
        cy.xpath('(//span[text()="Save"])[2]').click()

        cy.get('.ant-notification-notice',{timeout : extraTimeOut }).should('be.visible');
        cy.xpath('(//span[text()="Close"])[1]').click({force:true})
        cy.xpath('//h4[text()="Drafts"]').click()
        cy.xpath('//th[text()="Date"]//following::button[1]').trigger('mouseover', { force: true });
        cy.xpath('//*[text()="Delete Report"]').click();
        cy.xpath('//span[text()="Confirm"]').click()

    })

    it('TC_RE_18 - Funnel Report -  save-Dashboard ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click({ force: true });
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Funnel Report"]').click()
        cy.wait(1000)
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click({ force: true });
        cy.get('[placeholder="Search"]').type('cont')
        cy.wait(2000)
        cy.get('[title="Contact Updated"]').eq(0, { timeout: extraTimeOut }).click()
        cy.xpath('(//span[text()="Add another event"])[2]',{ timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click();
        cy.wait(1000)
        cy.get('[title="Linkedin Ad Viewed"]').click();

        cy.xpath('(//h4[text()="BREAKDOWN"])[2]//following::span[text()="Add new"]').click();
        cy.get('[title="All Accounts"]').eq(0,{timeout:extraTimeOut}).click();
        cy.get('[title="Top Engagement Signals"]',{timeout:extraTimeOut}).click();

        cy.xpath('(//h4[text()="FUNNEL CRITERIA"])[2]//following::button[1]').click();
        cy.xpath('//a[text()="Select Month"]').click()
        cy.get('[title="2024-01"]').click();

        cy.xpath('(//span[text()="Run Analysis"])[2]').click();
        cy.wait(2000)
        cy.get('.mt-24',{timeout : extraTimeOut }).should('be.visible');

        cy.xpath('//span[text()="Save"]').click()
        cy.get('[placeholder="Report Name"]').type(testName)
        cy.get('[placeholder="Description (Optional)"]').type('Testing Report')

        cy.xpath('//span[text()="Add to Dashboard"]').click();
        cy.xpath('//span[text()="Please Select"]').click()
        cy.xpath('//span[text()="Please Select"]').type('aut')
        cy.get('[title="Automation"]').click()
        cy.xpath('//h3[text()="Create New Report"]').click({ force: true })
        cy.xpath('(//span[text()="Save"])[2]').click({ force: true })


        cy.get('.ant-notification-notice',{timeout : extraTimeOut }).should('be.visible');
        cy.xpath('(//span[text()="Close"])[1]').click({force:true})
        cy.xpath('//h1[text()="Automation folder"]').click()
        cy.xpath('//h4[text()="Automation"]').click()
        cy.wait(2000)
        cy.xpath('//h4[text()="Data from"]//following::button[4]').trigger('mouseover', { force: true });
        cy.xpath('//a[text()="Delete Widget"]').click()
        cy.xpath('//span[text()="Confirm"]').click()
        cy.wait(1000)
        cy.xpath('//h4[text()="Drafts"]').click()
        cy.xpath('//th[text()="Date"]//following::button[1]').trigger('mouseover', { force: true });
        cy.xpath('//*[text()="Delete Report"]').click();
        cy.xpath('//span[text()="Confirm"]').click()

    })
})