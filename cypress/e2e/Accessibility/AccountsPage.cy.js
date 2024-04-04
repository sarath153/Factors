
import envDetails from '../../fixtures/envDetails.json';
import Login from '../PageObjects/Login';
import { deviceViewport, extraTimeOut } from '../Utils';

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login();

    })

    it('Accounts Page', () => {

        //Accounts screen
        [
            { key: 'All Accounts', index: 1, url: '/' },
            // { key: 'User Profiles', index: 2, url: '/profiles/people' },
            // { key: 'Account identification', index: 3, url: '/profiles/visitor_report' },
        ].map((item) => {
            cy.wait(5000)
            cy.get('#fa-at-link--accounts', { timeout: extraTimeOut }).click();
            cy.get(`.ant-dropdown > .ant-dropdown-menu > li:nth-child(${item.index}) > span > a`).click({ force: true });
            cy.wait(1000);
            cy.url().should('eq', `${envDetails.backendApiUrl}${item.url}`);
            cy.get('#fa-at-text--page-title').should('be.visible');
            cy.get('#fa-at-text--page-title').should('have.text', item.key);
        })


    });


})