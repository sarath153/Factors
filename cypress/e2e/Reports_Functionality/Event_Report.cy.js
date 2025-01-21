import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'
import dayjs from 'dayjs';

describe('Event Report Login', () => {

  beforeEach(() => {

    cy.viewport(deviceViewport);

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    //login before run test
    Login1();

  })


  it('Event Report', () => {

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
    methods.clickElementByXPath(locators.Event_Report)
    methods.VisibilityofElementXpath(locators.EVENTS)

    // Select Event report & add event

    methods.clickElementByXPath(locators.Add_First_Event)
    methods.typeElement(locators.search_1, 'webs')
    methods.Clickwithindexandvalidation(locators.Website_Session, 0)

    // add filter

    methods.clickElementByXPath(locators.add_new_3)
    methods.Clickwithindexandvalidation(locators.All_Account, 0)
    methods.clickElementByXPath(locators.account_filter)
    methods.clickElementByXPath(locators.false)
    methods.clickElementByXPath(locators.Apply1)

    // Breakdown

    methods.clickElementByXPath(locators.Add_New_Breakdown)
    methods.clickElement0(locators.Linkedin_Company_Engagements, 0)
    methods.clickElementByXPath(locators.Filter_option1)

    // select date

    methods.clickElementByXPath(locators.KPI_Cal)
    methods.clickElement0(locators.choose_date, 9)
    methods.clickElement(locators.Run_analysis_css)
    methods.VisibilityofElement(locators.Profile_report_gen)

    // save

    methods.clickElementByXPath(locators.Save_1)
    methods.typeElement(locators.Report_Name, testName)
    methods.typeElement(locators.Description_OP, 'Testing Purpose')
    methods.clickElementByXPath(locators.save1);
    cy.wait(Timeout.xs)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.close_2)
    methods.VisibilityofElement(locators.Table_Body_1)
    cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
    methods.clickElementByXPath(locators.View_Report)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.Expand_1)
    methods.clickElementByXPath(locators.Add_another_event_1)
    methods.clickElement0(locators.Hubspot_Contacts, 0)
    methods.clickElementByXPath(locators.pageview_option1)
    methods.clickElementIndexXpath(locators.Run_Analysis1, 0)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.MouseoverWithXpath(locators.Save_dropdown)
    methods.clickElementByXPath(locators.Save_as_New)
    methods.typeElement(locators.Report_Name, testName1)
    methods.typeElement(locators.Description_OP, 'Testing Purpose1')
    methods.clickElementByXPath(locators.Save_3);
    cy.wait(Timeout.xs)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.Closed)
    methods.VisibilityofElement(locators.Dashboards_Title)
    methods.clickElementByXPath(locators.Drafts)
    methods.VisibilityofElement(locators.Table_Body_1)
    cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
    methods.clickElementByXPath(locators.Delete_Report_1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.confirm)
    cy.wait(Timeout.xs)
    cy.xpath(`//h4[text()='${testName1}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
    methods.clickElementByXPath(locators.View_Report)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.Expand_1)
    methods.clickElement(locators.Add_New_Breakdown_new)
    methods.clickElement0(locators.Hubspot_Companies, 0)
    methods.clickElementByXPath(locators.Filter_option1)
    methods.clickElementByXPath(locators.Run_Analysis1)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.MouseoverWithXpath(locators.Save_dropdown)
    methods.clickElementByXPath(locators.save1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Closed)
    methods.VisibilityofElement(locators.Table_Body_1)
    cy.xpath(`//h4[text()='${testName1}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
    methods.clickElementByXPath(locators.Delete_Report_1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.confirm)
    cy.wait(Timeout.xs)

  })

  it('Event Report New Flow', () => {

    const nowTime = dayjs().format('H:m:s');
    const testName = `Demo_${nowTime}`;

    cy.wait(Timeout.md)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.Mouseover(locators.report_dropdown)
    methods.clickElementByXPath(locators.Dashboards)
    cy.wait(Timeout.sm)
    methods.VisibilityofElement(locators.Dashboards_Title)
    methods.clickElementByXPath(locators.Drafts)
    methods.clickElement(locators.New_Report_CSS)
    methods.clickElementByXPath(locators.Event_Report)
    methods.VisibilityofElementXpath(locators.EVENTS)

    // Select Event report & add event

    methods.clickElementByXPath(locators.Add_First_Event)
    methods.typeElement(locators.search_1, 'webs')
    methods.Clickwithindexandvalidation(locators.Website_Session, 0)

    // add filter

    methods.clickElementByXPath(locators.add_new_3)
    methods.Clickwithindexandvalidation(locators.All_Account, 0)
    methods.clickElementByXPath(locators.account_filter)
    methods.clickElementByXPath(locators.false)
    methods.clickElementByXPath(locators.Apply1)

    // Breakdown

    methods.clickElementByXPath(locators.Add_New_Breakdown)
    methods.clickElement0(locators.Linkedin_Company_Engagements, 0)
    methods.clickElementByXPath(locators.Filter_option1)

    // select date

    methods.clickElementByXPath(locators.KPI_Cal)
    methods.clickElement0(locators.choose_date, 9)
    methods.clickElement(locators.Run_analysis_css)
    methods.VisibilityofElement(locators.Profile_report_gen)

    // save

    methods.clickElementByXPath(locators.Save_1)
    methods.typeElement(locators.Report_Name, testName)
    methods.typeElement(locators.Description_OP, 'Testing Purpose')
    methods.clickElementByXPath(locators.save1)
    cy.wait(Timeout.xs)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.close_2)
    methods.VisibilityofElement(locators.Table_Body_1)
    cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
    methods.clickElementByXPath(locators.View_Report)
    methods.VisibilityofElement(locators.Profile_report_gen)
    methods.clickElementByXPath(locators.Expand_1)
    methods.clickElementByXPath(locators.Remove_FilterBy)
    methods.clickElementByXPath(locators.Remove_Breakdown)
    methods.clickElementByXPath(locators.Run_Analysis1)
    methods.VisibilityofElement(locators.Profile_report_gen)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Save_1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.Closed)
    methods.VisibilityofElement(locators.Table_Body_1)
    cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
    methods.clickElementByXPath(locators.Delete_Report_1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.confirm)
    cy.wait(Timeout.xs)

  })
})