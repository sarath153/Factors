import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Engagements scoring Login', () => {

  beforeEach(() => {

    cy.viewport(deviceViewport);

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    //login before run test
    Login1();

  })

  it('Engagements Custom Events', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `Demo_${randomNumber}`;
    const testName1 = `Demo New_${randomNumber}`;

    cy.wait(Timeout.md)
    methods.scrollWithXpath(locators.Account_Pagetitle)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElement(locators.account_pageloaded)
    methods.clickElement(locators.setting)
    methods.clickElementByXPath(locators.Account_Scoring)
    methods.assertElementContainsText(locators.Page_title, 'Account Scoring')
    cy.wait(Timeout.sm)

    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      
      if (demoElement) {
        // Perform actions if the element exists
        cy.xpath(`//td[contains(@title,"Demo")]//following::button[2]`).click({ force: true });
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        // Log message if no rules are found
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.CustomEvents)
    methods.clickElementByXPath(locators.select_event)
    methods.clickElementByXPath(locators.hubspot_Cmpny_Opt)
    methods.clickElementByXPath(locators.Company_Created)
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.clickElementIndexXpath(locators.Assign_weight, 1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName}']`, { timeout: extraTimeOut }).click({ force: true });
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    methods.clickElementByXPath(locators.Assign_weight1)
    methods.clickElement(locators.custom_event_name)
    cy.xpath(`//textarea[contains(text(),"${testName}")]`, { timeout: extraTimeOut }).clear().type(testName1)
    cy.xpath(`//textarea[contains(text(),"${testName1}")]`, { timeout: extraTimeOut }).type('{enter}');
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "Signal updated successfullySignal has been saved with changes. Updates will reflect across accounts within 24 hours.")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName1}']//following::button[2]`, { timeout: extraTimeOut }).click({ force: true });
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)

  })

  it('Engagements Page View', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `Demo ${randomNumber}`;
    const testName1 = `Demo New_${randomNumber}`;

    cy.wait(Timeout.md)
    methods.scrollWithXpath(locators.Account_Pagetitle)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElement(locators.account_pageloaded)
    methods.clickElement(locators.setting)
    methods.clickElementByXPath(locators.Account_Scoring)
    methods.assertElementContainsText(locators.Page_title, 'Account Scoring')

    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      
      if (demoElement) {
        cy.xpath(`//td[contains(@title,"Demo")]//following::button[2]`).click({ force: true });
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.PageView)
    methods.clickElementByXPath(locators.AddRule)
    methods.clickElement(locators.PageUrlIs)
    methods.clickElementByXPath(locators.PageViewOption)
    methods.clickElementByXPath(locators.URLoption)
    methods.clickElementByXPath(locators.AddRule)
    methods.clickElement0(locators.PageUrlContains, 1)
    methods.clickElement(locators.URLInput)
    methods.typeElement(locators.URLInput, "https://staging-app.factors.ai/explain")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName}']`, { timeout: extraTimeOut }).click({ force: true });
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    methods.clickElementByXPath(locators.Assign_weight1)
    methods.clickElement(locators.custom_event_name)
    cy.xpath(`//textarea[contains(text(),"${testName}")]`, { timeout: extraTimeOut }).clear().type(testName1)
    cy.xpath(`//textarea[contains(text(),"${testName1}")]`, { timeout: extraTimeOut }).type('{enter}');
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "Signal updated successfullySignal has been saved with changes. Updates will reflect across accounts within 24 hours.")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName1}']//following::button[2]`, { timeout: extraTimeOut }).click({ force: true });
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)
  })

  it('Engagements HubSpot Forms', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `Demo ${randomNumber}`;
    const testName1 = `Demo New_${randomNumber}`;

    cy.wait(Timeout.md)
    methods.scrollWithXpath(locators.Account_Pagetitle)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElement(locators.account_pageloaded)
    methods.clickElement(locators.setting)
    methods.clickElementByXPath(locators.Account_Scoring)
    methods.VisibilityofElement(locators.Page_title, 'Account Scoring')

    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      
      if (demoElement) {
        cy.xpath(`//td[contains(@title,"Demo")]//following::button[2]`).click({ force: true });
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.HubSpotForms)
    methods.clickElementByXPath(locators.Add_Rule1)
    methods.clickElement(locators.Formtitleis)
    methods.clickElementByXPath(locators.PageViewOption)
    methods.clickElementByXPath(locators.URLoption)
    methods.clickElementByXPath(locators.Add_Rule1)
    methods.clickElement0(locators.Formtitlecontains, 1)
    methods.clickElementByXPath(locators.URLInput2)
    methods.typeElementByXPath(locators.URLInput2, "https://staging-app.factors.ai/explain")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName}']`, { timeout: extraTimeOut }).click({ force: true });
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    methods.clickElementByXPath(locators.Assign_weight1)
    methods.clickElement(locators.custom_event_name)
    cy.xpath(`//textarea[contains(text(),"${testName}")]`, { timeout: extraTimeOut }).clear().type(testName1)
    cy.xpath(`//textarea[contains(text(),"${testName1}")]`, { timeout: extraTimeOut }).type('{enter}');
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "Signal updated successfullySignal has been saved with changes. Updates will reflect across accounts within 24 hours.")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName1}']//following::button[2]`, { timeout: extraTimeOut }).click({ force: true });
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)

  })

  it('Engagements Salesforce Campaigns', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `Demo ${randomNumber}`;
    const testName1 = `Demo New_${randomNumber}`;

    cy.wait(Timeout.md)
    methods.scrollWithXpath(locators.Account_Pagetitle)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElement(locators.account_pageloaded)
    methods.clickElement(locators.setting)
    methods.clickElementByXPath(locators.Account_Scoring)
    methods.VisibilityofElement(locators.Page_title, 'Account Scoring')

    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      
      if (demoElement) {
        cy.xpath(`//td[contains(@title,"Demo")]//following::button[2]`).click({ force: true });
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.SalesforceCampaigns)
    methods.clickElementByXPath(locators.Add_Rule2)
    methods.clickElement(locators.Campaignnameis)
    methods.clickElementByXPath(locators.PageViewOption)
    methods.clickElementByXPath(locators.URLoption)
    methods.clickElementByXPath(locators.Add_Rule2)
    methods.clickElement0(locators.Campaignnamecontains, 1)
    methods.clickElementByXPath(locators.URLInput3)
    methods.typeElementByXPath(locators.URLInput3, "https://staging-app.factors.ai/explain")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName}']`, { timeout: extraTimeOut }).click({ force: true });
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    methods.clickElementByXPath(locators.Assign_weight1)
    methods.clickElement(locators.custom_event_name)
    cy.xpath(`//textarea[contains(text(),"${testName}")]`, { timeout: extraTimeOut }).clear().type(testName1)
    cy.xpath(`//textarea[contains(text(),"${testName1}")]`, { timeout: extraTimeOut }).type('{enter}');
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "Signal updated successfullySignal has been saved with changes. Updates will reflect across accounts within 24 hours.")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName1}']//following::button[2]`, { timeout: extraTimeOut }).click({ force: true });
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)

  })

  it('Engagements LinkedIn Ads', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `Demo ${randomNumber}`;
    const testName1 = `Demo New_${randomNumber}`;

    cy.wait(Timeout.md)
    methods.scrollWithXpath(locators.Account_Pagetitle)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElement(locators.account_pageloaded)
    methods.clickElement(locators.setting)
    methods.clickElementByXPath(locators.Account_Scoring)
    methods.VisibilityofElement(locators.Page_title, 'Account Scoring')
    
    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      
      if (demoElement) {
        cy.xpath(`//td[contains(@title,"Demo")]//following::button[2]`).click({ force: true });
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.LinkedInAds)
    methods.clickElementByXPath(locators.Add_Rule2)
    methods.clickElement(locators.Campaignnameis)
    methods.clickElementByXPath(locators.PageViewOption)
    methods.clickElementByXPath(locators.URLoption)
    methods.clickElementByXPath(locators.Add_Rule2)
    methods.clickElement0(locators.Campaignnamecontains, 1)
    methods.clickElementByXPath(locators.URLInput3)
    methods.typeElementByXPath(locators.URLInput3, "https://staging-app.factors.ai/explain")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName}']`, { timeout: extraTimeOut }).click({ force: true });
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    methods.clickElementByXPath(locators.Assign_weight1)
    methods.clickElement(locators.custom_event_name)
    cy.xpath(`//textarea[contains(text(),"${testName}")]`, { timeout: extraTimeOut }).clear().type(testName1)
    cy.xpath(`//textarea[contains(text(),"${testName1}")]`, { timeout: extraTimeOut }).type('{enter}');
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "Signal updated successfullySignal has been saved with changes. Updates will reflect across accounts within 24 hours.")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName1}']//following::button[2]`, { timeout: extraTimeOut }).click({ force: true });
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)

  })

  it('Engagements G2 Intent', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `Demo ${randomNumber}`;
    const testName1 = `Demo New_${randomNumber}`;

    cy.wait(Timeout.md)
    methods.scrollWithXpath(locators.Account_Pagetitle)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElement(locators.account_pageloaded)
    methods.clickElement(locators.setting)
    methods.clickElementByXPath(locators.Account_Scoring)
    methods.VisibilityofElement(locators.Page_title, 'Account Scoring')

    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      
      if (demoElement) {
        cy.xpath(`//td[contains(@title,"Demo")]//following::button[2]`).click({ force: true });
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.G2Intent)
    methods.clickElementByXPath(locators.Add_Rule3)
    methods.clickElement(locators.Pagetitleis)
    methods.clickElementByXPath(locators.PageViewOption)
    methods.clickElementByXPath(locators.URLoption)
    methods.clickElementByXPath(locators.Add_Rule3)
    methods.clickElement0(locators.Pagetitlecontains, 1)
    methods.clickElementByXPath(locators.URLInput4)
    methods.typeElementByXPath(locators.URLInput4, "https://staging-app.factors.ai/explain")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName}']`, { timeout: extraTimeOut }).click({ force: true });
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    methods.clickElementByXPath(locators.Assign_weight1)
    methods.clickElement(locators.custom_event_name)
    cy.xpath(`//textarea[contains(text(),"${testName}")]`, { timeout: extraTimeOut }).clear().type(testName1)
    cy.xpath(`//textarea[contains(text(),"${testName1}")]`, { timeout: extraTimeOut }).type('{enter}');
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "Signal updated successfullySignal has been saved with changes. Updates will reflect across accounts within 24 hours.")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName1}']//following::button[2]`, { timeout: extraTimeOut }).click({ force: true });
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)

  })

  it('Account scoring Popup', () => {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const testName = `Demo ${randomNumber}`;
    const testName1 = `Demo New_${randomNumber}`;

    cy.wait(Timeout.md)
    methods.scrollWithXpath(locators.Account_Pagetitle)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElement(locators.account_pageloaded)
    methods.clickElement(locators.setting)
    methods.clickElementByXPath(locators.Account_Scoring)
    methods.assertElementContainsText(locators.Page_title, 'Account Scoring')

    cy.document().then((doc) => {
      const demoElement = doc.evaluate(`//td[contains(@title,"Demo")]`, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      
      if (demoElement) {
        cy.xpath(`//td[contains(@title,"Demo")]//following::button[2]`).click({ force: true });
        cy.wait(Timeout.sm);
        methods.clickElementByXPath(locators.Yes);
        methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.");
        cy.wait(Timeout.xs);
      } else {
        cy.log('No rules containing "Demo" found. Skipping deletion.');
      }
    });

    methods.clickElementByXPath(locators.Add_signal)
    methods.clickElementByXPath(locators.PageView)
    methods.clickElementByXPath(locators.AddRule)
    methods.clickElement0(locators.PageUrlContains, 0)
    methods.clickElement(locators.URLInput)
    methods.typeElement(locators.URLInput, "https://staging-app.factors.ai/path-analysis")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Add_signal)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.PageView)
    methods.clickElementByXPath(locators.AddRule)
    methods.clickElement0(locators.PageUrlContains, 0)
    methods.clickElement(locators.URLInput)
    methods.typeElement(locators.URLInput, "https://staging-app.factors.ai/path-analysis")
    methods.clickElementIndexXpath(locators.Assign_weight, 0)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "ErrorPlease add a valid name for this rule.")
    methods.clickElement(locators.custom_event_name)
    methods.ClearAndTypeWithXpath(locators.Pricing_page_visit_Search, testName)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "ErrorA rule with this name already exists. Please provide a different name.")
    cy.wait(Timeout.sm)
    methods.clickElement(locators.custom_event_name)
    cy.xpath(`//textarea[contains(text(),"${testName}")]`, { timeout: extraTimeOut }).clear().type(testName1)
    cy.xpath(`//textarea[contains(text(),"${testName1}")]`, { timeout: extraTimeOut }).type('{enter}');
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, `Duplicate RuleA similar rule with name - ${testName} already exists.`)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.AddRule)
    methods.clickElement0(locators.PageUrlIs, 1)
    methods.clickElementByXPath(locators.PageViewOption1)
    methods.clickElementByXPath(locators.URLoption1)
    cy.wait(Timeout.xs)
    methods.clickElementByXPath(locators.save2)
    methods.GetText(locators.notification_popup, "New signal added successfullySignal saved. Monitoring for this signal has now begun across accounts.")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName1}']//following::button[2]`, { timeout: extraTimeOut }).click({ force: true });
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName}']`, { timeout: extraTimeOut }).click({ force: true });
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    methods.clickElementByXPath(locators.Assign_weight1)
    methods.clickElementByXPath(locators.BackArrow)
    methods.VisibilityofElement(locators.scoreLeavePopup)
    methods.clickElementByXPath(locators.StayonPage)
    methods.assertElementContainsText1(locators.SegmentTitle, testName)
    methods.clickElementByXPath(locators.BackArrow)
    methods.VisibilityofElement(locators.scoreLeavePopup)
    methods.clickElementByXPath(locators.DiscardandLeave)
    methods.assertElementContainsText(locators.Page_title, "Account Scoring")
    cy.wait(Timeout.sm)
    cy.xpath(`//td[text()='${testName}']//following::button[2]`, { timeout: extraTimeOut }).click({ force: true });
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Yes)
    methods.GetText(locators.notification_popup, "Signal removed successfullySignal removed from monitoring. Changes will reflect across accounts within 24 hours.")
    cy.wait(Timeout.xs)
  })

})