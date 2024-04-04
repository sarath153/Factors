import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs'; 

describe('Profile Report Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('TC_RE_01 - Profile Report - New Report', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()

    })

    it('TC_RE_02 - Profile Report - Add event', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()

    })

    it('TC_RE_03 - Profile Report - Add multiple event', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Hubspot Contacts"]').click()
    })

    it('TC_RE_04 - Profile Report - Add local filter', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()
        
        cy.xpath('(//h4[text()="PROFILES TO ANALYSE"])[2]//following::button[3]').trigger('mouseover', { force: true }).click({ force: true });
        cy.get('[title="OTHERS"]').eq(0).click();
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.xpath('//span[text()="Apply"]',{timeout:extraTimeOut}).click()
        cy.xpath('(//span[text()="equals"])[2]').click()
        cy.get('.fa-select-dropdown > .flex').should('be.visible')
        cy.get('[title="equals"]').click()
    })

    it('TC_RE_05 - Profile Report - Checking global filter ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()
        
        cy.xpath('(//h4[text()="FILTER BY"])[2]//following::span[text()="Add new"][1]').should('be.visible')
    
    })

    it('TC_RE_06 - Profile Report - Add multiple local filter ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()
        
        cy.xpath('(//h4[text()="PROFILES TO ANALYSE"])[2]//following::button[3]').trigger('mouseover', { force: true }).click({ force: true });
        cy.get('[title="OTHERS"]').eq(0).click()
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.xpath('//span[text()="Apply"]',{timeout:extraTimeOut}).click()

        cy.xpath('(//h4[text()="PROFILES TO ANALYSE"])[2]//following::button[3]').trigger('mouseover', { force: true }).click({ force: true });
        cy.wait(2000)
        cy.get('[title="Page properties"]').eq(0).click({force:true})
        cy.get('[title="User Latest Page URL"]').click()
        cy.xpath('//span[text()="Clear all"]//following::div[1]').click()
        cy.xpath('//span[text()="Apply"]').click();

    })

    it('TC_RE_07 - Profile Report - Delete event ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Hubspot Contacts"]').click()

        cy.xpath('(//h4[text()="PROFILES TO ANALYSE"])[2]//following::button[4]').trigger('mouseover', { force: true }).click({ force: true });
    })

    it('TC_RE_08 - Profile Report - Add global filter ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()

        cy.xpath('(//h4[text()="FILTER BY"])[2]//following::span[text()="Add new"][1]').click();
        cy.get('[title="Traffic source"]').eq(0).click()
        cy.get('[title="User Latest Campaign"]').click()
        cy.xpath('//span[text()="Clear all"]//following::div[1]').click()
        cy.xpath('//span[text()="Apply"]').click();

    })

    it('TC_RE_09 - Profile Report - Add multiple global filter ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()

        cy.xpath('(//h4[text()="FILTER BY"])[2]//following::span[text()="Add new"][1]').click();
        cy.get('[title="Traffic source"]').eq(0).click()
        cy.get('[title="User Latest Campaign"]').click()
        cy.xpath('//span[text()="Clear all"]//following::div[1]',{timeout:extraTimeOut}).click()
        cy.xpath('//span[text()="Apply"]').click();

        cy.xpath('(//h4[text()="FILTER BY"])[2]//following::span[text()="Add new"][1]').click();
        cy.wait(2000)
        cy.get('[title="User identification"]').eq(0).click()
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('//span[text()="Clear all"]//following::div[1]',{timeout:extraTimeOut}).click()
        cy.xpath('//span[text()="Apply"]').click();

    })

    it('TC_RE_10 - Profile Report - Use + button ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()

        cy.xpath('(//h4[text()="PROFILES TO ANALYSE"])[2]//following::button[3]').trigger('mouseover', { force: true }).click({ force: true });
        cy.get('[title="OTHERS"]').eq(0).click()
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.xpath('//span[text()="Apply"]').click();

        cy.xpath('(//h4[text()="Filter by"])[2]//following::button[5]').click();
        cy.wait(2000)
        cy.get('[title="OTHERS"]').eq(0).click()
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.xpath('//span[text()="Apply"]').click();

        cy.xpath('(//h4[text()="Filter by"])[2]//following::h4[1]').should('contain','or')

    })

    it('TC_RE_11 - Profile Report - Add breakdown ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()

        cy.xpath('(//h4[text()="FILTER BY"])[2]//following::span[text()="Add new"][1]').click();
        cy.get('[title="Traffic source"]').eq(0).click()
        cy.get('[title="User Latest Campaign"]').click()
        cy.xpath('//span[text()="Clear all"]//following::div[1]').click()
        cy.xpath('//span[text()="Apply"]').click();

        cy.xpath('(//h4[text()="BREAKDOWN"])[2]//following::span[text()="Add new"][1]').click();
        cy.get('[title="OTHERS"]').eq(0).click();
        cy.xpath('//input[@placeholder="Select Property"]//following::div[3]',{timeout:extraTimeOut}).click();

        cy.xpath('(//h4[text()="BREAKDOWN"])[2]//following::span[text()="Add new"][1]').click();
        cy.get('[title="OTHERS"]').eq(0).click();
        cy.xpath('//input[@placeholder="Select Property"]//following::div[4]',{timeout:extraTimeOut}).click();

    })

    it('TC_RE_12 - Profile Report - Run analyse ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()

        cy.xpath('(//h4[text()="FILTER BY"])[2]//following::span[text()="Add new"][1]').click();
        cy.get('[title="Traffic source"]').eq(0).click()
        cy.get('[title="User Latest Campaign"]').click()
        cy.xpath('//span[text()="Clear all"]//following::div[1]').click()
        cy.xpath('//span[text()="Apply"]').click();

        cy.xpath('(//h4[text()="BREAKDOWN"])[2]//following::span[text()="Add new"][1]').click();
        cy.get('[title="OTHERS"]').eq(0).click();
        cy.xpath('//input[@placeholder="Select Property"]//following::div[3]',{timeout:extraTimeOut}).click();

        cy.xpath('(//span[text()="Run Analysis"])[2]').click()
        cy.get('.mt-12 > .justify-center',{timeout:extraTimeOut}).should('be.visible')

    })

    it('TC_RE_13 - Profile Report - Download csv ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()

        cy.xpath('(//h4[text()="FILTER BY"])[2]//following::span[text()="Add new"][1]').click();
        cy.get('[title="Traffic source"]').eq(0).click()
        cy.get('[title="User Latest Campaign"]').click()
        cy.xpath('//span[text()="Clear all"]//following::div[1]').click()
        cy.xpath('//span[text()="Apply"]').click();

        cy.xpath('(//span[text()="Run Analysis"])[2]').click()
        cy.get(':nth-child(3) > .justify-center',{timeout:extraTimeOut}).should('be.visible')
        cy.get('[id="csvLink"]').click({force:true})
       
    })

    it('TC_RE_14 - Profile Report - Search ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()

        cy.xpath('(//h4[text()="BREAKDOWN"])[2]//following::span[text()="Add new"][1]').click();
        cy.get('[title="OTHERS"]').eq(0).click()
        cy.get('[placeholder="Select Property"]').type('cou')
        cy.wait(1000)
        cy.get('[title="Country"]').click({force: true})

        cy.xpath('(//span[text()="Run Analysis"])[2]').click()

        cy.xpath('//div[text()="Break-up"]').scrollIntoView();
        cy.xpath('//div[text()="Break-up"]//following::button[1]').click()
        cy.get('[placeholder="Search"]').type('fra')

        cy.xpath('(//div[text()="Country"]//following::tbody//td)[5]').should('contain','FRANCE')
       
    })

    it('TC_RE_15 - Profile Report - Save ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()

        cy.xpath('(//h4[text()="BREAKDOWN"])[2]//following::span[text()="Add new"][1]').click();
        cy.get('[title="OTHERS"]').eq(0).click()
        cy.get('[placeholder="Select Property"]').type('cou')
        cy.wait(1000)
        cy.get('[title="Country"]').click({force: true})
        cy.xpath('(//span[text()="Run Analysis"])[2]').click()

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

    it('TC_RE_16 - Profile Report - report to the dashboard ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.get('#fa-at-btn--new-report').click()
        cy.xpath('//div[text()="Profile Report"]').click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add New"])[2]',{timeout : extraTimeOut}).click({force: true})
        cy.get('[title="Website Visitors"]').click()

        cy.xpath('(//h4[text()="BREAKDOWN"])[2]//following::span[text()="Add new"][1]').click();
        cy.get('[title="OTHERS"]').eq(0).click()
        cy.get('[placeholder="Select Property"]').type('cou')
        cy.wait(1000)
        cy.get('[title="Country"]').click({force: true})
        cy.xpath('(//span[text()="Run Analysis"])[2]').click()
        
        cy.get('.mt-24',{timeout : extraTimeOut }).should('be.visible');

        cy.xpath('//span[text()="Save"]').click()
        cy.get('[placeholder="Report Name"]').type(testName)
        cy.get('[placeholder="Description (Optional)"]').type('Testing Report')
        cy.xpath('(//span[text()="Save"])[2]').click()

        cy.xpath('//h4[contains(text(),"Reports")]//following::button[1]').trigger('mouseover', { force: true });
        cy.xpath('//*[text()="Add to Dashboard"]').click()
        cy.xpath('//span[text()="Please Select"]').click()
        cy.xpath('//span[text()="Please Select"]').type('aut')
        cy.get('[title="Automation"]').click()
        cy.xpath('//h4[text()="Add to Dashboard"]').click()
        cy.xpath('(//span[text()="Save"])[3]').click({ force: true })

        cy.get('.ant-notification-notice',{timeout : extraTimeOut }).should('be.visible');
        cy.xpath('(//span[text()="Close"])[1]').click({force:true})

        cy.xpath('//h1[text()="Automation folder"]').click()
        cy.xpath('//h4[text()="Automation"]').click()
        cy.wait(2000)
        cy.xpath('//h4[text()="Data from"]//following::button[4]').trigger('mouseover', { force: true });
        cy.xpath('//a[text()="Delete Widget"]').click()
        cy.xpath('//span[text()="Confirm"]').click()

        cy.xpath('//h4[text()="Drafts"]').click()
        cy.xpath('//th[text()="Date"]//following::button[1]').trigger('mouseover', { force: true });
        cy.xpath('//*[text()="Delete Report"]').click();
        cy.xpath('//span[text()="Confirm"]').click()

    })
    
})
