import envDetails from '../../fixtures/envDetails.json';
import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Peoples Regression', () => {

    beforeEach(() => {


        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TC_RE_01 - Peoples_Page Load', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(Timeout.xs)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.VisibilityofElement(locators.account_pageloaded)

    })

    it('TC_RE_02, TC_RE_03 - Peoples_Page filter', () => {
        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(Timeout.xs)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.filter)
        cy.wait(Timeout.sm)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement0(locators.others1, 0)
        methods.clickElement(locators.login_option)
        methods.clickElementByXPath(locators.Apply_Changes)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Save_Changes)
        methods.ClearAndTypeWithXpath(locators.save_field, testName)
        methods.clickElementByXPath(locators.Save)
        cy.wait(Timeout.md)
        methods.clickElementByXPath(locators.All_segments)
        cy.xpath(`//span[text()="${testName}"]//following::span[1]`, { timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.Delete_segment1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)

    })

    it.skip('TC_RE_04 - Peoples_Filter clear', () => {
        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        cy.wait(Timeout.xl)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(Timeout.lg)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.clickElement(locators.filter)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_filter1)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_event)
        // methods.clickElement0(locators.others1, 0)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElementByXPath(locators.select_event1)
        methods.clickElementByXPath(locators.Apply_Changes)
        cy.wait(Timeout.lg)
        methods.ClearAndTypeWithXpath(locators.save_field, testName)
        methods.clickElementByXPath(locators.Save)
        // methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.lg)
        methods.clickElement(locators.view_filter)
        methods.clickElementByXPath(locators.Clear_All_Filter)
        // methods.clickElement(locators.Hide_Filter)
        cy.get('.justify-center > span').click({ force: true })
    })

    it.skip('TC_RE_05 - Peoples_discard changes', () => {

        cy.wait(Timeout.xl)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(Timeout.lg)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.clickElement(locators.filter)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_filter1)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.not_Set)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_event)
        // methods.clickElement0(locators.others1, 0)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElementByXPath(locators.select_event1)

    })

    it('TC_RE_06, TC_RE_07 - People_Search field ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')

        // Search username
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'sarath')
        methods.EnterXpath(locators.Search1)
        cy.wait(Timeout.xs)
        methods.assertElementContainsText(locators.rowname, 'sarath_tdfect@factors.ai')
        methods.clickElementByXPath(locators.clear_search)
    })

    it('TC_RE_08, TC_RE_09, TC_RE_10, TC_RE_11 - People_New Segment, search, rename and delete ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.clickElementByXPath(locators.New_Segment)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        methods.clickElementByXPath(locators.select_event1)
        methods.clickElementByXPath(locators.Apply_Changes)
        cy.wait(Timeout.xl)
        methods.clickElementByXPath(locators.Save_Changes)
        methods.ClickandType(locators.segment_name, testName)
        methods.clickElementByXPath(locators.Save)
        cy.wait(Timeout.sm)
        methods.VisibilityofElement(locators.notification_popup)

        // open the saved segment

        methods.typeElement(locators.Search_segment, testName)
        methods.clickElementByXPath(locators.Saved_segment)
        methods.Titletextcontainsxpath(`//h3[.='${testName}']`, testName)
        // renaming segment

        cy.xpath('//div[@class="FolderStructure_folder_item_actions__3tUoG"]').click()
        cy.wait(Timeout.sm)
        cy.xpath('//div[@class="ant-popover-inner-content"]//div[@class="FolderStructure_popover_list__3XG-n"][2]').click({ force: true });

        methods.typeElementByXPath(locators.seg_rename, randomNumber)
        methods.clickElementByXPath(locators.save1)
        methods.Titletextcontainsxpath(`//h3[.='${combination}']`, combination)
        methods.VisibilityofElement(locators.notification_popup)

        //deleting the segment

        cy.xpath(`//span[text()='${combination}']//following::span[1]`).click()
        cy.wait(Timeout.lg)
        methods.clickElementByXPath(locators.Delete_segment)
        methods.clickElementByXPath(locators.confirm)
        methods.VisibilityofElement(locators.notification_popup1)

    })

    it('TC_RE_12, TC_RE_13 - People_Brid views ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(Timeout.lg)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.VisibilityofElement(locators.account_pageloaded)

        // select account & birdview

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'sarath_tdfect@factors.ai')
        methods.EnterXpath(locators.Search1)
        cy.wait(Timeout.xl)
        methods.clickElement(locators.account_pageloaded)
        methods.VisibilityofElement(locators.View_visible)

    })

    it('TC_RE_14 - People_Birdviews expand ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(Timeout.lg)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.VisibilityofElement(locators.account_pageloaded)

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'sarath_tdfect@factors.ai')
        methods.EnterXpath(locators.Search1)
        methods.clickElement(locators.account_pageloaded)
        methods.VisibilityofElement(locators.View_visible)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Expand)
    })

    it('TC_RE_15 - People_Birdviews account activity ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(Timeout.lg)
        methods.UrlvalidationPeople()
        methods.assertElementContainsTextxpath(locators.all_People_Title, 'All People')
        methods.VisibilityofElement(locators.account_pageloaded)

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'sarath_tdfect@factors.ai')
        methods.EnterXpath(locators.Search1)
        methods.clickElement(locators.account_pageloaded)
        methods.VisibilityofElement(locators.View_visible)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Time_stamp)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Hourly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Weekly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Monthly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Daily)
        methods.AssertNotEmpty(locators.timestamp_validation)
    })
})