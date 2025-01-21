import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Alert Weekly Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Alert Weekly', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElementByXPath(locators.Automation)
        methods.clickElementByXPath(locators.Weekly_updates)
        methods.assertElementContainsText(locators.weekly_Updates_Title, 'Weekly updates')
        methods.VisibilityofElement(locators.identi_table)
        methods.clickElementByXPath(locators.create_new)
        methods.typeElement(locators.Alert_name, testName)
        methods.clickElementByXPath(locators.Add_a_KPI)
        methods.clickElement0(locators.Website_Session, 0)
        methods.typeElement(locators.Select_Event, "Tot")
        methods.clickElement(locators.Total_Session)
        methods.clickElement(locators.operator)
        methods.clickElementByXPath(locators.is_greater_than)
        methods.typeElement(locators.Value, '2')
        methods.clickElement(locators.Date_Range)
        methods.clickElementByXPath(locators.Monthly)
        methods.clickElementByXPath(locators.Enable_button)
        methods.clickElementByXPath(locators.Select_channel)
        methods.typeElement(locators.search_channel, 'stag')
        methods.clickElementByXPath(locators.choose_channel)
        methods.clickElementByXPath(locators.save_channel)
        methods.scrollWithXpath(locators.save2)
        methods.clickElementByXPath(locators.save2)
        methods.GetText(locators.notification_popup, "Alerts SavedNew Alerts is created and saved successfully.")
        cy.wait(Timeout.sm)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.remove_alert)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Alert successfully")
        cy.wait(Timeout.xs)
    })
})