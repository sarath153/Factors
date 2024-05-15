import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'
import Login from '../PageObjects/Login.js';
import { deviceViewport, extraTimeOut } from '../Utils.js';

describe('Login', () => {

  beforeEach(() => {

    cy.viewport(deviceViewport);

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    //login before run test
    Login();

  })

  it('Configure Page', () => {


    //config dropdown and pages accessibility check 

    [
      // { key: 'Integrations', index: 6, url: 'integration' },
      { key: 'Events', index: 7, url: 'events' },
      { key: 'Properties', index: 8, url: 'properties' },
      { key: 'Content Groups', index: 9, url: 'contentgroups' },
      { key: 'Touchpoints', index: 10, url: 'touchpoints' },
      { key: 'Custom KPIs', index: 11, url: 'customkpi' },
      { key: 'Engagement Scoring', index: 12, url: 'engagements' },
      { key: 'Attribution', index: 13, url: 'attribution' }
    ].map((item) => {

      cy.wait(5000)

      methods.clickElement(locators.setting)
      cy.xpath(`//h4[text()="Project Settings"]//following::h4[${item.index}]`).click({ force: true });
      cy.wait(1000);
      methods.UrlValidationset(item.url)
      methods.VisibilityofElement(locators.Account_Pagetitle)
      methods.Titletextcontains(locators.Account_Pagetitle, item.key)

    });

  });

})