import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';


describe('Segment Alert Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Segment Alert', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Automation)
        methods.VisibilityofElement(locators.identi_table)
        methods.clickElementByXPath(locators.NewAlert)
        methods.clickElementByXPath(locators.ChooseaTemplate)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Account_Executives)
        methods.clickElementByXPath(locators.SelectTemplate)
        methods.clickElementByXPath(locators.This_is_correct)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Performs_an_event)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Enter_the_segment)
        methods.scrollWithXpath(locators.Create_new_alert_title)
        methods.clickElementByXPath(locators.segment_name_2)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.In_Hubspot_text)
        methods.ClearAndType(locators.Alert_name, testName)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Enable_button)
        methods.clickElementByXPath(locators.Select_channel)
        methods.typeElement(locators.search_channel, 'stag')
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.choose_channel)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.save_channel)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.submit)
        methods.GetText(locators.notification_popup, "Alerts SavedNew Alerts is created and saved successfully.")
        cy.wait(Timeout.sm)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).click({ force: true });
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.remove_alert)
        methods.clickElementByXPath(locators.Ok)
        cy.wait(Timeout.sm)
        methods.GetText(locators.notification_popup, "SuccessDeleted Alert successfully")
        cy.wait(Timeout.xs)

    })
})