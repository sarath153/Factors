import Login3 from '../PageObjects/Login3';
import {deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Enrichment Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('Enrichment', () => {

        const filePath = 'Sample_file_for_page_URL_rules.csv';

        cy.wait(5000)
        methods.Mouseover(locators.setting,extraTimeOut)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Pricing)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Enrichment_Rules)
        methods.clickElementByXPath(locators.Set_custom_rules)
        methods.clickElementByXPath(locators.Select_Pages)
        methods.clickElementByXPath(locators.Upload_List,extraTimeOut)
        methods.clickElementByXPath(locators.File,extraTimeOut)
        cy.wait(3000)
        methods.AttachFile(locators.File_Upload,filePath)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Done)
        cy.wait(1000)
        methods.VisibilityofElement(locators.Enrichment_page_validation)
        methods.scrollWithXpath(locators.Save_Changes)
        methods.clickElementByXPath(locators.Save_Changes)
        methods.VisibilityofElement(locators.notification_popup,extraTimeOut)
        methods.scrollWithXpath(locators.close_new)
        methods.clickElementByXPath(locators.close_new)
        methods.scrollWithXpath(locators.Delete)
        methods.clickElementByXPath(locators.Delete)
        methods.VisibilityofElement(locators.notification_popup,extraTimeOut)
        cy.wait(2000)
    })
})
