import envDetails from '../../fixtures/envDetails.json';
import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('People Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })


    it('People', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const Folder = `Automation Folder ${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')

        // Search username

        cy.wait(Timeout.md)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'sarath_tdfect@factors.ai')
        methods.EnterXpath(locators.Search1)
        methods.assertElementContainsText(locators.rowname, 'sarath_tdfect@factors.ai')
        methods.clickElementByXPath(locators.filter_closebtn)

        // add column

        methods.clickElementByXPath(locators.People_download_button)
        methods.Exist(locators.DownloadCSV_Popup)
        methods.Titletextcontainsxpath(locators.download_header, 'Selects which columns to include')
        methods.ElementVisibleandClickXpath(locators.exportCSV)
        methods.NotExist(locators.DownloadCSV_Popup)

        methods.clickElementByXPath(locators.Add_column)
        methods.VisibilityofElement(locators.table_property)
        methods.clickElementByXPath(locators.CompanyCountryISOCode)
        methods.clickElementByXPath(locators.Apply1)
        methods.VisibilityofElement(locators.row_validation)
        cy.wait(Timeout.sm)

        // Add filter

        methods.clickElement(locators.filter)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.others, 0)
        methods.clickElement(locators.email_option)
        methods.clickElement(locators.true1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement0(locators.others1, 0)
        methods.clickElement(locators.login_option)
        methods.clickElementByXPath(locators.Apply_Changes)
        cy.wait(Timeout.md)
        methods.VisibilityofElement(locators.account_pageloaded)

        // Save Segment

        methods.clickElementByXPath(locators.Save_Changes)
        methods.ClickandTypeXpath(locators.segment_namefield, testName)
        methods.clickElementByXPath(locators.All_segments1)
        methods.clickElementByXPath(locators.Add_filters3)
        methods.typeElementByXPath(locators.create_newfolder, Folder)
        methods.clickElementByXPath(locators.save_newfolder)
        methods.assertElementContainsText(locators.Popup_Message, "Folder created")
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Save)
        methods.assertElementContainsText(locators.notification_popup, "Success!Segment Creation Successful")

        // open the saved segment

        methods.typeElement(locators.Search_segment, testName)
        methods.clickElementByXPath(locators.Select_segment)
        methods.VisibilityofElement(locators.account_pageloaded)

        // renaming segment

        cy.xpath(`//span[text()='${testName}']//following::span[1]`, { timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.rename_segment)
        methods.typeElementByXPath(locators.seg_rename, randomNumber)
        methods.clickElementByXPath(locators.save1)
        methods.assertElementContainsText(locators.notification_popup, "Segment renamed successfully")
        cy.wait(Timeout.sm)

        //deleting the segment

        cy.xpath(`//span[text()='${combination}']//following::span[1]`, { timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.Delete_segment)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.confirm)
        methods.assertElementContainsText(locators.notification_popup, "Segment deleted successfully")
        cy.wait(Timeout.xs)
        methods.Clear(locators.Search_segment)
        cy.xpath(`//div[text()='${Folder}']//following::button[1]`, { timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.Delete_Folder)
        cy.wait(Timeout.xs)
        methods.clickElementIndexXpath(locators.confirm_1, 1)
        methods.assertElementContainsText(locators.Popup_Message, "Folder Deleted")
        cy.wait(Timeout.xs)
    })
})