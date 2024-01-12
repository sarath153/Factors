import envDetails from '../../fixtures/envDetails.json';
import Login from '../PageObjects/Login';
import {deviceViewport, extraTimeOut } from '../Utils';  

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login();

    })

    it('KPI Report', () => {

        
        cy.get('#fa-at-dropdown--projects > .flex-col',{timeout:extraTimeOut}).click();
        cy.wait(1000);

        // select project
        
        cy.get('.fa-project-list--search').type('acme');
        cy.wait(1000);
        cy.xpath('//*[text()="Acme_Staging_Demo"]').click();
        cy.get('.ant-btn-primary',{timeout:extraTimeOut}).click();
        cy.wait(2000);
        cy.visit(`${envDetails.backendApiUrl}/analyse/kpi`)

        cy.url().should('contain', `${envDetails.backendApiUrl}/analyse/kpi`);
        cy.wait(5000)

        // Select KPI report & add event

        cy.xpath('(//span[text()="Add a KPI"])[2]',{timeout:extraTimeOut}).click();
        cy.get('.FaSelect_hoveredOption__Cs1tw').should('be.visible').click();
        cy.get('.fa-filter-select > .ant-input-affix-wrapper > .ant-input').type('tot');
        cy.wait(1000)
        cy.get('[title="Total Sessions"]').click();
        cy.wait(1000)

        // add filter
        cy.xpath('(//*[text()="Add new"])[3]').click();
        cy.wait(1000)
        cy.get('.fa-filter-select > .ant-input-affix-wrapper > .ant-input').type('cha');
        cy.wait(1000);
        cy.xpath('//*[text()="Cha"]').should('be.visible').click();
        cy.wait(1000)
        // cy.get('[title="Channel"]',{timeout:extraTimeOut}).click();
        // cy.wait(1000)
        cy.get('[title="Other Campaigns"]',{timeout:extraTimeOut}).click();
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