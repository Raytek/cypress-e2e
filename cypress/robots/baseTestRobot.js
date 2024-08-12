class BaseTestRobot {
  _load (path) {
    cy.visit(path)
  }

  _fillText (locator, text, _log = true) {
    const field = cy.get(locator)
    field.clear()
    field.type(text, { log: _log })
  }

  _clickButton (locator) {
    const button = cy.get(locator)
    button.click()
  }

  _matchText (locator, text) {
    const element = cy.get(locator)
    element.contains(text).should('be.visible')
  }

  _capitalize (value) {
    return Cypress._.capitalize(value)
  }

  _checkbox (locator) {
    const element = cy.get(locator)
    element.check()
  }

  _select (locator, value) {
    const element = cy.get(locator)
    element.select(value)
  }

  _interceptAllRequests () {
    cy.intercept('**').as('requests')
  }

  _waitAllRequests () {
    cy.wait('@requests')
  }

  _mustExist (locator) {
    const element = cy.get(locator)
    element.should('be.visible').and('have.length.greaterThan', 1)
  }
}

export default BaseTestRobot
