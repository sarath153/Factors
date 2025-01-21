import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Alert Login', () => {

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

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElementByXPath(locators.Automation)
        methods.VisibilityofElement(locators.identi_table)

        // New alert

        methods.clickElementByXPath(locators.NewAlert)
        methods.clickElementByXPath(locators.StartfromScratch)
        methods.clickElement(locators.Account_click)
        methods.VisibilityofElementIndex(locators.alert_page)

        // Select event

        methods.clickElementByXPath(locators.select_event)
        methods.clickElement0(locators.Website_activity, 0)
        methods.clickElementByXPath(locators.account_filter)

        // Add filters

        methods.scroll(locators.save_css)
        methods.clickElement(locators.search_button)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElement(locators.select_Accountprop)
        methods.scroll(locators.save_css)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElement(locators.add_filter_css)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.account_filter)
        methods.typeElement(locators.search_1, 'unite')
        methods.clickElementByXPath(locators.SelectFirst)
        methods.clickElementByXPath(locators.Apply1)
        methods.scroll(locators.save_css)

        // alert name

        methods.typeElement(locators.Alert_name, testName)

        // add property

        methods.clickElement(locators.Add_property)
        methods.typeElement(locators.select_property, 'company d')
        cy.wait(Timeout.xs)
        methods.clickElement(locators.select_Accountprop)
        methods.clickElement(locators.Add_property)
        methods.typeElement(locators.select_property, 'company n')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Company_option)
        methods.clickElement(locators.Add_property)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElement(locators.select_Accountprop)
        methods.clickElement(locators.Add_property)
        methods.clickElementByXPath(locators.Filter_option2)
        methods.clickElementByXPath(locators.Filter_option2)

        // Where to get the alert

        methods.clickElementByXPath(locators.Enable_button)
        methods.clickElementByXPath(locators.Select_channel)
        methods.typeElement(locators.search_channel, 'stag')
        methods.clickElementByXPath(locators.choose_channel)
        methods.clickElementByXPath(locators.save_channel)

        // save the alert

        methods.clickElementByXPath(locators.submit)
        methods.GetText(locators.notification_popup, "Alerts SavedNew Alerts is created and saved successfully.")
        cy.wait(Timeout.sm)

        // Deleting the alert

        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).click({ force: true });
        methods.clickElementByXPath(locators.remove_alert)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        // methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)

    })
})