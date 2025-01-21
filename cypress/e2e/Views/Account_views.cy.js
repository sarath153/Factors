import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Accounts view Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Accounts view', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)

        // select account & birdview

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'infosys.com')
        methods.EnterXpath(locators.search_area)
        methods.assertElementContainsText(locators.account_pageloaded, 'infosys.com')
        methods.MouseoverWithXpath(locators.open_account)
        methods.clickElementByXPath(locators.open_account)
        methods.clickElementByXPath(locators.BirdView)
        methods.VisibilityofElement(locators.View_visible)

        // expand the pageView and verify the show less visibility

        methods.clickElementByXPath(locators.Expand)

        // contract the pageview 

        methods.clickElementByXPath(locators.collapse)
        methods.scrollWithXpath(locators.First_value)
        methods.VisibilityofElementXpath(locators.First_value)

        // event select

        methods.clickElementByXPath(locators.Birdview_option)
        methods.clickElementByXPath(locators.Company_Created)
        methods.AssertNotEmpty(locators.Event_validation)
        methods.clickElementByXPath(locators.Company_Created)

        // user property

        methods.clickElement(locators.Birdview_properties)
        methods.clickElementByXPath(locators.Birdview_properties_option1)
        methods.AssertNotEmptyWithXpath(locators.property_validation)
        methods.clickElementByXPath(locators.Birdview_properties_option1)
        methods.AssertNotEmptyWithXpath(locators.property_validation)

        // // left side filter

        methods.clickElementByXPath(locators.Add_Property1)
        methods.clickElement0(locators.Company_Identification, 0)
        methods.typeElement(locators.select_property, 'dom')
        methods.clickElement(locators.Company_domain)
        methods.MouseoverAndClick(locators.Company_domain_delete)

        // account activity

        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Time_stamp)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Hourly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Weekly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Monthly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Daily)
        methods.AssertNotEmpty(locators.timestamp_validation)

        // Timeline

        methods.clickElementByXPath(locators.Time_line)
        methods.VisibleofElement(locators.Time_line_Validation)

        // Overview

        methods.clickElementByXPath(locators.Over_view)
        cy.wait(Timeout.sm)
        methods.VisibleofElement(locators.Over_view_validation)

    })
})