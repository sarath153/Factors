import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Event Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('Event', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.configure)
        methods.clickElementByXPath(locators.Event)
        methods.clickElementByXPath(locators.New_Event,extraTimeOut)
        methods.assertElementContainsText(locators.Event_Title,'New Custom Event',extraTimeOut)
        methods.typeElement(locators.Name,testName)
        methods.typeElement(locators.description,testName)
        methods.clickElement(locators.Source)
        methods.clickElement(locators.Hubspot,extraTimeOut)
        methods.clickElement(locators.Object_type)
        methods.clickElement(locators.Contact)
        methods.clickElement(locators.Property_name)
        methods.clickElement(locators.City,extraTimeOut)
        methods.clickElementByXPath(locators.Record_modified_time)
        methods.scrollWithXpath(locators.Save_1)
        methods.clickElementByXPath(locators.Save_1)        
        methods.VisibilityofElement(locators.Popup_Message,extraTimeOut)
        cy.wait(2000)
        methods.MouseoverWithXpath(locators.Event_option)
        methods.clickElementByXPath(locators.Remove_Event)
        methods.VisibilityofElement(locators.Popup_Message,extraTimeOut)
        cy.wait(2000)
    })
})