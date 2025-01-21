import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Property Mapping Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Property Mapping', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const testName1 = `Demo_${randomNumber}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Custom_Definitions)
        methods.clickElementByXPath(locators.PropertyMapping)
        methods.VisibilityofElementXpath(locators.Add_New_1)
        methods.clickElementByXPath(locators.Add_New_1)
        methods.assertElementContainsText(locators.Event_Title, 'Add new mapping')
        methods.typeElement(locators.PropertyMappingDisplayName, testName)
        methods.GetText(locators.AlertMsg, "Please input Display name (Only letters, numbers, and underscores are allowed)")
        methods.ClearAndType(locators.PropertyMappingDisplayName, testName1)
        methods.clickElementByXPath(locators.Add_new2)
        methods.typeElement(locators.Select_Event, "Platform")
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.UserPlatform, 0)
        methods.clickElementByXPath(locators.Add_New_1)
        methods.typeElement(locators.Select_Event, "Platform")
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.UserPlatform, 1)
        methods.clickElementByXPath(locators.Add_New_1)
        methods.typeElement(locators.Select_Event, "Platform")
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.UserPlatform, 2)
        methods.clickElementByXPath(locators.Add_New_1)
        methods.typeElement(locators.Select_Event, "Platform")
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.UserPlatform, 3)
        cy.wait(Timeout.xs)
        methods.scroll(locators.done)
        methods.clickElement(locators.done)
        methods.assertElementContainsText(locators.Popup_Message, 'Property Map added!')
        cy.wait(Timeout.xs)
        cy.xpath(`//span[text()="${testName1}"]//following::span[1]`).click({focus:true})
        methods.clickElementByXPath(locators.RemoveProperty)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        methods.assertElementContainsText(locators.Popup_Message, 'Property Map removed!')
    })
})