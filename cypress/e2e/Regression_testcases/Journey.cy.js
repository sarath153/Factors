import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';

describe('Journey Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('TC_RE_01 - Journey - Path analysis ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Path Analysis"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'Path Analysis');
        cy.get(':nth-child(2) > .ant-col', { timeout: extraTimeOut }).should('be.visible');
    })

    it('TC_RE_02, TC_RE_03 - Journey - Path analysis create event ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Path Analysis"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'Path Analysis');
        cy.get(':nth-child(2) > .ant-col', { timeout: extraTimeOut }).should('be.visible');

        cy.get('.ant-col-4 > .flex > .ant-btn').click();
        cy.get('[title="Start with an event"]').eq(0).click();
        cy.xpath('//div[text()="Start with an event"]').click();
        cy.xpath('(//span[text()="Add Event"])[1]').click();
        cy.wait(2000)
        cy.get('[title="Others"]').eq(1,{timeout:extraTimeOut}).click();
        cy.wait(2000)
        cy.xpath('//input[@placeholder="Select Event"]//following::div[3]',{timeout:extraTimeOut}).click();

        cy.get('[title="All events except"]').eq(0).click();
        cy.xpath('//div[text()="All events except"]').click();
        cy.xpath('(//span[text()="Add Event"])[1]').click();
        cy.get('[title="Hubspot Companies"]').eq(1).click();
        cy.get('[title="Company Created"]').click();
    })

    it('TC_RE_04, TC_RE_05 - Journey - Path analysis create event ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Path Analysis"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'Path Analysis');
        cy.get(':nth-child(2) > .ant-col', { timeout: extraTimeOut }).should('be.visible');

        cy.get('.ant-col-4 > .flex > .ant-btn').click();
        cy.get('[title="Start with an event"]').eq(0).click();
        cy.xpath('//div[text()="Start with an event"]').click();
        cy.xpath('(//span[text()="Add Event"])[1]').click();
        cy.wait(2000)
        cy.get('[title="Others"]').eq(1,{timeout:extraTimeOut}).click();
        cy.wait(2000)
        cy.xpath('//input[@placeholder="Select Event"]//following::div[3]',{timeout:extraTimeOut}).click();

        cy.get('[title="All events except"]').eq(0).click();
        cy.xpath('//div[text()="All events except"]').click();
        cy.xpath('(//span[text()="Add Event"])[1]').click();
        cy.get('[title="Hubspot Companies"]').eq(1).click();
        cy.get('[title="Company Created"]').click();

        cy.xpath('//span[text()="Add new"]').click();
        cy.wait(1000)
        cy.get('[title="OTHERS"]').eq(0).click();
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.xpath('//span[text()="Apply"]',{timeout:extraTimeOut}).click()

        cy.xpath('//h4[text()="Show"]//following::div[2]').click();
        cy.get('div[title="4 Steps"]').click();
        cy.xpath('//span[text()="Select date range"]').click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Start date"]//following::button[4]').click({force:true})
        cy.wait(1000)
        cy.xpath('(//div[text()="2"])[1]',{timeout:extraTimeOut}).click({force:true})
        cy.xpath('(//div[text()="15"])[1]',{timeout:extraTimeOut}).click({force:true})
        cy.wait(1000)
        cy.xpath('//span[text()="Save and Build"]').click();

        cy.get('[id="basic_title"]').type(testName);
        cy.get('[id="basic_description"]').type('Testing Report');
        cy.get('button[type="submit"]').click();
        cy.get('.ant-message-notice-content', { timeout: extraTimeOut }).should('be.visible');

        cy.xpath('(//*[text()="Title"]//following::tr//td)[2]').should('contain', 'Building');
        cy.xpath('//*[text()="Title"]//following::button[1]').trigger('mouseover', { force: true });
        cy.xpath('//a[text()="Delete Report"]').click();
        cy.xpath('//span[text()="Yes"]').click();
        cy.get('.ant-message-notice-content', { timeout: extraTimeOut }).should('be.visible');

    })

    it('TC_RE_06, TC_RE_07 - Journey - Path analysis create event ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Path Analysis"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'Path Analysis');
        cy.get(':nth-child(2) > .ant-col', { timeout: extraTimeOut }).should('be.visible');

        cy.get('.ant-col-4 > .flex > .ant-btn').click();
        cy.get('[title="Start with an event"]').eq(0).click();
        cy.xpath('//div[text()="Start with an event"]').click();
        cy.xpath('(//span[text()="Add Event"])[1]').click();
        cy.wait(2000)
        cy.get('[title="Others"]').eq(1,{timeout:extraTimeOut}).click();
        cy.wait(2000)
        cy.xpath('//input[@placeholder="Select Event"]//following::div[3]',{timeout:extraTimeOut}).click();

        cy.get('[title="All events except"]').eq(0).click();
        cy.xpath('//div[text()="Only specific events"]').click();
        cy.xpath('//span[text()="Add New"]').click();
        cy.get('[title="If the event equals"]').click();
        cy.xpath('//div[text()="If the event equals"]').click();
        cy.xpath('//h4[text()="In this path, Show"]//following::input[3]').click();
        cy.xpath('//div[text()="G2 Engagements"]//following::div[2]').click();

        cy.xpath('//span[text()="Add New"]').click();
        cy.get('[title="If the event equals"]').eq(1).click();
        cy.xpath('//div[text()="If the event is of type"]').click();
        cy.xpath('//h4[text()="In this path, Show"]//following::input[5]').click();
        cy.get('[title="Page Views"]').click();

    })

    it('TC_RE_08 - Journey - Path analysis create event ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Path Analysis"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'Path Analysis');
        cy.get(':nth-child(2) > .ant-col', { timeout: extraTimeOut }).should('be.visible');

        cy.get('.ant-col-4 > .flex > .ant-btn').click();
        cy.get('[title="Start with an event"]').eq(0).click();
        cy.xpath('//div[text()="Start with an event"]').click();
        cy.xpath('(//span[text()="Add Event"])[1]').click();
        cy.wait(2000)
        cy.get('[title="Others"]').eq(1,{timeout:extraTimeOut}).click();
        cy.wait(2000)
        cy.xpath('//input[@placeholder="Select Event"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.get('[title="All events except"]').eq(0).click();
        cy.xpath('//div[text()="Only specific events"]').click();
        cy.xpath('//span[text()="Add New"]').click();
        cy.get('[title="If the event equals"]').click();
        cy.xpath('//div[text()="If the event equals"]').click();
        cy.xpath('//h4[text()="In this path, Show"]//following::input[3]').click();
        cy.xpath('//div[text()="G2 Engagements"]//following::div[1]').click({force:true});

        cy.xpath('//span[text()="Add New"]').click();
        cy.get('[title="If the event equals"]').eq(1).click();
        cy.xpath('//div[text()="If the event is of type"]').click();
        cy.xpath('//h4[text()="In this path, Show"]//following::input[5]').click();
        cy.get('[title="Page Views"]').click({force:true});

        cy.xpath('//span[text()="Add new"]').click();
        cy.wait(1000)
        cy.get('[title="OTHERS"]').eq(0).click();
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.xpath('//span[text()="Apply"]',{timeout:extraTimeOut}).click()

        cy.xpath('//h4[text()="Show"]//following::div[2]').click();
        cy.get('div[title="4 Steps"]').click();
        cy.xpath('//span[text()="Select date range"]').click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Start date"]//following::button[4]').click({force:true})
        cy.wait(1000)
        cy.xpath('(//div[text()="2"])[1]',{timeout:extraTimeOut}).click({force:true})
        cy.xpath('(//div[text()="15"])[1]',{timeout:extraTimeOut}).click({force:true})
        cy.wait(1000)
        cy.xpath('//span[text()="Save and Build"]').click();

        cy.get('[id="basic_title"]').type(testName);
        cy.get('[id="basic_description"]').type('Testing Report');
        cy.get('button[type="submit"]').click();
        cy.get('.ant-message-notice-content', { timeout: extraTimeOut }).should('be.visible');

        cy.xpath('(//*[text()="Title"]//following::tr//td)[2]').should('contain', 'Building');
        cy.xpath('//*[text()="Title"]//following::button[1]').trigger('mouseover', { force: true });
        cy.xpath('//a[text()="Delete Report"]').click();
        cy.xpath('//span[text()="Yes"]').click();
        cy.get('.ant-message-notice-content', { timeout: extraTimeOut }).should('be.visible');
        


    })

    it('TC_RE_09 - Journey - Explain ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Explain"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'Explain');
        cy.get('.ant-row > :nth-child(2)', { timeout: extraTimeOut }).should('be.visible');
    })


    it('TC_RE_10 - Journey - Explain create', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Explain"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'Explain');
        cy.get('.ant-row > :nth-child(2)', { timeout: extraTimeOut }).should('be.visible');

        cy.get('.justify-between > .ant-btn > span').click();
        cy.get('.fa-custom-datepicker > .ant-btn').click();
        cy.xpath('//a[text()="Last 7 days"]').click();

    })

    it('TC_RE_11, TC_RE_12, TC_RE_13, TC_RE_14 - Journey - Explain create  ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Explain"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'Explain');
        cy.get('.ant-row > :nth-child(2)', { timeout: extraTimeOut }).should('be.visible');

        cy.get('.justify-between > .ant-btn > span').click();
        cy.get('.fa-custom-datepicker > .ant-btn').click();
        cy.xpath('//a[text()="Last 7 days"]').click();

        cy.xpath('(//span[text()="Add Event"])[1]').click();
        cy.wait(2000)
        cy.get('[title="Others"]').eq(1,{timeout:extraTimeOut}).click();
        cy.wait(2000)
        cy.xpath('//input[@placeholder="Select Event"]//following::div[3]',{timeout:extraTimeOut}).click();

        cy.xpath('//span[text()="Add another event"]').click();
        cy.wait(1000)
        cy.get('[title="Linkedin Company Engagements"]').eq(0).click({ force: true });
        cy.get('[title="Linkedin Ad Clicked"]').click({ force: true });

        cy.xpath('//span[text()="Add Event"]').click();
        cy.wait(1000)
        cy.get('[title="Hubspot Contacts"]').eq(0).click({ force: true });
        cy.get('[title="Contact List"]').click({ force: true });

        cy.xpath('//span[text()="Save and Build"]').click();
        cy.get('[id="basic_title"]').type(testName);
        cy.get('[id="basic_description"]').type('Testing Report');
        cy.get('button[type="submit"]').click({force:true});
        cy.get('.ant-message-notice-content', { timeout: extraTimeOut }).should('be.visible');

        cy.xpath('(//*[text()="Title"]//following::tr//td)[2]').should('contain', 'Building');
        cy.xpath('//*[text()="Title"]//following::button[1]').trigger('mouseover', { force: true });
        cy.xpath('//a[text()="Delete Report"]').click();
        cy.xpath('//span[text()="Yes"]').click();
        cy.get('.ant-message-notice-content', { timeout: extraTimeOut }).should('be.visible');
    })
})