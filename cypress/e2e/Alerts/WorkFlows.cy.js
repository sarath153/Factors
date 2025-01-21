import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import envDetails from '../../fixtures/envDetails.json';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';
import dayjs from 'dayjs';
import Login1 from '../PageObjects/Login1.js';


describe('WorkFlow Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('WorkFlow - Hubspot', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const IntegrateName = "Integrate Hubspot";

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.visit(`${envDetails.backendApiUrl}/automations/workflows`)
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.workflows_Title, 'Workflows')
        methods.VisibilityofElement(locators.identi_table)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.workflow)
        methods.clickElementByXPath(locators.Hubspot_template_Option)
        methods.clickElementByXPath(locators.Hubspot_template)
        methods.clickElementByXPath(locators.Use_this_template)
        methods.clickElementByXPath(locators.workflow_edit_icon)
        methods.ClearAndTypeWithXpath(locators.workflow_name, testName)
        methods.clickElementByXPath(locators.select_event)
        methods.clickElement0(locators.others1, 0)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Configure_Action)
        cy.xpath(`(//div[text()="${IntegrateName}"]//following::h4)[1]`, { Timeout: extraTimeOut }).should('contain', "Connected");
        methods.clickElementByXPath(locators.Configurations)
        methods.clickElementByXPath(locators.add_New_Button_Wrkflw)
        methods.ClickandTypeXpath(locators.property1, 'company name')
        methods.clickElementByXPath(locators.hubspot_Option)
        methods.typeElement(locators.SelectProperty, 'company name')
        methods.clickElement(locators.company_Name_workflow)
        methods.clickElementByXPath(locators.add_New_Button_Wrkflw)
        methods.ClickandTypeXpath(locators.property3, 'Hubspot Contact Email Domain')
        methods.clickElement(locators.Hubspot_contact_Email_domain)
        methods.ClickandType(locators.selectproperty1, 'domain')
        methods.clickElement(locators.Company_domain_name)
        methods.clickElementByXPath(locators.SaveandPublish)
        methods.GetText(locators.notification_popup, "Workflow SavedNew workflow is created and saved successfully.")
        cy.wait(Timeout.sm)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).click({ force: true });
        methods.clickElementByXPath(locators.Remove_workflow)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.xs)

    })

    it('WorkFlow - Salesforce', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const IntegrateName = "Integrate Salesforce";

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        cy.visit(`${envDetails.backendApiUrl}/automations/workflows`)
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.workflows_Title, 'Workflows')
        methods.VisibilityofElement(locators.identi_table)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.workflow)
        methods.clickElementByXPath(locators.Salesforce_template_Option)
        methods.clickElementByXPath(locators.Salesforce_template)
        methods.clickElementByXPath(locators.Use_this_template)
        methods.clickElementByXPath(locators.workflow_edit_icon1)
        methods.ClearAndTypeWithXpath(locators.workflow_name1, testName)
        methods.clickElementByXPath(locators.select_event)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Configure_Action)
        cy.xpath(`(//div[text()="${IntegrateName}"]//following::h4)[1]`, { Timeout: extraTimeOut }).should('contain', "Connected");
        methods.clickElementByXPath(locators.add_New_Button_Wrkflw)
        methods.ClickandTypeXpath(locators.property1, 'company name')
        methods.clickElementByXPath(locators.Company_option)
        cy.xpath('(//div//div//span//input)[4]').click({ force: true })
        methods.clickElement(locators.AccountName)
        methods.clickElementByXPath(locators.add_New_Button_Wrkflw)
        methods.ClickandTypeXpath(locators.property3, 'Company Domain')
        methods.clickElementByXPath(locators.company_domains_new)
        methods.clickElementByXPath(locators.property4)
        methods.clickElementByXPath(locators.BillingCity)
        methods.clickElementByXPath(locators.SaveandPublish)
        methods.GetText(locators.notification_popup, "Workflow SavedNew workflow is created and saved successfully.")
        cy.wait(Timeout.sm)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).click({ force: true });
        methods.clickElementByXPath(locators.Remove_workflow)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.xs)
    })

    it('WorkFlow - Zoho', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Zoho_Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElementByXPath(locators.Automation)
        methods.clickElementByXPath(locators.WorkFlows)
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.workflows_Title, 'Workflows')
        methods.VisibilityofElement(locators.identi_table)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.workflow)
        methods.clickElementByXPath(locators.Zoho_template_Option)
        methods.ScrollAndClickxpath(locators.Zoho_Templete)
        methods.VisibilityofElement(locators.Templete_Popup)
        methods.clickElementByXPath(locators.Use_this_template)
        methods.clickElementByXPath(locators.edit_Icon)
        methods.ClearAndTypeWithXpath(locators.Zoho_workflow_name, testName)
        methods.assertElementContainsText1(locators.PerformedEvent, "Performs an event")
        methods.clickElementByXPath(locators.select_event)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Configure_Action)
        methods.assertElementContainsText1(locators.Zoho_Connection, "Connected")
        methods.clickElementByXPath(locators.Add_new2)
        methods.clickElementByXPath(locators.Select_Property)
        methods.typeElementByXPath(locators.Select_Property, "Email")
        methods.clickElement0(locators.Selete_Property_Option, 0)
        methods.clickElementByXPath(locators.Select_Property1)
        methods.typeElementByXPath(locators.Select_Property1, "Account Name")
        methods.clickElement(locators.AccountName)
        methods.clickElementByXPath(locators.Add_new2)
        methods.clickElementByXPath(locators.Select_Property2)
        methods.typeElementByXPath(locators.Select_Property2, "Form ID")
        methods.clickElement0(locators.Selete_Property_Option1, 0)
        methods.clickElementByXPath(locators.Select_Property3)
        methods.typeElementByXPath(locators.Select_Property3, "Account Site")
        methods.clickElement(locators.AccountSite)
        methods.clickElementByXPath(locators.SaveandPublish)
        methods.GetText(locators.notification_popup, "Workflow SavedNew workflow is created and saved successfully.")
        cy.wait(Timeout.sm)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).click({ force: true });
        methods.clickElementByXPath(locators.Edit_workflow1)
        methods.clickElementByXPath(locators.Add_a_Filter)
        methods.clickElement0(locators.Hubspot_Contacts, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.SaveandPublish)
        methods.GetText(locators.notification_popup, "Workflow UpdatedWorkflow is updated and saved successfully.")
        cy.wait(Timeout.sm)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).click({ force: true });
        methods.clickElementByXPath(locators.Remove_workflow)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Cancel)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).click({ force: true });
        methods.clickElementByXPath(locators.Remove_workflow)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.GetText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.xs)

    })
})