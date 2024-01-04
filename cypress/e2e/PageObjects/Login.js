import userDetails from '../../fixtures/userDetails.json';
import envDetails from '../../fixtures/envDetails.json';

const Login = () => {

  // open login page url
  cy.visit(`${envDetails.backendApiUrl}/login`)

  //Login form elements - visible + fill
  cy.get('#login_form_username').should('be.visible').type(userDetails.email).should('have.value', userDetails.email)
  cy.get('#login_form_password').should('be.visible').type(userDetails.password).should('have.value', userDetails.password)

  //click on login button
  cy.get('.ant-form-item-control-input-content > .ant-btn-primary').should('be.visible').click()

  cy.wait(2000) //wait till the api loads 

}


export default Login