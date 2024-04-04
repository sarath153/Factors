import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Accounts view', () => {

        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.wait(2000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left', { timeout: extraTimeOut }).should('be.visible');

        // select account & birdview

        cy.get('.relative > .ant-btn').click();
        cy.wait(1000)
        cy.xpath('//*[@placeholder="Search Accounts"]').type('infosys.com');
        cy.wait(1000)
        cy.xpath('//*[@placeholder="Search Accounts"]').type('{enter}');
        cy.wait(1000)
        cy.xpath('(//h4[text()="lightinfosys.com"])[1]').click();
        cy.wait(1000)
        cy.get('.timeline-view', { timeout: extraTimeOut }).should('be.visible');
        cy.wait(1000)

        // expand the pageView and verify the show less visibility

        cy.get('.collapse-btn--left').click({ force: true });
        cy.wait(1000)
        // cy.xpath('(//div[text()=" Show Less"])[1]').scrollIntoView();
        // cy.wait(1000)
        // cy.xpath('(//div[text()=" Show Less"])[1]').should('be.visible');
        // cy.wait(1000)

        // contract the pageview 

        cy.get('.collapse-btn--right').click({ force: true });
        cy.wait(1000)
        cy.xpath('//*[contains(text(),"infosys")]//following::div[@class="tag"][1]').scrollIntoView();
        cy.wait(1000)
        cy.xpath('//*[contains(text(),"infosys")]//following::div[@class="tag"][1]').should('be.visible');
        cy.wait(1000)

        // event select

        cy.get('.timeline-actions__group > .ant-btn-lg').click({ force: true });
        cy.wait(1000)
        cy.xpath('//h4[text()="Company Created"]').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > .bg-gradient--44px.pb-NaN > .timeline-events').should('not.be.empty');
        cy.wait(1000)
        cy.xpath('//h4[text()="Company Created"]').click();
        cy.wait(1000)

        // user property

        cy.get('#rc-tabs-1-tab-properties > .fa-activity-filter--tabname').click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Select a User Property"]//following::div[7]').click({ force: true });
        cy.xpath('//*[text()="Date and Time"]//following::h4[2]').should('not.be.empty')
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Select a User Property"]//following::div[11]').click({ force: true });
        cy.xpath('//*[text()="Date and Time"]//following::h4[2]').should('not.be.empty')
        cy.wait(1000)

        // // left side filter

        cy.xpath('//h4[text()="Company domain"]//following::button[1]').trigger('mouseover', { force: true }).click({ force: true });
        cy.wait(1000)
        cy.xpath('//*[text()="Add property"]').click({ force: true });
        cy.wait(1000)
        cy.get('[title="Identified Companies"]').eq(0).click({ force: true });
        cy.get('[placeholder="Select Property"]').type('dom')
        cy.wait(1000)
        cy.get('[title="Company domain"]').click({force:true});
        cy.wait(1000)

        // account activity

        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({ force: true });
        cy.wait(1000)
        cy.xpath('//*[text()="Timestamp"]').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({ force: true });
        cy.wait(1000)
        cy.xpath('//*[text()="Hourly"]').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({ force: true });
        cy.wait(1000)
        cy.xpath('//*[text()="Weekly"]').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({ force: true });
        cy.wait(1000)
        cy.xpath('//*[text()="Monthly"]').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({ force: true });
        cy.wait(1000)
        cy.xpath('//*[text()="Daily"]').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.wait(1000)

        // Timeline

        cy.xpath('//*[text()="Timeline"]').click({ force: true });
        cy.wait(1000)
        cy.get('#rc-tabs-0-panel-timeline').should('to.visible');
        cy.wait(1000)

        // Overview

        cy.xpath('//*[text()="Overview"]').click({ force: true });
        cy.wait(1000)
        cy.get('.overview', { timeout: extraTimeOut }).should('to.visible');
        
    })
})