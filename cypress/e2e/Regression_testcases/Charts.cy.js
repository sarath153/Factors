import envDetails from '../../fixtures/envDetails.json';
import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('TC_RE_01_Charts - companies have been visited', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElementByXPath(locators.New_Reports)
        methods.clickElementByXPath(locators.Event_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'webs')
        cy.wait(1000)
        methods.ElementVisibleandClick(locators.web_options)
        methods.clickElement(locators.calender_css)
        cy.wait(1000)
        methods.clickElement0(locators.choose_date,8)
        cy.wait(1000)
        methods.clickElement(locators.Run_analysis_css)
        methods.MouseoverWithXpath(locators.Sparkline)
        methods.clickElementByXPath(locators.Line_Chart)
    })

    it('TC_RE_02_Charts - Local filters, Local break down', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElementByXPath(locators.New_Reports)
        methods.clickElementByXPath(locators.Event_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'webs')
        cy.wait(1000)
        methods.clickElement0(locators.Website_Session,0)

        methods.MouseoverAndClick(locators.Filter_this_event)
        methods.clickElement0(locators.session_properties,0)
        methods.typeElement(locators.search_1,'Session landing')
        methods.clickElement(locators.Session_Landing_Page_URL)
        cy.wait(1000)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(1000)
        methods.MouseoverAndClick(locators.Filter_this_event)
        cy.wait(1000)
        methods.clickElement0(locators.session_properties,0)
        cy.wait(1000)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Apply1)
        methods.MouseoverAndClick(locators.breakdown_option)
        methods.clickElementByXPath(locators.BreakDown)
        methods.clickElement0(locators.Traffic_source,0)
        methods.clickElement(locators.Channel_option)
        methods.MouseoverAndClick(locators.breakdown_option)
        methods.clickElementByXPath(locators.BreakDown)
        methods.clickElement0(locators.session_properties,0)
        methods.clickElement(locators.Session_Exit_Page_URL)
        methods.clickElement(locators.calender_css)
        cy.wait(1000)
        methods.clickElement0(locators.choose_date,6)
        methods.clickElement(locators.Run_analysis_css)

    })
})