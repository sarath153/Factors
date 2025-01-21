import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Funnel compare Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Funnel compare', () => {

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(Timeout.xs)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.VisibilityofElementXpath(locators.FUNNEL)
        methods.clickElementByXPath(locators.Add_First_Event)
        methods.typeElement(locators.search_1, 'Web')
        methods.clickElement0(locators.Website_Session, 0)
        methods.clickElementByXPath(locators.Add_another_event)
        methods.clickElement0(locators.Linkedin_Company_Engagements, 0)
        methods.clickElement(locators.Linkedin_Ad_Clicked)

        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement0(locators.All_Account, 0)
        methods.clickElement(locators.Top_Engagement_Signals)

        methods.clickElementByXPath(locators.calender_MenuList)
        methods.clickElementByXPath(locators.Select_Month)
        methods.clickElementByXPath(locators.date_choosen)
        methods.clickElementByXPath(locators.Run_Anal)
        cy.wait(Timeout.md)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Compare)
        methods.clickElementByXPath(locators.Compare_to)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        cy.wait(Timeout.xs)

    })
})