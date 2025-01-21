import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Charts Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TC_RE_01_Charts - companies have been visited', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElementByXPath(locators.Add_Report_1)
        methods.clickElementByXPath(locators.Event_Report)
        methods.clickElementByXPath(locators.Add_First_Event)
        methods.typeElement(locators.search_1, 'webs')
        cy.wait(Timeout.sm)
        methods.ElementVisibleandClick(locators.web_options)
        methods.clickElementByXPath(locators.KPI_Cal)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.choose_date, 8)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Run_analysis_css)
        methods.MouseoverWithXpath(locators.Sparkline)
        methods.clickElementByXPath(locators.Line_Chart)
    })

    it('TC_RE_02_Charts - Local filters, Local break down', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElementByXPath(locators.Add_Report_1)
        methods.clickElementByXPath(locators.Event_Report)
        methods.clickElementByXPath(locators.Add_First_Event)
        methods.typeElement(locators.search_1, 'webs')
        methods.clickElement0(locators.Website_Session, 0)
        methods.MouseoverAndClick(locators.Filter_this_event)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Apply1)
        methods.MouseoverAndClick(locators.Filter_this_event)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Apply1)
        methods.MouseoverAndClick(locators.breakdown_option)
        methods.clickElementByXPath(locators.BreakDown)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.MouseoverAndClick(locators.breakdown_option)
        methods.clickElementByXPath(locators.BreakDown)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.KPI_Cal)
        methods.clickElement0(locators.choose_date, 6)
        methods.clickElement(locators.Run_analysis_css)

    })
})