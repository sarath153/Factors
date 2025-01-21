import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
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
        Login1();

    })

    it('Funnel Report', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const testName1 = `Demo_${nowTime}_1`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(Timeout.sm)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElementByXPath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.VisibilityofElementXpath(locators.FUNNEL)
        methods.clickElementByXPath(locators.Add_First_Event)
        methods.typeElement(locators.search_1, 'Webs')
        methods.clickElement0(locators.Website_Session, 0)
        methods.clickElementByXPath(locators.Add_another_event)
        methods.clickElement0(locators.Linkedin_Company_Engagements, 0)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        methods.clickElementByXPath(locators.Add_New_FilterBy)
        methods.clickElement0(locators.All_Account, 0)
        methods.clickElement(locators.In_Hubspot1)
        methods.clickElement(locators.true)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement0(locators.All_Account, 0)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.calender_MenuList)
        methods.clickElementByXPath(locators.Select_Month)
        methods.clickElementByXPath(locators.date_choosen)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.View_Report)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElement(locators.Add_New_Breakdown_new)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.MouseoverWithXpath(locators.Save_dropdown)
        methods.clickElementByXPath(locators.Save_as_New)
        methods.typeElement(locators.Report_Name, testName1)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.Save_Report)
        cy.wait(Timeout.xs)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Closed)
        methods.clickElementByXPath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.View_Report)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.Remove_FilterBy)
        methods.clickElementByXPath(locators.Remove_Breakdown)
        methods.clickElementByXPath(locators.Run_Analysis1)
        cy.wait(Timeout.xs)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Save_1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.close_2)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.xpath(`//h4[text()='${testName1}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.xs)
    })

    it('Funnel Report New Flow', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(Timeout.sm)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElementByXPath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.VisibilityofElementXpath(locators.FUNNEL)
        methods.clickElementByXPath(locators.Add_First_Event)
        methods.typeElement(locators.search_1, 'Webs')
        methods.clickElement0(locators.Website_Session, 0)
        methods.clickElementByXPath(locators.Add_another_event)
        methods.clickElement0(locators.Linkedin_Company_Engagements, 0)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        methods.clickElementByXPath(locators.Add_New_FilterBy)
        methods.clickElement0(locators.All_Account, 0)
        methods.clickElement(locators.In_Hubspot1)
        methods.clickElement(locators.true)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement0(locators.All_Account, 0)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.calender_MenuList)
        methods.clickElementByXPath(locators.Select_Month)
        methods.clickElementByXPath(locators.date_choosen)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.View_Report)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.Remove_FilterBy)
        methods.clickElementByXPath(locators.Remove_Breakdown)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Save_1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.close_2)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.xs)

    })
})