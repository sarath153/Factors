import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('TouchPoint Hubspot Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TouchPoint Hubspot', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Touchpoints)
        methods.Titletextcontains(locators.Page_title, "Touchpoint Definitions")
        methods.clickElementByXPath(locators.Hubspot_1)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.clickElementByXPath(locators.Add_New)
        methods.VisibilityofElementXpath(locators.Createatouchpointusing)
        methods.clickElementByXPath(locators.Create_a_touchpoint_using_Contact)
        methods.clickElementByXPath(locators.form_Submissions)
        methods.clickElementByXPath(locators.Add_Filter_1)
        methods.clickElement0(locators.touchpoint_Filter_Hubspot, 0)
        methods.clickElement(locators.Selete_Property_Option1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Select_Type_Property)
        methods.clickElement(locators.offer)
        methods.clickElementByXPath(locators.Select_Source_Property)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Select_Campaign_Property)
        methods.clickElementByXPath(locators.pageview_option5)
        methods.clickElementByXPath(locators.Select_Channel_Property)
        methods.clickElementByXPath(locators.pageview_option6)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.done)
        methods.clickElementByXPath(locators.Touchpoints_Metaball)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Touchpoints_Delete)

    })

})