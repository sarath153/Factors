import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'
import dayjs from 'dayjs';



describe('KPI new flow Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('KPI new flow', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(Timeout.sm)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.KPI_Report)
        methods.VisibilityofElementXpath(locators.KPITOANALYSE)
        methods.clickElementByXPath(locators.Add_KPI)
        methods.typeElement(locators.search_1, 'new')
        methods.Clickwithindexandvalidation(locators.NewUsers, 0)
        methods.clickElementByXPath(locators.Add_another_KPI2)
        methods.typeElement(locators.search_1, 'cou')
        methods.Clickwithindexandvalidation(locators.Count, 0)
        methods.clickElementByXPath(locators.FilterthisKPI)
        methods.typeElement(locators.search_1, 'name')
        methods.Clickwithindexandvalidation(locators.userName, 0)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.pageview_option6)
        methods.clickElementByXPath(locators.pageview_option3)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.FilterthisKPI1)
        methods.typeElement(locators.search_1, 'conti')
        methods.Clickwithindexandvalidation(locators.UserContinent, 0)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.pageview_option6)
        methods.clickElementByXPath(locators.pageview_option3)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.BreakDown_AddNew)
        methods.Clickwithindexandvalidation(locators.Properties, 0)
        methods.clickElementByXPath(locators.BreakDownProperty)
        methods.clickElementByXPath(locators.KPI_Cal1)
        methods.clickElementByXPath(locators.LastWeek)
        methods.clickElement(locators.run_analysis_KPI)
        methods.clickElementByXPath(locators.ChartCheck)
        methods.clickElementByXPath(locators.Metric)
        methods.clickElementByXPath(locators.Expand_1)
        methods.assertElementContainsTextxpath(locators.KPI1Selected, 'New Users')
        methods.assertElementContainsTextxpath(locators.FilterByName, 'User Name')
        methods.assertElementContainsTextxpath(locators.KPI2Selected, 'Count')
        methods.assertElementContainsTextxpath(locators.FilterByName1, 'User Continent')
        methods.VisibilityofElementXpath(locators.CalenderCheck)
        methods.assertElementContainsTextxpath(locators.ChartCheck, 'Metric')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Save)
        methods.clickElementByXPath(locators.Add_to_Dashboard)
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Report')
        methods.clickElementByXPath(locators.save1)
        methods.clickElementByXPath(locators.Expand_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.FilterthisKPI2)
        methods.typeElement(locators.search_1, 'post')
        methods.Clickwithindexandvalidation(locators.UserPostalCode, 0)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.pageview_option6)
        methods.clickElementByXPath(locators.pageview_option3)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_another_KPI)
        methods.typeElement(locators.search_1, 'engag')
        methods.Clickwithindexandvalidation(locators.EngagedUsers, 0)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.clickElementByXPath(locators.Expand_1)
        methods.assertElementContainsTextxpath(locators.KPI1Selected, 'New Users')
        methods.assertElementContainsTextxpath(locators.FilterByName3, 'User Name')
        methods.assertElementContainsTextxpath(locators.KPI2Selected, 'Count')
        methods.assertElementContainsTextxpath(locators.FilterByName2, 'User Continent')
        methods.assertElementContainsTextxpath(locators.KPI3Selected, 'Engaged Users')
        methods.assertElementContainsTextxpath(locators.FilterByName5, 'User Postal Code')
        methods.VisibilityofElementXpath(locators.CalenderCheck)
        methods.assertElementContainsTextxpath(locators.ChartCheck, 'Metric')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.save2)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Closed)
        methods.clickElement(locators.GlobalSearch)
        methods.typeElement(locators.InternalSearch, testName)
        methods.clickElementByXPath(locators.SelectSavedReport)
        methods.clickElementByXPath(locators.Expand_1)
        methods.assertElementContainsTextxpath(locators.KPI1Selected, 'New Users')
        methods.assertElementContainsTextxpath(locators.FilterByName3, 'User Name')
        methods.assertElementContainsTextxpath(locators.KPI2Selected, 'Count')
        methods.assertElementContainsTextxpath(locators.FilterByName2, 'User Continent')
        methods.assertElementContainsTextxpath(locators.KPI3Selected, 'Engaged Users')
        methods.assertElementContainsTextxpath(locators.FilterByName5, 'User Postal Code')
        methods.VisibilityofElementXpath(locators.CalenderCheck)
        methods.assertElementContainsTextxpath(locators.ChartCheck, 'Metric')
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Closed)
        methods.clickElementByXPath(locators.Drafts)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirmbtn)
        methods.clickElementByXPath(locators.KPIDashboard)
        cy.xpath('//h4[text()="Data from"]//following::span[1]')
            .invoke('text')
            .then((firstText) => {
                const text1 = firstText.trim();
                methods.clickElementByXPath(locators.FirstKPIReport)
                cy.xpath('(//div[@class="calendar"]//following::span)[1]')
                    .invoke('text')
                    .then((secondText) => {
                        const text2 = secondText.trim();
                        expect(text1).to.equal(text2);
                        console.log(text1)
                        console.log(text2)
                    });
            });
    })

})