import Login1 from '../PageObjects/Login1';
import {deviceViewport, extraTimeOut } from '../Utils'; 
import dayjs from 'dayjs'; 

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Alert', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain','All Accounts');
        cy.wait(1000)
        cy.xpath('//h4[text()="Automations"]').click();

        // New alert

        cy.xpath('//div[text()="Create New"]').click({force:true});
        cy.wait(1000)
        cy.get('.active').click();
        cy.wait(1000)
        cy.get('.ant-form').eq(0).should('be.visible');
        cy.wait(1000)

        // Select event

        cy.xpath('//span[text()="Select Event"]').click();
        cy.wait(1000)
        cy.get('[title="Website activity"]').eq(0).click();
        cy.wait(1000)
        cy.get('[placeholder="Search"]').type('www.factors.ai/pricing');
        cy.wait(1000)
        cy.get('[title="www.factors.ai/pricing"]').click();
        cy.wait(1000)

        // Add filters

        cy.get(':nth-child(1) > :nth-child(2) > .flex > .ant-btn-primary').scrollIntoView();
        cy.wait(1000)
        cy.get('.relative > .ant-btn').click();
        cy.wait(1000)
        cy.get('[placeholder="Search"]').type('active',{force: true});
        cy.wait(1000)
        cy.get('.FaSelect_hoveredOption__Cs1tw').click();
        cy.wait(1000);
        cy.get('.FaFilterSelect_filter__1EYq7 > :nth-child(2) > .ant-btn').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(2) > .flex > .ant-btn-primary').scrollIntoView();
        cy.wait(1000)
        cy.get('[title="<"]').click();
        cy.wait(1000)
        cy.get(':nth-child(3) > div > .ant-btn').type('5'),{force: true};
        cy.wait(1000)
        cy.get('.fa--query_block--actions-cols > .relative > .ant-btn').click();
        cy.wait(1000)
        cy.get('.fa-filter-select').type('company c'),{force: true};
        cy.wait(1000)
        cy.xpath('(//div[@title="Company country"])[1]').click();
        cy.wait(1000)
        cy.get('.FaSelect_dropdown__select__1L5kx > .undefined').type('unite')
        cy.wait(1000)
        cy.get('[title="United Kingdom"]').click();
        cy.wait(1000)
        cy.get('[title="United States"]').click();
        cy.wait(1000)
        cy.xpath('//span[text()="Apply"]').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(2) > .flex > .ant-btn-primary').scrollIntoView();
        cy.wait(1000)

        // alert name

        cy.get('#alert_name').type(testName);
        cy.wait(1000)

        // add property

        cy.get('.ant-col > .ant-btn').click();
        cy.wait(1000)
        cy.get('.fa-filter-select > .ant-input-affix-wrapper').type('company d')
        cy.wait(1000)
        cy.get('.FaSelect_hoveredOption__Cs1tw').click();
        cy.wait(1000)
        cy.get('.ant-col > .ant-btn').click();
        cy.wait(1000)
        cy.get('.fa-filter-select > .ant-input-affix-wrapper').type('company n')
        cy.wait(1000)
        cy.xpath('(//div[@title="Company name"])[1]').click();
        cy.wait(1000)
        cy.get('.ant-col > .ant-btn').click();
        cy.wait(1000)
        cy.get('.fa-filter-select > .ant-input-affix-wrapper').type('active')
        cy.wait(1000)
        cy.get('.FaSelect_hoveredOption__Cs1tw').click();
        cy.wait(1000)
        cy.get('.ant-col > .ant-btn').click();
        cy.wait(1000)
        cy.get('.fa-filter-select > .ant-input-affix-wrapper').type('referrer')
        cy.wait(1000)
        cy.xpath('(//div[@title="Page Referrer URL"])[1]').click();
        cy.wait(1000)

        // Where to get the alert

        cy.xpath('(//button[@role="switch"])[1]').click();
        cy.xpath('//span[text()="Select Channel"]').click();
        cy.get('[placeholder="Select channels"]').type('stag');
        cy.xpath('//div[text()="#alert-test-staging"]//preceding::input[@type="checkbox"][1]').click();
        cy.xpath('//span[text()="Close"]//following::button').click();

        // save the alert

        cy.xpath('(//button[@type="submit"])[2]').click();
        cy.wait(1000)
        cy.get('.ant-notification-notice',{timeout:extraTimeOut}).should('be.visible');

        // Deleting the alert

        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).click({ force: true });
        cy.wait(1000)
        cy.xpath('//span[text()="Remove alert"]').click();
        cy.wait(1000)
        cy.xpath('//span[text()="OK"]').click({force:true});
        cy.wait(1000)
        cy.get('.ant-notification-notice',{timeout:extraTimeOut}).should('be.visible');

    })
})