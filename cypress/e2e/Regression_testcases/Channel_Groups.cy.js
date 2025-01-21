import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Channel Groups Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Channel Groups', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Touchpoints)
        methods.clickElementByXPath(locators.channelGroup)
        methods.VisibilityofElementIndexInput(locators.identi_table, 1)
        methods.clickElementByXPath(locators.Add_New)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.typeElement(locators.ChannelValue, testName)
        methods.clickElementByXPath(locators.Add_new2)
        methods.clickElement0(locators.session_properties, 0)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.pageview_option2)
        methods.clickElementByXPath(locators.pageview_option3)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.apply_Opt)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Save)
        methods.assertElementContainsText(locators.Popup_Message,"Channel Group added!")
        methods.VisibilityofElementIndexInput(locators.identi_table, 1)
        cy.wait(Timeout.xs)
        cy.xpath(`//span[text()="${testName}"]`).scrollIntoView();
        cy.xpath(`//span[text()="${testName}"]//following::span[1]`).click();
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.EditProperty)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.clickElementByXPath(locators.Add_new2)
        methods.clickElement0(locators.session_properties, 0)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option2)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.pageview_option2)
        methods.clickElementByXPath(locators.pageview_option3)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.apply_Opt)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Save)
        methods.assertElementContainsText(locators.Popup_Message,"Channel Group added!")
        methods.VisibilityofElementIndexInput(locators.identi_table, 1)
        cy.wait(Timeout.xs)
        cy.xpath(`//span[text()="${testName}"]`).scrollIntoView();
        cy.xpath(`//span[text()="${testName}"]//following::span[1]`).click();
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.RemoveProperty)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.Popup_Message,"Channel group removed!")

    })
})