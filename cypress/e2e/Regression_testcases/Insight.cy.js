import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';
import dayjs from 'dayjs';

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

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.AllsegmentMenu, "All segments")
        methods.clickElementByXPath(locators.All_segments)
        methods.clickElementByXPath(locators.InHubspot)
        cy.wait(Timeout.md)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElementByXPath(locators.New_Segment)
        methods.clickElementByXPath(locators.StartfromScratch)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.All_Account, 0)
        methods.clickElement(locators.In_Hubspot1)
        methods.clickElement(locators.true)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElementByXPath(locators.select_option)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Apply_filter)
        cy.wait(Timeout.lg)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElementByXPath(locators.Save_segments1)
        methods.typeElement(locators.Paid_search_visitors, testName)
        methods.clickElementByXPath(locators.Save_1)
        methods.GetText(locators.notification_popup, "Success!Segment Creation Successful")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Insight)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.List)
        cy.wait(Timeout.lg)
        cy.xpath(`//span[text()='${testName}']//following::span[1]`, { timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.Delete_segment)
        methods.clickElementByXPath(locators.confirm)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.sm)

    })

})