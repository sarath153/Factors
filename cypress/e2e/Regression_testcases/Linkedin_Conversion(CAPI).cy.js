import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import envDetails from '../../fixtures/envDetails.json';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';
import dayjs from 'dayjs';
import Login1 from '../PageObjects/Login1.js';

describe('Linkedin_Conversion(CAPI) Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })
    it('Linkedin_Conversion(CAPI)', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `New linkedin workflow ${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.visit(`${envDetails.backendApiUrl}/automations/workflows`)
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.workflows_Title, 'Workflows')
        methods.VisibilityofElement(locators.identi_table)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.workflow)
        methods.clickElementByXPath(locators.LinkedIn)
        methods.clickElementByXPath(locators.Linkedin_conversion)
        methods.clickElementByXPath(locators.use_this_workflow)
        methods.clickElementByXPath(locators.select_event_1)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Configure_Action)
        methods.clickElementByXPath(locators.stream_event)
        methods.clickElementByXPath(locators.test_capi)
        methods.ClickandTypeXpath(locators.First_Name, "Hubspot")
        methods.clickElementByXPath(locators.Map_user_properties_firstname)
        methods.clickElementByXPath(locators.Last_Name)
        methods.clickElementIndexXpath(locators.From_Title, 0)
        methods.clickElementByXPath(locators.Job_Tittle)
        methods.clickElementIndexXpath(locators.From_Title, 1)
        methods.clickElementByXPath(locators.Company_Name)
        methods.clickElementIndexXpath(locators.From_Title, 2)
        methods.clickElementByXPath(locators.Country_Code)
        methods.clickElementIndexXpath(locators.From_Title, 3)
        methods.clickElementByXPath(locators.untitled_workflow_icon)
        methods.ClearAndTypeWithXpath(locators.untitled_workflow, testName)
        methods.clickElementByXPath(locators.SaveandPublish)
        methods.VisibilityofElement(locators.notification_popup, "Workflow SavedNew workflow is created and saved successfully.")
        cy.wait(Timeout.sm)
        cy.xpath(`(//h4[text()='${testName}']//following::button[1])[1]`, { timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.Edit_workflow1)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.others, 1)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.SaveandPublish)
        methods.VisibilityofElement(locators.notification_popup, "Workflow UpdatedWorkflow is updated and saved successfully.")
        cy.wait(Timeout.sm)
        cy.xpath(`(//h4[text()='${testName}']//following::button[1])[1]`, { timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.remove_workflows)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.xs)
        methods.clickElement(locators.linkedin_refresh_icon)
        cy.wait(Timeout.sm)

    });

});