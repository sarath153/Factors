import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Insight custom range', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Insight custom range', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.AllsegmentMenu, "All segments")
        methods.clickElementByXPath(locators.All_segments)
        methods.clickElementByXPath(locators.In_Hubspot)
        methods.clickElementByXPath(locators.Insight)
        methods.VisibilityofElementXpath(locators.Hubspot_InsightLoad)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.Insight_customdate)
        methods.clickElementByXPath(locators.Last_Week)
        cy.wait(Timeout.lgr)
        methods.VisibilityofElementXpath(locators.Account_currently)
        methods.VisibilityofElementXpath(locators.Account_high_engagement)
        methods.VisibilityofElementXpath(locators.Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_visitor_segment)
        methods.VisibilityofElementXpath(locators.Total_PageViews);
        methods.VisibilityofElementXpath(locators.Marketing_qualified)
        methods.VisibilityofElementXpath(locators.sales_qualified)
        methods.scrollWithXpath(locators.Opportunity_Created)
        methods.VisibilityofElementXpath(locators.Opportunity_Created)
        methods.VisibilityofElementXpath(locators.Pipeline_Created)
        methods.VisibilityofElementXpath(locators.Average_Deal_Size)
        methods.VisibilityofElementXpath(locators.Revenue_Booked)
        methods.VisibilityofElementXpath(locators.Close_Rate)
        methods.VisibilityofElementXpath(locators.Avg_Sales_Cycle_Length)
        methods.clickElementByXPath(locators.Insight_customdate)
        methods.clickElementByXPath(locators.Last_Month)
        cy.wait(Timeout.lgr)
        methods.VisibilityofElementXpath(locators.Account_currently)
        methods.VisibilityofElementXpath(locators.Account_high_engagement)
        methods.VisibilityofElementXpath(locators.Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_visitor_segment)
        methods.VisibilityofElementXpath(locators.Total_PageViews);
        methods.VisibilityofElementXpath(locators.Marketing_qualified)
        methods.VisibilityofElementXpath(locators.sales_qualified)
        methods.scrollWithXpath(locators.Opportunity_Created)
        methods.VisibilityofElementXpath(locators.Opportunity_Created)
        methods.VisibilityofElementXpath(locators.Pipeline_Created)
        methods.VisibilityofElementXpath(locators.Average_Deal_Size)
        methods.VisibilityofElementXpath(locators.Revenue_Booked)
        methods.VisibilityofElementXpath(locators.Close_Rate)
        methods.VisibilityofElementXpath(locators.Avg_Sales_Cycle_Length)
        methods.clickElementByXPath(locators.Insight_customdate)
        methods.clickElementByXPath(locators.Last_Quarter)
        cy.wait(Timeout.lgr)
        methods.VisibilityofElementXpath(locators.Account_currently)
        methods.VisibilityofElementXpath(locators.Account_high_engagement)
        methods.VisibilityofElementXpath(locators.Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_visitor_segment)
        methods.VisibilityofElementXpath(locators.Total_PageViews);
        methods.VisibilityofElementXpath(locators.Marketing_qualified)
        methods.VisibilityofElementXpath(locators.sales_qualified)
        methods.scrollWithXpath(locators.Opportunity_Created)
        methods.VisibilityofElementXpath(locators.Opportunity_Created)
        methods.VisibilityofElementXpath(locators.Pipeline_Created)
        methods.VisibilityofElementXpath(locators.Average_Deal_Size)
        methods.VisibilityofElementXpath(locators.Revenue_Booked)
        methods.VisibilityofElementXpath(locators.Close_Rate)
        methods.VisibilityofElementXpath(locators.Avg_Sales_Cycle_Length)
        methods.clickElementByXPath(locators.Insight_customdate)
        methods.clickElementByXPath(locators.select_custom_range)
        methods.clickElementByXPath(locators.Preview_Month1)
        methods.clickElementByXPath(locators.Start_Date1)
        methods.clickElementByXPath(locators.End_Date1)
        cy.wait(Timeout.lgr)
        methods.VisibilityofElementXpath(locators.Account_currently)
        methods.VisibilityofElementXpath(locators.Account_high_engagement)
        methods.VisibilityofElementXpath(locators.Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_Website_sessions)
        methods.VisibilityofElementXpath(locators.Total_visitor_segment)
        methods.VisibilityofElementXpath(locators.Total_PageViews);
        methods.VisibilityofElementXpath(locators.Marketing_qualified)
        methods.VisibilityofElementXpath(locators.sales_qualified)
        methods.scrollWithXpath(locators.Opportunity_Created)
        methods.VisibilityofElementXpath(locators.Opportunity_Created)
        methods.VisibilityofElementXpath(locators.Pipeline_Created)
        methods.VisibilityofElementXpath(locators.Average_Deal_Size)
        methods.VisibilityofElementXpath(locators.Revenue_Booked)
        methods.VisibilityofElementXpath(locators.Close_Rate)
        methods.VisibilityofElementXpath(locators.Avg_Sales_Cycle_Length)
    })
})