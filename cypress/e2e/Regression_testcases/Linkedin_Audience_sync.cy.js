import Login1 from '../PageObjects/Login1.js';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'
import dayjs from 'dayjs';

describe('Linkedin Audience sync login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();


    })

    it('To verify whther the Linkedin audience Sync has been successfully created and delete ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `New audience sync ${nowTime}`;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Adpilot)
        methods.VisibilityofElementXpath(locators.SmartReach)
        methods.clickElementByXPath(locators.Linkedin_Audience)
        methods.VisibilityofElementXpath(locators.LinkedInaudiencesync)
        methods.clickElementByXPath(locators.SyncNewAudience)
        methods.clickElementByXPath(locators.select_factors_segment)
        methods.clickElementByXPath(locators.Engaged_linkedin)
        methods.clickElementByXPath(locators.select_audiences_linkedin)
        methods.clickElementByXPath(locators.Testing_audience)
        methods.clickElementByXPath(locators.adpilot_editicon)
        methods.ClearAndTypeWithXpath(locators.edit_audience_sync, testName)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.adpilot_publish)
        methods.assertElementContainsText(locators.notification_popup, "SuccessRule Successfully Created!")
        cy.wait(Timeout.sm)
        cy.xpath(`//h4[text()="${testName}"]//following::button[1]`, { timeout: extraTimeOut }).click({force:true})
        methods.clickElementByXPath(locators.Edit_workflow)
        cy.wait(Timeout.sm)
        methods.VisibilityofElementXpath(locators.linkedin_sync_status)
        methods.clickElementByXPath(locators.adpilot_publish)
        methods.assertElementContainsText(locators.notification_popup, "SuccessRule Successfully Updated!")
        cy.wait(Timeout.xs)
        cy.xpath(`//h4[text()="${testName}"]//following::button[1]`, { timeout: extraTimeOut }).click({force:true})
        methods.clickElementByXPath(locators.remove_workflows)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Ok)
        methods.assertElementContainsText(locators.notification_popup, "SuccessDeleted Workflow successfully")
        cy.wait(Timeout.sm)
        methods.clickElement1(locators.linkedin_refresh_icon)
    })
})