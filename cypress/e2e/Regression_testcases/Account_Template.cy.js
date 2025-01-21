import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'
import dayjs from 'dayjs';

describe('Account Template Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })


    it('Account Template', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const folder_name = `Automation Template Folder ${nowTime}`;
        const folder_name1 = `Automation Template Folder 1 ${nowTime}`;

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.New_Segment)
        methods.clickElementByXPath(locators.ChooseaTemplate)
        cy.wait(Timeout.xs)
        methods.MouseoverWithXpath(locators.Lock_Symbol)
        methods.VisibilityofElementXpath(locators.Missing_Integration_appears_popup, "You haven’t integrated g2 with Factors Please integrate g2 to use this template.Integrate now →")
        methods.ScrollAndClickxpath(locators.Create_segement)
        methods.clickElementIndexXpath(locators.Add_new2, 0)
        methods.clickElementByXPath(locators.Add_Filters_value)
        methods.typeElementByXPath(locators.Search_Input, "Company Country ISO Code")
        methods.ScrollAndClickxpath(locators.Add_Filters_value1)
        cy.wait(Timeout.xs)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply_Changes)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.Add_Event)
        methods.clickElementByXPath(locators.Add_Event_hubshot)
        methods.clickElementByXPath(locators.Add_Event_company_updated)
        methods.clickElementByXPath(locators.AdvancedFilters)
        methods.clickElementIndexXpath(locators.Add_new2, 1)
        methods.clickElementByXPath(locators.Add_Filters_hubspot_contacts)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.hubspot_contacts_pipeline)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.not_Set)
        methods.clickElement(locators.Apply)
        methods.clickElementByXPath(locators.Save_segments1)
        methods.ClearAndTypeWithXpath(locators.save_field, testName)
        methods.clickElementByXPath(locators.Save)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(Timeout.md)
        methods.VisibilityofElementXpath(locators.AllsegmentMenu)
        methods.clickElementByXPath(locators.All_segments)
        cy.wait(Timeout.md)
        cy.xpath(`//span[text()='${testName}']//following::span[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true }).click({ force: true })
        cy.wait(Timeout.xs)
        methods.MouseoverWithXpath(locators.move_to)
        methods.clickElementByXPath(locators.New_folder)
        methods.ClickandTypeXpath(locators.create_newfolder, folder_name)
        methods.clickElementByXPath(locators.Save)
        methods.assertElementContainsText(locators.Popup_Message, "Segment Moved to New Folder")
        cy.wait(Timeout.sm)
        cy.xpath(`//div[text()="${folder_name}"]//following::button[1]`, { timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.Edit_Folder)
        methods.ClearAndTypeWithXpath(locators.create_newfolder, folder_name1)
        methods.clickElementByXPath(locators.Save)
        methods.assertElementContainsText(locators.Popup_Message, "Folder Renamed")

        cy.xpath(`(//div[text()="${folder_name1}"])[1]`)
            .invoke('text')
            .then((firstText) => {
                const text1 = firstText.trim();

                expect(text1).to.equal(folder_name1);
                console.log(text1)
                console.log(folder_name1)
            })

        cy.wait(Timeout.sm)
        cy.xpath(`//div[text()="${folder_name1}"]//following::button[1]`, { timeout: extraTimeOut }).click({ force: true })
        methods.clickElementByXPath(locators.Delete_Folder);
        methods.clickElementByXPath(locators.confirmbtn)
        methods.VisibilityofElementXpath(locators.Folder_Delete)
        methods.assertElementContainsText(locators.Popup_Message, "Folder Deleted")
        cy.wait(Timeout.sm)
        cy.xpath(`//span[text()='${testName}']`, { timeout: extraTimeOut }).should('be.visible')
        cy.xpath(`//span[text()='${testName}']//following::span[1]`, { timeout: extraTimeOut }).trigger('mouseover', { force: true }).click({ force: true })
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.delete_segment)
        cy.wait(Timeout.sm)
        methods.clickElementByXPath(locators.confirmbtn1)
        cy.wait(Timeout.sm)
    })
})
