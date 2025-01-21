import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Accounts Regression', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TC_RE_01 - Accounts_Page Load', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
    })

    it('TC_RE_02, TC_RE_03 - Accounts_properties filter, Accounts_Event', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.filter)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement(locators.select_Accountprop)
        methods.clickElement(locators.Visited_Website)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)
        methods.clickElementByXPath(locators.Add_event)
        methods.typeElement(locators.Select_Event, 'website session')
        methods.clickElement0(locators.Website_Session, 1)
        methods.MouseoverAndClick(locators.calender_Icon)
        methods.clickElementByXPath(locators.ninety_days)
        methods.clickElementByXPath(locators.Apply_Changes)
        cy.wait(Timeout.md)
        methods.VisibilityofElement(locators.pageload_Confirmation)
    })

    it.skip('TC_RE_04 - Accounts_Clear filter', () => {
        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.filter)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement(locators.select_Accountprop)
        methods.clickElement(locators.Visited_Website)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement(locators.Event_performed)
        methods.clickElementByXPath(locators.select_option)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.Apply_Changes)
        cy.wait(Timeout.md)
        methods.VisibilityofElement(locators.account_pageloaded)

        methods.typeElement(locators.Select_Event, 'website session')
        methods.clickElement0(locators.Website_Session, 1)
        methods.MouseoverAndClick(locators.calender_Icon)
        methods.clickElementByXPath(locators.ninety_days)
        methods.clickElementByXPath(locators.Apply_Changes)
        cy.wait(Timeout.sm)
        methods.ClearAndTypeWithXpath(locators.save_field, testName)
        methods.clickElementByXPath(locators.Save)

        methods.VisibilityofElement(locators.pageload_Confirmation)
        methods.clickElement(locators.filter_css)
        cy.xpath('//span[normalize-space()="View 2 filter(s)"]').click({ force: true })
        methods.clickElementByXPath(locators.Clear_All_Filter)
    })

    it.skip('TC_RE_05 - Accounts_discard changes', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.filter)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_filter)
        methods.clickElement(locators.select_Accountprop)
        methods.clickElement(locators.Visited_Website)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)

        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement(locators.Event_performed)
        methods.clickElementByXPath(locators.select_option)
        methods.clickElementByXPath(locators.Discard_Filter)
    })

    it('TC_RE_06, TC_RE_07 - Accounts_Search field ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'factors.ai')
        methods.EnterXpath(locators.search_area)
        cy.wait(Timeout.xs)
        methods.assertElementContainsTextxpath(locators.factors_File, 'factors.ai')
        methods.clickElementByXPath(locators.clear_search)

    })

    it('TC_RE_08 - Accounts_Exporting CSV ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.download_button)
        methods.Exist(locators.DownloadCSV_Popup)
        methods.assertElementContainsText1(locators.download_header, 'Selects which columns to include')
        methods.ElementVisibleandClick1(locators.exportCSV)
        methods.NotExist(locators.DownloadCSV_Popup)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    })

    it('TC_RE_09 - Accounts_Table Properties ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_column_1)
        methods.VisibilityofElement(locators.Table_properties)
        methods.clickElement(locators.company_name)
        cy.wait(Timeout.xs)
        methods.clickElement(locators.company_name)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.Apply1)

    })

    it('TC_RE_10, TC_RE_11, TC_RE_12, TC_RE_13 - Accounts_New Segment, search, rename and delete ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
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
        methods.clickElement(locators.select_Accountprop)
        methods.clickElement(locators.Visited_Website)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)

        methods.clickElementByXPath(locators.Add_event)
        methods.typeElement(locators.Select_Event, 'website session')
        methods.clickElement0(locators.Website_Session, 1)
        methods.MouseoverAndClick(locators.calender_Icon)
        methods.clickElementByXPath(locators.ninety_days)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Apply_Changes)
        cy.wait(Timeout.md)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElementByXPath(locators.Save_segments1)
        methods.ClearAndTypeWithXpath(locators.save_field, testName)
        methods.clickElementByXPath(locators.Save)
        methods.VisibilityofElement(locators.notification_popup)

        // search saved segment

        cy.wait(Timeout.lg)
        methods.typeElement(locators.Search_segment, testName)
        methods.clickElementByXPath(locators.Select_segment)

        // rename

        cy.xpath(`//span[text()="${testName}"]//following::span[1]`, { timeout: extraTimeOut }).click()
        methods.clickElementByXPath(locators.EditsegmentDetails)
        methods.typeElement(locators.segment_rename, randomNumber)
        methods.clickElementByXPath(locators.Save)
        cy.wait(Timeout.xs)
        methods.Titletextcontainsxpath(locators.SegmentTitle, combination)

        //delete

        cy.wait(Timeout.sm)
        cy.xpath(`//span[text()="${combination}"]//following::span[1]`, { timeout: extraTimeOut }).click()
        methods.clickElementByXPath(locators.Delete_segment1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.confirm)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.xs)

    })

    it('TC_RE_14, TC_RE_15 - Accounts_Bird views ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'infosys.com')
        methods.EnterXpath(locators.search_area)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.open_account)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.BirdView)
        methods.VisibilityofElement(locators.View_visible)
    })

    it('TC_RE_16 - Accounts_Timeline Views ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'infosys.com')
        methods.EnterXpath(locators.search_area)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.open_account)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.BirdView)
        methods.VisibilityofElement(locators.View_visible)
        methods.clickElementByXPath(locators.Time_line)
        cy.wait(Timeout.sm)
        methods.VisibleofElement(locators.Time_line_Validation)
    })

    it('TC_RE_17 - Accounts_Birdviews expand ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'infosys.com')
        methods.EnterXpath(locators.search_area)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.open_account)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.BirdView)
        methods.VisibilityofElement(locators.View_visible)
        methods.clickElementByXPath(locators.Expand)
    })

    it('TC_RE_18 - Accounts_Birdviews account activity ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.search_button)
        cy.wait(Timeout.sm)
        methods.typeElementByXPath(locators.search_area, 'infosys.com')
        cy.wait(Timeout.sm)
        methods.EnterXpath(locators.search_area)
        methods.clickElementByXPath(locators.open_account)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.BirdView)
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

    it('TC_RE_19 - Accounts_Birdviews Properties ', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.search_button)
        cy.wait(Timeout.sm)
        methods.typeElementByXPath(locators.search_area, 'infosys.com')
        cy.wait(Timeout.sm)
        methods.EnterXpath(locators.search_area)
        methods.clickElementByXPath(locators.open_account)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.BirdView)
        methods.VisibilityofElement(locators.View_visible)
        methods.clickElementByXPath(locators.Birdview_option)
        methods.clickElement(locators.Birdview_properties)
        methods.clickElementByXPath(locators.company_name1)
        cy.wait(Timeout.sm)
        methods.AssertNotEmptyWithXpath(locators.property_validation)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.company_name1)
        methods.AssertNotEmptyWithXpath(locators.property_validation)
    })

    it('TC_RE_20 - Accounts Properties - filter Equals - true', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElement(locators.filter)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElement0(locators.All_Account, 0)
        methods.clickElement(locators.In_Hubspot1)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)

    })
})