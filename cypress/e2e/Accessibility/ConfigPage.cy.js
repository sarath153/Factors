
import envDetails from '../../fixtures/envDetails.json';
import Login from '../PageObjects/Login';
import { deviceViewport, extraTimeOut } from '../Utils';

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
      { key: 'Events', index: 2, url: 'events' },
      { key: 'Properties', index: 3, url: 'properties' },
      { key: 'Content Groups', index: 4, url: 'contentgroups' },
      { key: 'Touchpoints', index: 5, url: 'touchpoints' },
      { key: 'Custom KPIs', index: 6, url: 'customkpi' },
      // { key: 'Top Events and Properties', index: 7, url: 'explaindp' },
      { key: 'Engagement Scoring', index: 7, url: 'engagements' },
      { key: 'Attribution', index: 8, url: 'attribution' }
    ].map((item) => {

      cy.wait(5000)
      cy.get('#fa-at-dropdown--config', { timeout: extraTimeOut }).click();
      cy.get(`.fa-at-overlay--config > ul > li:nth-child(${item.index}) > span > a`).click({ force: true });
      cy.wait(1000);

      cy.url().should('eq', `${envDetails.backendApiUrl}/configure/${item.url}`);

      cy.get('#fa-at-text--page-title').should('be.visible');
      cy.get('#fa-at-text--page-title').contains(item.key);


    });


  });


})