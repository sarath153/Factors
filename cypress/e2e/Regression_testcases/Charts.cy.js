import envDetails from '../../fixtures/envDetails.json';
import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('TC_RE_01_Charts - companies have been visited', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.xpath('//div[text()="New Reports"]').click();
        cy.xpath('//div[text()="Event Report"]').click();
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('.fa-filter-select > .ant-input-affix-wrapper > .ant-input').type('web');
        cy.wait(1000)
        cy.get(':nth-child(2) > .flex-row > :nth-child(2) > .ant-typography').should('be.visible').click();
        cy.get('.query_card_open-add > :nth-child(1) > .QueryComposer_composer_footer__LVpKT > .fa-custom-datepicker > .ant-btn').click();
        cy.wait(1000)
        cy.get('[data-menu-id]').eq(8).click();
        cy.wait(1000)
        cy.get('.query_card_open-add > :nth-child(1) > .QueryComposer_composer_footer__LVpKT > .ant-btn-primary').click();
        cy.xpath('//span[text()="Sparkline"]').trigger('mouseover', { force: true });
        cy.xpath('//h1[text()="Line Chart"]').click({ force: true })

    })

    it('TC_RE_02_Charts - Local filters, Local break down', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--dashboard-title', { timeout: extraTimeOut }).should('be.visible');
        cy.xpath('//div[text()="New Reports"]', { timeout: extraTimeOut }).click();
        cy.xpath('//div[text()="Event Report"]').click();
        cy.xpath('(//span[text()="Add First Event"])[2]', { timeout: extraTimeOut }).click();
        cy.get('[placeholder="Search"]').type('webs');
        cy.wait(1000)
        cy.get('[title="Website Session"]').eq(0).should('be.visible').click();

        cy.xpath('(//h4[text()="EVENTS"])[2]//following::button[3]').trigger('mouseover', { force: true }).click({ force: true });
        cy.get('[title="Session properties"]').eq(0).click();
        cy.get('[placeholder="Search"]').type('Session landing');
        cy.get('[title="Session Landing Page URL"]').click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]').click({force:true});
        cy.wait(1000)
        cy.xpath('//span[text()="Apply"]').click();
        cy.wait(1000)
        cy.xpath('(//h4[text()="EVENTS"])[2]//following::button[3]').trigger('mouseover', { force: true }).click({ force: true });
        cy.wait(1000)
        cy.get('[title="Session properties"]').eq(0).click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]').click({force:true});
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]').click({force:true});
        cy.wait(1000)
        cy.xpath('//span[text()="Apply"]').click();
        cy.xpath('(//h4[text()="EVENTS"])[2]//following::button[2]').trigger('mouseover', { force: true }).click({ force: true });
        cy.xpath('//span[text()="Breakdown"]').click();
        cy.get('[title="Traffic source"]').eq(0).click();
        cy.get('[title="Channel"]').click();
        cy.xpath('(//h4[text()="EVENTS"])[2]//following::button[2]').trigger('mouseover', { force: true }).click({ force: true });
        cy.xpath('//span[text()="Breakdown"]').click();
        cy.get('[title="Session properties"]').eq(0).click();
        cy.get('[title="Session Exit Page URL"]').click();
        cy.get('.query_card_open-add > :nth-child(1) > .QueryComposer_composer_footer__LVpKT > .fa-custom-datepicker > .ant-btn').click();
        cy.wait(1000)
        cy.get('[data-menu-id]').eq(6).click();
        cy.get('.query_card_open-add > :nth-child(1) > .QueryComposer_composer_footer__LVpKT > .ant-btn-primary').click();

    })
})