import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'
import dayjs from 'dayjs';

describe('global search', () => {


    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('global search', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElementByXPath(locators.global_Search)
        methods.VisibilityofElementXpath(locators.global_Popup)
        methods.clickElementByXPath(locators.ask_Factors)
        methods.ClickandTypeXpath(locators.ai_Textfield, 'Visitors having company industry as software and technology visited last week?')
        methods.EnterXpath(locators.ai_Textfield)
        cy.wait(Timeout.lg)
        methods.VisibilityofElementXpath(locators.kpi_Heading)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Expand_1)
        methods.VisibilityofElementXpath(locators.filter_By_Option)
        methods.clickElementByXPath(locators.collapse_All)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Expand_1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.BreakDown_AddNew)
        methods.clickElement0(locators.Company_Identification, 1)
        methods.typeElement(locators.select_property, "Company Name")
        methods.ScrollAndClickxpath(locators.Company_option)
        methods.clickElementByXPath(locators.BreakDown_AddNew)
        cy.wait(Timeout.sm)
        methods.clickElement0(locators.Company_Identification, 1)
        methods.clickElementByXPath(locators.BreakDownProperty)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElementXpath(locators.Graph_Details)
        methods.ScrollAndClickxpath(locators.save2)
        cy.wait(Timeout.sm)
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Closed)
        cy.wait(Timeout.sm)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElementByXPath(locators.Drafts)
        methods.VisibilityofElement(locators.Table_Body_1)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report_1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.global_Search)
        methods.ClickandTypeXpath(locators.global_Jumpto, 'create new segment')
        methods.clickElementByXPath(locators.CreateNewSegment)
        methods.clickElementByXPath(locators.create_New_Segment)
        methods.clickElementByXPath(locators.StartfromScratch)
        methods.VisibilityofElementXpath(locators.segment_Page_Heading)
    })
})