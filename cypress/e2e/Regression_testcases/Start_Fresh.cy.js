import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Start_Fresh_Icon', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Move folder', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const FolderName = `Master_${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.assertElementContainsTextxpath(locators.AllsegmentMenu, "All segments")
        methods.clickElementByXPath(locators.New_Segment)
        methods.clickElementByXPath(locators.StartfromScratch)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.All_Account, 0)
        methods.clickElement(locators.Visited_Website)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)
        methods.clickElementByXPath(locators.Add_event)
        methods.typeElement(locators.Select_Event, 'website session')
        methods.clickElement0(locators.Website_Session, 1)
        methods.MouseoverAndClick(locators.calender_Icon)
        methods.clickElementByXPath(locators.ninety_days)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save_segments1)
        methods.typeElement(locators.Paid_search_visitors, testName)
        methods.clickElementByXPath(locators.Save_1)
        methods.VisibilityofElement(locators.notification_popup)

        // search saved segment
        cy.wait(Timeout.md)
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.xs)
        methods.typeElement(locators.Search_segment, testName)
        methods.clickElementByXPath(locators.Select_segment)
        cy.xpath(`//span[text()="${testName}"]//following::span[1]`, { timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.moveto)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.New_folder)
        methods.ClickandType(locators.FolderNameField, FolderName)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save)
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.Popup_Message, "Segment Moved to New Folder")
        methods.Clear(locators.Search_segment)
        cy.xpath(`//div[text()="${FolderName}"]`, { timeout: extraTimeOut }).scrollIntoView();
        cy.wait(Timeout.sm)
        cy.xpath(`//span[text()="${testName}"]//following::span[1]`, { timeout: extraTimeOut }).click({ force: true })
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.delete_segment)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(Timeout.sm)
        cy.xpath(`//div[text()="${FolderName}"]//following::button[1]`, { timeout: extraTimeOut }).click({ force: true })
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Delete_Folder)
        methods.clickElementIndexXpath(locators.confirm, 0)
        cy.wait(Timeout.sm)
        methods.assertElementContainsText(locators.Popup_Message, "Folder Deleted")
        cy.wait(Timeout.sm)

    })

})