import Login1 from '../PageObjects/Login1';
import {deviceViewport, extraTimeOut } from '../Utils';  
import envDetails from '../../fixtures/envDetails.json';  

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
        cy.visit(`${envDetails.backendApiUrl}/profiles/people`);
        cy.wait(1000)
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
        cy.wait(1000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All People');
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left',{timeout:extraTimeOut}).should('be.visible');

        // select account & birdview

        cy.get('.relative > .ant-btn').click();
        cy.wait(1000)
        cy.get('.undefined > .ant-input-affix-wrapper').type('saurabh');
        cy.wait(1000)
        cy.get('[title="saurabh.singh@webengage.com"]').click();
        cy.wait(1000)
        cy.xpath('//*[text()="Apply"]').click();
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-table-cell-fix-left').click();
        cy.wait(1000)
        cy.get('.timeline-view',{timeout:extraTimeOut}).should('be.visible');
        cy.wait(1000)
        cy.get(':nth-child(1) > .bg-gradient--120px > .timeline-events > .timeline-events__event > .tag > .inline-flex > .event-name--sm > span',{timeout:extraTimeOut}).trigger('mouseover', { force: true });
        cy.wait(1000)
        cy.get('.fa-popupcard').should('be.visible');
        cy.wait(1000)
        cy.get('.fa-popupcard').should('not.be.empty');
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').trigger('mouseout',{ force: true });
        cy.wait(1000)

        // expand the pageView and verify the show less visibility

        cy.get('.collapse-btn--left').click({ force: true });
        cy.wait(1000)
        cy.xpath('(//*[text()=" Show Less"])[1]').should('be.visible');
        cy.wait(1000)

        // contract the pageview 

        cy.get('.collapse-btn--right').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > .bg-gradient--120px > .timeline-events > .timeline-events__num').should('be.visible');
        cy.wait(1000)
        cy.get('.pb-8 > .milestone-section > .green-stripe > .text').trigger('mouseover', { force: true });
        cy.wait(1000)

        // event select

        cy.get('.timeline-actions__group > .ant-btn-lg').click();
        cy.wait(1000)
        cy.xpath('//h4[text()="Form Button Click"]').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > .bg-gradient--44px.pb-NaN > .timeline-events').should('not.be.empty');
        cy.wait(1000)
        cy.xpath('//h4[text()="Form Button Click"]').click();
        cy.wait(1000)

        // user millistone

        cy.xpath('//*[text()="Milestones"]').click();
        cy.wait(1000)
        cy.get('[style="height: 2964px; position: relative; overflow: hidden;"] > .rc-virtual-list-holder-inner > :nth-child(3)').click();
        cy.wait(1000)
        cy.get('[style="height: 2964px; position: relative; overflow: hidden;"] > .rc-virtual-list-holder-inner > :nth-child(5)').click();
        cy.wait(1000)
        cy.get('[style="height: 2964px; position: relative; overflow: hidden;"] > .rc-virtual-list-holder-inner > :nth-child(6)').click();
        cy.wait(1000)
        cy.get('.ant-notification-notice-with-icon').should('be.visible');
        cy.wait(1000)
        cy.xpath('//*[text()="Apply"]').click();
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-btn-lg').click();
        cy.wait(1000)

        // // left side filter

        cy.xpath('(//*[contains(text(),"saurabh")]//following::button)[4]').trigger('mouseover', { force: true }).click({force: true});
        cy.wait(1000)
        cy.xpath('//*[text()="Add property"]').click({force: true});
        cy.wait(1000)
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(2)').click();
        cy.wait(1000)
        cy.get('[title="Hubspot Contact Latest Source"]').click();
        cy.wait(1000)
        cy.xpath('//*[text()="Add property"]').click({force: true});
        cy.wait(1000)
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(2)').click();
        cy.wait(1000)
        cy.get('[title="Hubspot Contact Email Domain"]').click();
        cy.wait(1000)

        // account activity

        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({force: true});
        cy.wait(1000)
        cy.xpath('//*[text()="Timestamp"]').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({force: true});
        cy.wait(1000)
        cy.xpath('//*[text()="Hourly"]').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({force: true});
        cy.wait(1000)
        cy.xpath('//*[text()="Weekly"]').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({force: true});
        cy.wait(1000)
        cy.xpath('//*[text()="Monthly"]').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .timestamp').should('not.be.empty');
        cy.wait(1000)
        cy.get('.timeline-actions__group > .ant-dropdown-trigger').click({force: true});
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


    })
})