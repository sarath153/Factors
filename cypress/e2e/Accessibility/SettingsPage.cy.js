import envDetails from '../../fixtures/envDetails.json';
import Login from '../PageObjects/Login';
import {deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login();

    })

    it('Settings Page', () => {

        //settings dropdown and pages accessibility check 

        [
            { key: 'Basic Details', index: 2, url: 'general' },
            { key: 'Users and Roles', index: 3, url: 'user' },
            { key: 'Integrations', index: 5, url: 'integration' },
            { key: 'Javascript SDK', index: 6, url: 'sdk' },
            { key: 'Sharing', index: 8, url: 'sharing' },
            { key: 'Pricing', index: 10, url: 'pricing?activeTab=billing' }
        ].map((item) => {
            cy.wait(5000);
            methods.clickElement(locators.setting)
            cy.get(`.fa-at-overlay--settings > ul > li:nth-child(${item.index}) > span > a`).click({ force: true });
            cy.wait(1000)
            methods.UrlValidationset(item.url)
            if (item.key == 'Pricing') {
                methods.VisibilityofElement(locators.pricing_breadcrumb,extraTimeOut)
                methods.VisibilityofElement1(locators.billing,'Billing')
            } else {
                methods.VisibilityofElement(locators.Account_Pagetitle,extraTimeOut)
                methods.Titletextcontains(locators.Account_Pagetitle,item.key)
            }
        });

    });


})