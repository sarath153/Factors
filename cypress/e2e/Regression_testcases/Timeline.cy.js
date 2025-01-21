import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Timeline Login', () => {

  beforeEach(() => {

    cy.viewport(deviceViewport);

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    //login before run test
    Login1();

  })

  it('Account Timeline -- User Properties and Event Properties', () => {

    cy.wait(Timeout.md)
    methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
    methods.VisibilityofElement(locators.account_pageloaded)
    methods.clickElement(locators.search_button)
    methods.typeElementByXPath(locators.search_area, 'accenture.com')
    methods.EnterXpath(locators.search_area)
    methods.clickElementByXPath(locators.Open_Accenture_Acc)
    methods.VisibilityofElementIndex(locators.View_visible, 0)
    methods.VisibilityofElement(locators.Time_line_Validation)
    methods.clickElementByXPath(locators.Details)
    methods.VisibilityofElement(locators.Page_view_validation)
    methods.clickElementByXPath(locators.Add_Property_3)
    cy.wait(Timeout.xs)
    methods.clickElement0(locators.others, 1)
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.Filter_option1)
    methods.assertElementContainsText(locators.Popup_Message, "Property Already Exists")
    methods.typeElement(locators.select_property, 'email')
    methods.clickElement(locators.email_1)
    methods.assertElementContainsText(locators.Popup_Message, "Updated User Properties Configuration")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.UserProperty_Delete)
    methods.assertElementContainsText(locators.Popup_Message, "Updated User Properties Configuration")

    // Select Event properties[one filter]

    methods.clickElementByXPath(locators.Event_Properties)
    methods.clickElementByXPath(locators.Event_Properties)
    methods.clickElementByXPath(locators.Add_Property_3)
    methods.clickElement0(locators.Page_Properties, 0)
    methods.clickElement(locators.IsPageView)
    methods.assertElementContainsText(locators.Popup_Message, "Property Already Exists")
    methods.clickElementByXPath(locators.Back)
    methods.typeElement(locators.select_property, 'comp')
    methods.clickElement0(locators.CompanyEnriched, 0)
    methods.assertElementContainsText(locators.Popup_Message, "Updated Event Properties Configuration")
    cy.wait(Timeout.sm)
    methods.clickElementByXPath(locators.EventProperties_Delete)
    methods.assertElementContainsText(locators.Popup_Message, "Updated Event Properties Configuration")
    cy.wait(Timeout.sm)
  })

})