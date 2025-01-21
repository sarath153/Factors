import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Accounts Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })


    it('Accounts', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const testName1 = `Demo_QuickFilter_${nowTime}`;
        const Folder = `Automation Folder ${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

        cy.wait(Timeout.md)
        methods.scrollWithXpath(locators.Account_Pagetitle)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)

        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Filter)
        methods.GetTextXpath(locators.QuickSearchTitle, "Select from quick suggestions")
        methods.clickElement(locators.AccountOwner)
        methods.clickElementByXPath(locators.SelectValues)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElement(locators.SQLsandOpps)
        methods.clickElement(locators.VisitedPricing)
        methods.MouseoverAndClick(locators.calender_Icon)
        methods.clickElementByXPath(locators.ninety_days)
        methods.clickElementByXPath(locators.Apply_Changes)
        cy.wait(Timeout.md)
        methods.GetText(locators.PreviewInfo, "This is only a preview of this segment. Save this segment to process the full results, and come back in around 60 minutes to view the final segment.")
        methods.clickElementByXPath(locators.Save_segments1)
        methods.typeElementByXPath(locators.segment_namefield, testName1)
        methods.clickElementByXPath(locators.Save)
        methods.GetText(locators.notification_popup, "Success!Segment Creation Successful")
        cy.wait(Timeout.lg)
        methods.GetTextXpath(locators.SegmentTitle, testName1)
        cy.wait(Timeout.xs)
        cy.xpath(`//h1[text()="${testName1}"]//following::button[2]`, { timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.delete_segment)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        methods.assertElementContainsText(locators.Popup_Message,"Segment deleted successfully")

        // Search Account

        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'factors.ai')
        methods.EnterXpath(locators.search_area)
        methods.assertElementContainsTextxpath(locators.factors_File, 'factors.ai')

        // Download columns

        methods.clickElementByXPath(locators.download_button)
        methods.Exist(locators.DownloadCSV_Popup)
        methods.Titletextcontainsxpath(locators.download_header, 'Selects which columns to include')
        methods.ElementVisibleandClickXpath(locators.exportCSV)
        methods.NotExist(locators.DownloadCSV_Popup)

        // Add filter

        methods.clickElement(locators.filter)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement(locators.select_Accountprop)
        methods.clickElement(locators.Visited_Website)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)

        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement(locators.Event_performed)
        methods.clickElementByXPath(locators.select_option)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElementByXPath(locators.hubspot_Cmpny_Opt)
        methods.clickElementByXPath(locators.select_option)
        methods.clickElementByXPath(locators.Apply_Changes)

        // Save Segment

        methods.clickElementByXPath(locators.Save_segments1)
        methods.typeElementByXPath(locators.segment_namefield, testName)
        methods.clickElementByXPath(locators.All_segments1)
        methods.clickElementByXPath(locators.Add_filters3)
        methods.typeElementByXPath(locators.create_newfolder, Folder)
        methods.clickElementByXPath(locators.save_newfolder)
        methods.assertElementContainsText(locators.Popup_Message,"Folder created")
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save)
        methods.GetText(locators.notification_popup, "Success!Segment Creation Successful")

        // open the saved segment

        methods.typeElement(locators.Search_segment, testName)
        methods.clickElementByXPath(locators.Select_segment)

        // renaming segment

        cy.xpath(`//span[text()='${testName}']//following::span[1]`,{ timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.rename_segment)
        methods.typeElement(locators.segment_name, randomNumber)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Save)
        cy.wait(Timeout.md)
        methods.Titletextcontainsxpath(locators.SegmentTitle,combination)

        //deleting the segment

        cy.xpath(`//span[text()='${combination}']//following::span[1]`,{ timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.Delete_segment)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.confirm)
        methods.assertElementContainsText(locators.Popup_Message,"Segment deleted successfully")

        // add column

        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_column_1)
        methods.VisibilityofElement(locators.Table_properties)
        methods.clickElement(locators.company_name)
        methods.clickElementByXPath(locators.Apply1)
        methods.Clear(locators.Search_segment)
        cy.xpath(`//div[text()='${Folder}']//following::button[1]`,{ timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.Delete_Folder)
        cy.wait(Timeout.sm)
        methods.clickElementIndexXpath(locators.confirm_1,1)
        methods.assertElementContainsText(locators.Popup_Message,"Folder Deleted")
        cy.wait(Timeout.xs)
        
        

    })

})