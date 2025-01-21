import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Accounts Segment Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })


    it('Accounts Segment', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const testName1 = `Demo Folder_${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

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
        cy.wait(Timeout.xs)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElement(locators.Apply)
        cy.wait(Timeout.xs)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElement(locators.Apply)
        methods.clickElementByXPath(locators.Add_event)
        methods.typeElement(locators.Select_Event, 'website session')
        methods.clickElement0(locators.Website_Session, 1)
        methods.MouseoverAndClick(locators.calender_Icon)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.ninety_days)
        methods.clickElementByXPath(locators.AdvancedFilters)
        methods.clickElementIndexXpath(locators.Add_new2, 1)
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.Company_Identification, 0)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElement(locators.Apply)
        cy.wait(Timeout.xs)
        methods.clickElementIndexXpath(locators.Add_new2, 1)
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.Company_Identification, 0)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElement(locators.Apply)
        methods.clickElementIndexXpath(locators.Add_new2, 1)
        cy.wait(Timeout.xs)
        methods.clickElement0(locators.Company_Identification, 0)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option6)
        methods.clickElement(locators.Apply)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Apply_filter)
        cy.wait(Timeout.lg)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElementByXPath(locators.Save_segments1)
        methods.clickElementByXPath(locators.All_segments1)
        methods.clickElementByXPath(locators.New_folder1)
        methods.typeElementByXPath(locators.create_newfolder, testName1)
        methods.clickElementByXPath(locators.save_newfolder)
        methods.typeElementByXPath(locators.segment_namefield, testName)
        methods.clickElementByXPath(locators.save_newfolder)
        methods.VisibilityofElement(locators.notification_popup1)
        methods.typeElement(locators.Search_segment, testName)
        cy.xpath(`//span[text()='${testName}']//following::span[1]`, { timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.Delete_segment1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        // methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)
        methods.Clear(locators.Search_segment)
        cy.xpath(`//div[text()='${testName1}']//following::button[1]`, { timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.Delete_Folder)
        cy.wait(Timeout.xs)
        methods.clickElementIndexXpath(locators.confirm, 1)
        methods.assertElementContainsText(locators.Popup_Message, "Folder Deleted")
        cy.wait(Timeout.sm)

    })
})