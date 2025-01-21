import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('People view Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('People view', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.navigateToUrlPeople()
        methods.UrlValidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.VisibilityofElement(locators.account_pageloaded)

        // select account & birdview

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'sarath_tdfect@factors.ai')
        methods.EnterXpath(locators.Search1)
        methods.clickElement(locators.account_pageloaded)
        methods.VisibilityofElement(locators.View_visible)
        methods.MouseoverWithXpath(locators.people_firstvalue)
        methods.VisibilityofElement(locators.popupcard)
        methods.AssertNotEmpty(locators.popupcard)
        methods.Mouseover(locators.timestamp_validation)

        // expand the pageView and verify the show less visibility

        methods.clickElementByXPath(locators.Expand)

        // contract the pageview 

        methods.clickElementByXPath(locators.collapse)

        // event select

        methods.clickElementByXPath(locators.Birdview_option)
        methods.clickElementByXPath(locators.Login_Event)
        methods.AssertNotEmptyWithXpath(locators.people_firstvalue)
        methods.clickElementByXPath(locators.Login_Event)

        // user millistone

        methods.clickElementByXPath(locators.Milestones)
        methods.clickElementByXPath(locators.Milestones_option1)
        methods.clickElementByXPath(locators.Milestones_option2)
        methods.clickElementByXPath(locators.Milestones_option3)
        methods.VisibilityofElement(locators.notification_popup2)
        methods.clickElementByXPath(locators.Apply2)
        methods.clickElementByXPath(locators.Birdview_option)

        // left side filter

        methods.clickElementByXPath(locators.Add_Property1)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.typeElement(locators.select_property, 'Domain')
        methods.clickElement(locators.Company_domain)
        methods.clickElementByXPath(locators.Add_Property1)
        methods.clickElement0(locators.others, 0)
        methods.typeElement(locators.select_property, 'ema')
        methods.clickElement(locators.email)
        methods.clickElementByXPath(locators.Company_Domain_Delete)
        methods.clickElementByXPath(locators.Email_Delete)

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
        cy.wait(Timeout.sm)
        methods.VisibleofElement(locators.Time_line_Validation)

    })
})