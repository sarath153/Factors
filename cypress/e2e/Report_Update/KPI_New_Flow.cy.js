import Login1 from '../PageObjects/Login1.js';
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
        methods.typeElement(locators.search_1, 'engaged users')
        methods.clickElement(locators.engaged_User_Option)
        methods.clickElementIndexXpath(locators.filter_Funnel, 1)
        methods.typeElement(locators.search_1, 'session medium')
        methods.clickElementByXPath(locators.session_Medium_Option)


        cy.xpath(locators.account_filter).each(($option, index) => {

            if (index === 3) {
                cy.log('Skipping the 4th option');
                return;
            }

            // Click on the option
            cy.wrap($option).click();

            cy.wait(500);

        });
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementIndexXpath(locators.filter_Funnel, 1)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)

        //selecting filterBy

        methods.clickElementByXPath(locators.Add_New_FilterBy)
        methods.typeElement(locators.search_1, 'session medium')
        methods.clickElementByXPath(locators.session_Medium_Option)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)

        //clicking user name

        methods.clickElementByXPath(locators.Add_New_FilterBy)
        methods.clickElement0(locators.User_identification, 0)
        methods.typeElement(locators.search_1, 'user name')
        methods.clickElement(locators.user_Name_Option)
        methods.typeElement(locators.search_1, 'not set')
        methods.clickElementByXPath(locators.not_Set_Option)
        methods.clickElementByXPath(locators.Apply1)

        //adding breakdown

        methods.clickElementByXPath(locators.BreakDown_AddNew)
        methods.clickElementByXPath(locators.company_option)
        methods.typeElement(locators.select_property, 'company industry')
        methods.clickElement(locators.company_Industtry)

        //scroll and check the bars

        methods.clickElementByXPath(locators.run_Analysis_New)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.three_dot_create_Alias)
        methods.clickElementByXPath(locators.create_Alias)
        methods.clickElement(locators.alias_Text_Field)
        methods.typeElement(locators.alias_Text_Field, 'Testing')
        methods.clickElementByXPath(locators.create_Option)
        methods.clickElementByXPath(locators.brkdwn_Cancel)
        methods.clickElementByXPath(locators.run_Analysis_New)

        //edit the given alias

        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElement(locators.three_dot_Edit_Alias)
        methods.clickElementByXPath(locators.edit_Alias)
        methods.ClearAndType(locators.alias_Text_Field, 'testing_New')
        methods.clickElementByXPath(locators.update_Option)
        methods.clickElementByXPath(locators.run_Analysis_New)

        //to verify the alias name

        methods.assertElementContainsTextxpath(locators.alias_Name_Verify, 'testing_New')
        methods.clickElementByXPath(locators.compare)
        methods.clickElementByXPath(locators.previous_Day)
        methods.clickElementByXPath(locators.datepicker1)
        methods.clickElementByXPath(locators.cal_Selector)
        methods.clickElementByXPath(locators.datepicker2)
        methods.clickElementByXPath(locators.previous_30_Days)
        methods.clickElementByXPath(locators.chart_Arrow)
        methods.clickElementByXPath(locators.Metric)
        methods.clickElementByXPath(locators.chart_Arrow)
        methods.clickElementByXPath(locators.column)
        methods.clickElementByXPath(locators.chart_Arrow)
        methods.clickElementByXPath(locators.Line_Chart)
        methods.scrollWithXpath(locators.table_Check)
        methods.clickElementByXPath(locators.Save_1)
        methods.clickElementByXPath(locators.Add_to_Dashboard)
        methods.typeElement(locators.Report_Name, testName)
        methods.clickElementByXPath(locators.Please_Select)
        methods.typeElementByXPath(locators.select_folder, "Auto")
        methods.clickElementByXPath(locators.Automate_dashboard)
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Closed)
        methods.clickElementByXPath(locators.Automation_dashboard_Folder)
        methods.clickElementByXPath(locators.Automate)
        methods.assertElementContainsText(locators.Dashboards_Title, "Automation Dashboard")
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).click({ force: true });
        methods.clickElementByXPath(locators.Removefromthisboard)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Yes)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Drafts)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)

    })
})