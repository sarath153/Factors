node --version
npm --version

npm -i init

install cypress:
npm install cypress --save -dev

npm install --save-dev cypress-file-upload -- file upload

start cypress:
nodes_modules/.bin/cypress open (or)
npx cypress open

Execute scripts:
npx cypress run --> headless mode
npx cypress run --headed --> headed mode

npx cypress open --> run through cypress

npx cypress run --spec <file-location> --headed(optional) --> this is for execute specific file.

npx cypress run --browser chrome --> execute particular browser (we can also use headed mode)

describe --> use to execute multiple testcases

it --> testcases or step

testsuite--->testcases--->test steps

Spec files(cy.js)----> describe blocks(testsuite)---> it block(test)


click action --> click()
sendkey --> type()


Locators:--> cy.get(locators)
CSS Selector:

(tag name is optional)
#id
.class
[attribute='value']
.class[attribute='value']

Xpath
npm install -D cypress-xpath

/// <reference types="cypress-xpath" /> -- commands.js file
require('cypress-xpath'); -- e2e.js file


/// <reference types="cypress" /> ---> inside the support commands.js file to access the cypress without import