import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Engagement Category Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('Engagement Category', () => {

        cy.wait(5000)
        methods.VisibilityofElement(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.configure)
        methods.clickElementByXPath(locators.Engagements)
        methods.VisibilityofElement(locators.Account_Pagetitle,'Engagement Scoring',extraTimeOut)
        methods.clickElementByXPath(locators.Engagement_Category)
        methods.ClearAndTypeWithXpath(locators.Hot_Input,'50')
        methods.ClearAndTypeWithXpath(locators.Warm_Input,'40')
        methods.ClearAndTypeWithXpath(locators.Cool_Input,'30')

        cy.wait(1000)
        methods.clickElementByXPath(locators.Apply_Changes1)
        methods.VisibilityofElement(locators.notification_popup,extraTimeOut)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Engagement_Category)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Reset_to_Default)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Apply_Changes1)
        methods.VisibilityofElement(locators.notification_popup,extraTimeOut)

    })
})