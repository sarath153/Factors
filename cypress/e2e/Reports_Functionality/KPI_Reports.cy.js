import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'
import dayjs from 'dayjs';

describe('KPI Report Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('KPI Report', () => {

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
        methods.clickElementByXPath(locators.KPI_Report)
        methods.VisibilityofElementXpath(locators.KPITOANALYSE)

        // Select KPI report & add event

        methods.clickElementByXPath(locators.Add_KPI)
        methods.Clickwithindexandvalidation(locators.Website_Session, 0)
        methods.typeElement(locators.search_1, 'tot')
        methods.clickElement0(locators.Total_Session, 0)

        // add filter

        methods.clickElementByXPath(locators.add_new_3)
        methods.typeElement(locators.search_1, 'cha')
        methods.Clickwithindexandvalidation(locators.Channel_option, 0)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)

        // select date

        methods.clickElement(locators.cal_1)
        methods.clickElement0(locators.choose_date, 7)
        methods.clickElement(locators.run_analysis_KPI)
        methods.VisibilityofElement(locators.table_validation1)
        methods.VisibilityofElement(locators.table_validation2)

        // save

        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.View_Report)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.Add_another_KPI_1)
        methods.clickElement0(locators.Website_Session, 0)
        methods.clickElementByXPath(locators.pageview_option2)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.MouseoverWithXpath(locators.Save_dropdown)
        methods.clickElementByXPath(locators.Save_as_New)
        methods.typeElement(locators.Report_Name, testName1)
        methods.typeElement(locators.Description_OP, 'Testing Purpose1')
        methods.clickElementByXPath(locators.Save_Report)
        cy.wait(Timeout.xs)
        methods.VisibilityofElement(locators.table_validation1)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElementByXPath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.xpath(`//h4[text()='${testName1}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.View_Report)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElement(locators.Add_New_Breakdown_new)
        methods.clickElement0(locators.Company_Identification, 0)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.MouseoverWithXpath(locators.Save_dropdown)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.save1)
        cy.wait(Timeout.xs)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.xpath(`//h4[text()='${testName1}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.xs)

    })

    it('KPI Report New Flow', () => {

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
        methods.clickElementByXPath(locators.KPI_Report)
        methods.VisibilityofElementXpath(locators.KPITOANALYSE)

        // Select KPI report & add event

        methods.clickElementByXPath(locators.Add_KPI)
        methods.Clickwithindexandvalidation(locators.Website_Session, 0)
        methods.typeElement(locators.search_1, 'tot')
        methods.clickElement(locators.Total_Session)

        // add filter

        methods.clickElementByXPath(locators.add_new_3)
        methods.typeElement(locators.search_1, 'cha')
        methods.Clickwithindexandvalidation(locators.Channel_option, 0)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)

        // select date

        methods.clickElement(locators.cal_1)
        methods.clickElement0(locators.choose_date, 7)
        methods.clickElement(locators.run_analysis_KPI)
        methods.VisibilityofElement(locators.table_validation1)
        methods.VisibilityofElement(locators.table_validation2)

        // save

        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Closed)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.View_Report)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.Remove_FilterBy1)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.Profile_report_gen)
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