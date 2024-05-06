import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Insight Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Insight', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.clickElementByXPath(locators.New_Segment)
        methods.clickElementByXPath(locators.Add_filter)
        cy.wait(1000)
        methods.clickElement0(locators.All_Account,0)
        methods.clickElement(locators.In_Hubspot)
        cy.wait(1000)
        methods.clickElement(locators.true)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement0(locators.Hubspot_Companies,0)
        methods.clickElementByXPath(locators.select_option)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Apply_changes_2)
        cy.wait(2000)
        methods.VisibilityofElement(locators.Table_Body,extraTimeOut)
        methods.clickElementByXPath(locators.Save_Segment_1)
        methods.typeElement(locators.Paid_search_visitors,testName)
        methods.clickElementByXPath(locators.Save_1)
        methods.VisibilityofElement(locators.notification_popup,extraTimeOut)

        methods.typeElement(locators.Search_segment,testName)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Select_segment)
        cy.wait(2000)

        methods.clickElementByXPath(locators.Insight,extraTimeOut)
        cy.wait(3000)
        methods.clickElementByXPath(locators.Account)
        methods.clickElementByXPath(locators.Threedots)
        methods.clickElementByXPath(locators.Delect_segment)
        methods.clickElementByXPath(locators.confirm)
        methods.VisibilityofElement(locators.notification_popup,extraTimeOut)
        cy.wait(3000)

    })

})