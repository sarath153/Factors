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

    it('KPI Report', () => {


        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');
        cy.visit(`${envDetails.backendApiUrl}/analyse/kpi`)

        cy.url().should('contain', `${envDetails.backendApiUrl}/analyse/kpi`);
        cy.wait(5000)

        // Select KPI report & add event

        cy.xpath('(//span[text()="Add a KPI"])[2]', { timeout: extraTimeOut }).click();
        cy.get('.FaSelect_hoveredOption__Cs1tw').should('be.visible').click();
        cy.get('.fa-filter-select > .ant-input-affix-wrapper > .ant-input').type('tot');
        cy.wait(1000)
        cy.xpath('(//div[@title="Total Sessions"])[1]').click({ force: true });
        cy.wait(1000)

        // add filter
        cy.xpath('(//*[text()="Add new"])[3]').click();
        cy.wait(1000)
        cy.get('.fa-filter-select > .ant-input-affix-wrapper > .ant-input').type('cha');
        cy.wait(2000);
        cy.get('[title="Channel"]').eq(0).should('be.visible').click();
        cy.wait(4000)
        cy.get('[title="Others"]', { timeout: extraTimeOut }).click();
        cy.wait(1000)
        cy.get('.fa-select--buttons > .ant-btn').click();

        // select date

        cy.get('.query_card_open-add > :nth-child(1) > .KPIComposer_composer_footer__2DZvK > .fa-custom-datepicker > .ant-btn').click();
        cy.wait(1000)
        cy.get('[data-menu-id]').eq(7).click();
        cy.wait(1000)
        cy.get('.query_card_open-add > :nth-child(1) > .KPIComposer_composer_footer__2DZvK > .ant-btn-primary > span').click();

        cy.get('tbody.ant-table-tbody > tr:nth-child(2) > td:nth-child(1)').should('be.visible');

        cy.get('tbody.ant-table-tbody > tr:nth-child(3) > td:nth-child(1)').should('be.visible');

    })


})