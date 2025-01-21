import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Campaign Groups Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Campaign Groups', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;
        const valuename = `Test_${randomNumber}`

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Touchpoints)
        methods.clickElementByXPath(locators.CampaignGroups)
        methods.VisibilityofElementXpath(locators.Add_New)
        methods.clickElementByXPath(locators.Add_New)
        methods.VisibilityofElementXpath(locators.CampaignTitle)
        methods.typeElement(locators.Name, testName)
        methods.typeElement(locators.description, "Testing Purpose")
        methods.clickElementByXPath(locators.New_value_1)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.typeElement(locators.ValueName, valuename)
        methods.clickElementByXPath(locators.New_Filter)
        methods.clickElementByXPath(locators.NewSelectProperty)
        methods.clickElement(locators.NameOption)
        methods.clickElementByXPath(locators.Filtervalue)
        methods.typeElementByXPath(locators.Filtervalue, "30")
        methods.clickElementByXPath(locators.save1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.save2)
        methods.assertElementContainsText(locators.notification_popup, "SuccessCustom Dimension rules created successfully")
        methods.clickElementByXPath(locators.Cancel)
        cy.wait(Timeout.sm)
        cy.xpath(`//span[text()="${testName}"]//following::span[2]`).click({ Force: true })
        methods.clickElementByXPath(locators.EditProperty1)
        methods.assertElementContainsTextxpath(locators.CampaignNameVerify, testName)
        cy.xpath(`//span[text()="${valuename}"]//following::span[5]`).click({ Force: true })
        methods.clickElementByXPath(locators.Edit_workflow)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.clickElementByXPath(locators.New_Filter)
        methods.clickElementByXPath(locators.NewSelectProperty)
        methods.clickElement(locators.NameOption)
        methods.clickElementByXPath(locators.Filtervalue1)
        methods.typeElementByXPath(locators.Filtervalue1, "97")
        methods.clickElementByXPath(locators.save2)
        methods.assertElementContainsText(locators.notification_popup, "SuccessCustom Dimension rules updated successfully")
        methods.clickElementByXPath(locators.Cancel)
        cy.wait(Timeout.sm)
        cy.xpath(`//span[text()="${testName}"]//following::span[2]`).click({ Force: true })
        methods.clickElementByXPath(locators.RemoveProperty1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDeleted property successfully")

    })
})