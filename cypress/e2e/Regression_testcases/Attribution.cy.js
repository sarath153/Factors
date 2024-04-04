import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';

describe('Attribution Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('TC_RE_01 - Attribution - page load ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Attribution"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout : extraTimeOut}).should('contain', 'Attribution Reports');
        cy.get('#card-36000268').should('be.visible');
        cy.get('#card-36000426').should('be.visible');

    })

    it('TC_RE_02 - Attribution - page load ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Attribution"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain', 'Attribution Reports');
        cy.get('#card-36000268').should('be.visible');
        cy.get('#card-36000426').should('be.visible');

        cy.xpath('//span[text()=" Add Report"]').click();
        cy.xpath('//span[text()="Add KPI"]').click();
        cy.wait(1000)
        cy.get('[title="Users"]').eq(0).click();
        cy.get('[title="Total Sessions"]').click();
        cy.wait(1000)
        cy.xpath('//h4[text()="CONVERSION GOALS"]//following::button[2]').trigger('mouseover', { force: true }).click({ force: true });
        cy.xpath('//*[text()="Filter By"]').click({ force: true });
        cy.get('[title="Company identification"]').eq(0).click();
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.xpath('//span[text()="Apply"]',{timeout:extraTimeOut}).click()

    })

    it('TC_RE_03 - Attribution - attribution Type ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Attribution"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain', 'Attribution Reports');
        cy.get('#card-36000268').should('be.visible');
        cy.get('#card-36000426').should('be.visible');

        cy.xpath('//span[text()=" Add Report"]').click();
        cy.xpath('//span[text()="Add KPI"]').click();
        cy.wait(1000)
        cy.get('[title="Users"]').eq(0).click();
        cy.get('[title="Total Sessions"]').click();
        cy.wait(1000)
        cy.xpath('//h4[text()="CONVERSION GOALS"]//following::button[2]').trigger('mouseover', { force: true }).click({ force: true });
        cy.xpath('//*[text()="Filter By"]').click({ force: true });
        cy.get('[title="Company identification"]').eq(0).click();
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.xpath('//span[text()="Apply"]',{timeout:extraTimeOut}).click()

        cy.get('[value="Tactic"]').click();
        cy.get('[value="Offer"]').click();
        cy.get('[value="TacticOffer"]').click();

    })

    it('TC_RE_04 - Attribution - property ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Attribution"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain', 'Attribution Reports');
        cy.get('#card-36000268').should('be.visible');
        cy.get('#card-36000426').should('be.visible');

        cy.xpath('//span[text()=" Add Report"]').click();
        cy.xpath('//span[text()="Add KPI"]').click();
        cy.wait(1000)
        cy.get('[title="Users"]').eq(0).click();
        cy.get('[title="Total Sessions"]').click();
        cy.wait(1000)
        cy.xpath('//h4[text()="CONVERSION GOALS"]//following::button[2]').trigger('mouseover', { force: true }).click({ force: true });
        cy.xpath('//*[text()="Filter By"]').click({ force: true });
        cy.get('[title="Company identification"]').eq(0).click();
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('//span[text()="Apply"]',{timeout:extraTimeOut}).click()

        cy.get('[value="Tactic"]').click();
        cy.xpath('//span[text()="Add a Property"]').click();
        cy.get('[title="Campaign"]').click();


    })

    it('TC_RE_05 - Attribution - Attribution model ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Attribution"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain', 'Attribution Reports');
        cy.get('#card-36000268',{timeout:extraTimeOut}).should('be.visible');
        cy.get('#card-36000426',{timeout:extraTimeOut}).should('be.visible');
        cy.xpath('//span[text()=" Add Report"]').click();
        cy.xpath('//span[text()="Add KPI"]').click();
        cy.wait(1000)
        cy.get('[title="Users"]').eq(0).click();
        cy.get('[title="Total Sessions"]').click();
        cy.wait(1000)
        cy.xpath('//h4[text()="CONVERSION GOALS"]//following::button[2]').trigger('mouseover', { force: true }).click({ force: true });
        cy.xpath('//*[text()="Filter By"]').click({ force: true });
        cy.get('[title="Company identification"]').eq(0).click();
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.xpath('//span[text()="Apply"]',{timeout:extraTimeOut}).click()

        cy.get('[value="Tactic"]').click();
        cy.xpath('//span[text()="Add a Property"]').click();
        cy.get('[title="Campaign"]').click();

        cy.xpath('//span[text()="Add Model"]').click();
        cy.get('[title="First Touch"]').click();
        cy.xpath('//h4[text()="Attribution Model"]//following::button[2]').trigger('mouseover', { force: true }).click({ force: true });
        cy.xpath('//span[text()="Add Model"]').click();
        cy.get('[title="Last Touch"]').click();
    })

    it('TC_RE_06 - Attribution - date range ', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Attribution"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain', 'Attribution Reports');
        cy.get('#card-36000268').should('be.visible');
        cy.get('#card-36000426').should('be.visible');

        cy.xpath('//span[text()=" Add Report"]').click();
        cy.xpath('//span[text()="Add KPI"]').click();
        cy.wait(1000)
        cy.get('[title="Users"]').eq(0).click();
        cy.get('[title="Total Sessions"]').click();
        cy.wait(1000)
        cy.xpath('//h4[text()="CONVERSION GOALS"]//following::button[2]').trigger('mouseover', { force: true }).click({ force: true });
        cy.xpath('//*[text()="Filter By"]').click({ force: true });
        cy.get('[title="Company identification"]').eq(0).click();
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.xpath('//span[text()="Apply"]',{timeout:extraTimeOut}).click()

        cy.get('[value="Tactic"]').click();
        cy.xpath('//span[text()="Add a Property"]').click();
        cy.get('[title="Campaign"]').click();

        cy.xpath('//span[text()="Add Model"]').click();
        cy.get('[title="First Touch"]').click();
        cy.xpath('//h4[text()="Attribution Model"]//following::button[2]').trigger('mouseover', { force: true }).click({ force: true });
        cy.xpath('//span[text()="Add Model"]').click();
        cy.get('[title="Last Touch"]').click();

        cy.get('.AttrQueryComposer_composer__footer__X33eZ > .fa-custom-datepicker > .ant-btn').click();
        cy.xpath('//a[text()="Last 7 days"]').click();
    })

    it('TC_RE_07 - Attribution - New Attribution created', () => {

        cy.wait(5000)
        cy.get('#fa-at-text--page-title', { timeout: extraTimeOut }).should('contain', 'All Accounts');

        cy.get('#fa-at-link--journeys').trigger('mouseover', { force: true });
        cy.xpath('//h4[text()="Attribution"]').click();
        cy.wait(8000)
        cy.get('#fa-at-text--page-title',{timeout:extraTimeOut}).should('contain', 'Attribution Reports');
        cy.get('#card-36000268').should('be.visible');
        cy.get('#card-36000426').should('be.visible');

        cy.xpath('//span[text()=" Add Report"]').click();
        cy.xpath('//span[text()="Add KPI"]').click();
        cy.wait(1000)
        cy.get('[title="Users"]').eq(0).click();
        cy.get('[title="Total Sessions"]').click();
        cy.wait(1000)
        cy.xpath('//h4[text()="CONVERSION GOALS"]//following::button[2]').trigger('mouseover', { force: true }).click({ force: true });
        cy.xpath('//*[text()="Filter By"]').click({ force: true });
        cy.get('[title="Company identification"]').eq(0).click();
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.wait(1000)
        cy.xpath('//input[@placeholder="Search"]//following::div[3]',{timeout:extraTimeOut}).click();
        cy.xpath('//span[text()="Apply"]',{timeout:extraTimeOut}).click()

        cy.get('[value="Tactic"]').click();
        cy.xpath('//span[text()="Add a Property"]').click();
        cy.get('[title="Campaign"]').click();

        cy.xpath('//span[text()="Add Model"]').click();
        cy.get('[title="First Touch"]').click();
        cy.xpath('//h4[text()="Attribution Model"]//following::button[2]').trigger('mouseover', { force: true }).click({ force: true });
        cy.xpath('//span[text()="Add Model"]').click();
        cy.get('[title="Last Touch"]').click();

        cy.get('.AttrQueryComposer_composer__footer__X33eZ > .fa-custom-datepicker > .ant-btn').click();
        cy.xpath('//a[text()="Last 7 days"]').click();

        cy.xpath('//span[text()="Run Analysis"]').click();
        cy.get('.mt-24').click();
    })
})
