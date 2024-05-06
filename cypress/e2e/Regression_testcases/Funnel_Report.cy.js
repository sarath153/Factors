import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Funnel Report Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('TC_RE_01 - Funnel Report - New Report', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.ElementToBeClickable(locators.New_Report_CSS)
        cy.wait(1000)

    })

    it('TC_RE_02 - Funnel Report - Generate the Funnel report', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        cy.wait(1000)

    })

    it('TC_RE_03 - Funnel Report - adding multiple Event ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        cy.wait(1000)

    })

    it('TC_RE_04 - Funnel Report - Local filter ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        cy.wait(1000)

    })

    it('TC_RE_05 - Funnel Report - check the filter option is visible ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        cy.wait(1000)
        methods.VisibilityofElement(locators.Filter_By_CSS)

    })

    it('TC_RE_06 - Funnel Report - add multiple filter for one session ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        methods.MouseoverAndClick(locators.Filter_this_funnel)
        cy.wait(1000)
        methods.clickElement0(locators.Traffic_source,0)
        cy.wait(1000)
        methods.clickElement(locators.Channel_option)
        methods.clickElement(locators.others1)
        methods.clickElementByXPath(locators.Apply1)

    })

    it('TC_RE_07 - Funnel Report - the delete option works ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        methods.MouseoverAndClick(locators.Delete_this_funnel)

    })

    it('TC_RE_08, TC_RE_09 - Funnel Report - global filter more than one ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        methods.clickElementByXPath(locators.Add_New_FilterBy)
        cy.wait(1000)
        methods.clickElement0(locators.All_Account,0)
        cy.wait(1000)
        methods.clickElement(locators.In_Hubspot)
        cy.wait(1000)
        methods.clickElement(locators.true)
        methods.clickElementByXPath(locators.Apply1)

    })

    it('TC_RE_10 - Funnel Report - clicking on the + icon ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        methods.clickElementByXPath(locators.Add_New_FilterBy)
        cy.wait(1000)
        methods.clickElement0(locators.All_Account,0)
        cy.wait(1000)
        methods.clickElement(locators.In_Hubspot)
        cy.wait(1000)
        methods.clickElement(locators.true)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Plus_Button)
        methods.clickElement0(locators.All_Account,0,extraTimeOut)
        cy.wait(3000)
        methods.clickElement(locators.Visited_G2,extraTimeOut)
        methods.clickElement(locators.true,extraTimeOut)
        methods.clickElementByXPath(locators.Apply1)
        methods.assertElementContainsTextxpath(locators.Or,'or')

    })

    it('TC_RE_11 - Funnel Report - breakdown ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement0(locators.All_Account,0,extraTimeOut)
        methods.clickElement(locators.Engagement_Level,extraTimeOut)

    })

    it('TC_RE_12 - Funnel Report - criteria ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        methods.clickElementByXPath(locators.Conversion_Window)
        methods.VisibilityofElement(locators.Tooltip)
        methods.clickElementByXPath(locators.Date_select)
        methods.clickElement(locators.Hours)
        methods.clickElementByXPath(locators.Date_select)
        methods.clickElement(locators.Minutes)
        methods.clickElementByXPath(locators.Date_select)
        methods.clickElement(locators.Days)
        methods.clickElementByXPath(locators.Apply1)

    })

    it('TC_RE_13 - Funnel Report - custom range ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        methods.clickElementByXPath(locators.Conversion_Window)
        methods.VisibilityofElement(locators.Tooltip)
        methods.clickElementByXPath(locators.Date_select)
        methods.clickElement(locators.Hours)
        methods.clickElementByXPath(locators.Date_select)
        methods.clickElement(locators.Minutes)
        methods.clickElementByXPath(locators.Date_select)
        methods.clickElement(locators.Days)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.calender_MenuList)
        methods.clickElement0(locators.Menu_Item,9)
        methods.clickElementByXPath(locators.Run_Anal)

    })

    it('TC_RE_14 - Funnel Report -  KPI, filters and breakdown and run analysis ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        methods.clickElementByXPath(locators.Add_New_FilterBy)
        cy.wait(1000)
        methods.clickElement0(locators.All_Account,0)
        cy.wait(1000)
        methods.clickElement(locators.In_Hubspot)
        cy.wait(1000)
        methods.clickElement(locators.true)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement0(locators.All_Account,0,extraTimeOut)
        methods.clickElement(locators.Engagement_Level,extraTimeOut)
        methods.clickElementByXPath(locators.Run_Anal)

    })

    it('TC_RE_15 - Funnel Report -  download the CSV file ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        methods.clickElementByXPath(locators.Add_New_FilterBy)
        cy.wait(1000)
        methods.clickElement0(locators.All_Account,0)
        cy.wait(1000)
        methods.clickElement(locators.In_Hubspot)
        cy.wait(1000)
        methods.clickElement(locators.true)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement0(locators.All_Account,0,extraTimeOut)
        methods.clickElement(locators.Engagement_Level,extraTimeOut)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.ScrollAndClick(locators.CSVlink)        

    })

    it('TC_RE_16 - Funnel Report -  Search ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)

        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement0(locators.All_Account,0,extraTimeOut)
        methods.clickElement(locators.Top_Engagement_Signals,extraTimeOut)

        methods.clickElementByXPath(locators.calender_MenuList)
        methods.clickElementByXPath(locators.Select_Month)
        methods.clickElement(locators.date_choosen)

        methods.clickElementByXPath(locators.Run_Anal)
        methods.scrollWithXpath(locators.Break_up)
        methods.clickElementByXPath(locators.Breakup_Search)
        methods.typeElement(locators.search_1,'Demo')
        methods.VisibilityofElement(locators.identi_table)

    })

    it('TC_RE_17 - Funnel Report -  save ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)

        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement0(locators.All_Account,0,extraTimeOut)
        methods.clickElement(locators.Top_Engagement_Signals,extraTimeOut)

        methods.clickElementByXPath(locators.calender_MenuList)
        methods.clickElementByXPath(locators.Select_Month)
        methods.clickElement(locators.date_choosen)
        methods.clickElementByXPath(locators.Run_Anal)
        cy.wait(2000)
        methods.VisibilityofElement(locators.Attri_pageloaded,extraTimeOut)
        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name,testName)
        methods.typeElement(locators.Description_OP,'Testing Report')
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup,extraTimeOut)
        methods.clickElementByXPath(locators.Closed)
        methods.clickElementByXPath(locators.Drafts)
        methods.MouseoverWithXpath(locators.Saved_report_option)
        methods.clickElementByXPath(locators.Delete_Report)
        methods.clickElementByXPath(locators.confirm_1)
        cy.wait(2000)

    })

    it('TC_RE_18 - Funnel Report -  save-Dashboard ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts',extraTimeOut)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title,extraTimeOut)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event,extraTimeOut)
        methods.typeElement(locators.search_1,'Web')
        methods.clickElement0(locators.Website_Session,0,extraTimeOut)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements,0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)

        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement0(locators.All_Account,0,extraTimeOut)
        methods.clickElement(locators.Top_Engagement_Signals,extraTimeOut)

        methods.clickElementByXPath(locators.calender_MenuList)
        methods.clickElementByXPath(locators.Select_Month)
        methods.clickElement(locators.date_choosen)
        methods.clickElementByXPath(locators.Run_Anal)
        cy.wait(2000)
        methods.VisibilityofElement(locators.Attri_pageloaded,extraTimeOut)
        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name,testName)
        methods.typeElement(locators.Description_OP,'Testing Report')
        methods.clickElementByXPath(locators.Add_to_Dashboard)
        methods.clickElementByXPath(locators.Please_Select)
        methods.typeElementByXPath(locators.Please_Select,'aut')
        methods.clickElement(locators.Automation_1)
        methods.clickElementByXPath(locators.Create_New_Report)
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup,extraTimeOut)
        methods.clickElementByXPath(locators.Closed)
        methods.clickElementByXPath(locators.Automation_Folder)
        methods.clickElementByXPath(locators.Automate)
        cy.wait(2000)
        methods.MouseoverWithXpath(locators.Automation_Delete)
        methods.clickElementByXPath(locators.Delete_Widget)
        methods.clickElementByXPath(locators.confirm_1)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Drafts)
        methods.MouseoverWithXpath(locators.Saved_report_option)
        methods.clickElementByXPath(locators.Delete_Report)
        methods.clickElementByXPath(locators.confirm_1)
        cy.wait(2000)

    })
})