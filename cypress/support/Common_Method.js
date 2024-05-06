import envDetails from '../fixtures/envDetails.json';

class methods {

    assertElementContainsText(selector, text, timeout) {
        cy.get(selector, { timeout }).should('contain', text);
    }

    VisibilityofElementXpath(xpath, timeout) {
        cy.xpath(xpath, { timeout }).should('be.visible');
    }

    VisibleofElement(selector, timeout) {
        cy.get(selector, { timeout }).should('to.visible');
    }

    clickElement0(selector, int) {
        cy.get(selector).eq(int).click({force:true});
    }

    clickElement(selector) {
        cy.get(selector).click({ force: true });
    }

    clickElementwithindex(selector, text) {
        cy.get(selector, text).click();
    }

    scroll(selector) {
        cy.get(selector).scrollIntoView();
    }

    scrollWithXpath(Xpath) {
        cy.xpath(Xpath).scrollIntoView();
    }

    clickElementwithtime(selector, timeout) {
        cy.get(selector, { timeout }).click();
    }

    clickElement1(selector) {
        cy.get(selector).click({ force: true });
    }

    navigateToUrlPeople() {
        cy.visit(`${envDetails.backendApiUrl}/profiles/people`);
    }

    launchUrl() {
        cy.url().should('eq', `${envDetails.backendApiUrl}/`);
    }

    navigateToUrl(url) {
        cy.url().should('eq', `${envDetails.backendApiUrl}${url}`);
    }

    navigateToUrljour(url) {
        cy.url().should('eq', `${envDetails.backendApiUrl}/${url}`);
    }

    UrlValidation(text) {
        cy.url().should('contain', `${envDetails.backendApiUrl}${text}`);
    }

    UrlValidationcon(text) {
        cy.url().should('eq', `${envDetails.backendApiUrl}/configure/${text}`);
    }

    UrlValidationset(text) {
        cy.url().should('eq', `${envDetails.backendApiUrl}/settings/${text}`);
    }

    UrlValidationAccide() {
        cy.url().should('eq', `${envDetails.backendApiUrl}/reports/visitor_report`);
    }

    UrlValidationPeople() {
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
    }

    UrlValidationevent() {
        cy.url().should('contain', `${envDetails.backendApiUrl}/analyse/event`);
    }

    UrlValidationKPI() {
        cy.url().should('contain', `${envDetails.backendApiUrl}/analyse/kpi`);
    }

    UrlvalidationPeople() {
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
    }

    Titletextcontains(selector, text) {
        cy.get(selector).contains(text);
    }

    AssertNotEmpty(selector, timeout) {
        cy.get(selector, { timeout }).should('not.be.empty');
    }

    AssertNotEmptyWithXpath(Xpath, timeout) {
        cy.xpath(Xpath, { timeout }).should('not.be.empty');
    }

    Enter(selector) {
        cy.get(selector).type('{enter}');
    }

    EnterXpath(xpath) {
        cy.xpath(xpath).type('{enter}');
    }

    clickElementByXPath(xpath) {
        cy.xpath(xpath).click({ force: true });
    }

    clickElementByXPath1(xpath) {
        cy.xpath(xpath).click();
    }

    typeElementByXPath(xpath, text) {
        cy.xpath(xpath).type(text);
    }

    typeElement(selector, text) {
        cy.get(selector).type(text, { force: true });
    }

    clickwithcontaintext(selector, text) {
        cy.get(selector).contains(text).click();
    }

    ClickandType(selector, text) {
        cy.get(selector).click().type(text);
    }

    ClickandTypeXpath(Xpath, text) {
        cy.xpath(Xpath).click().type(text);
    }

    assertElementContainsTextxpath(xpath, text, timeout) {
        cy.xpath(xpath, { timeout }).should('contain', text);
    }

    VisibilityofElement(selector, timeout) {
        cy.get(selector, { timeout }).should('be.visible');
    }

    VisibilityofElementIndex(selector) {
        cy.get(selector).eq(0).should('be.visible');
    }

    VisibilityofElement1(selector, text) {
        cy.get(selector).should('have.text', text);
    }

    Mouseover(selector, timeout) {
        cy.get(selector, { timeout }).trigger('mouseover', { force: true });
    }

    MouseoverWithXpath(xpath, timeout) {
        cy.xpath(xpath, { timeout }).trigger('mouseover', { force: true });
    }

    chargebeeURL(){
        cy.url().should('contain', 'chargebee.com');
    }

    MouseoverAndClick(xpath) {
        cy.xpath(xpath).trigger('mouseover', { force: true }).click({ force: true });
    }

    ElementVisibleandClick(selector) {
        cy.get(selector).should('be.visible').click();
    }

    AttachFile(selector,filePath){
        cy.get(selector).attachFile(filePath);
    }

    VisitEventreport() {
        cy.visit(`${envDetails.backendApiUrl}/analyse/event`)
    }

    VisitKPIreport() {
        cy.visit(`${envDetails.backendApiUrl}/analyse/kpi`)
    }

    Clickwithindexandvalidation(selector, int) {
        cy.get(selector).eq(int).should('be.visible').click();
    }

    ClearAndTypeWithXpath(xpath, text) {
        cy.xpath(xpath).clear().type(text)
    }

    ClearAndType(selector, text) {
        cy.get(selector).clear().type(text);
    }

    PricingURL(){
        cy.visit(`${envDetails.backendApiUrl}/settings/pricing?state=succeeded`);
    }

    Clear(selector){
        cy.get(selector).clear()
    }

    ElementToBeClickable(selector){
        cy.get(selector).should('not.be.disabled')
    }

    ScrollAndClick(selector){
        cy.get(selector).scrollIntoView().click({force:true})
    }
}

export default new methods();