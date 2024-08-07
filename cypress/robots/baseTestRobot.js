class BaseTestRobot {
  _load (path) {
    cy.visit(path)
  }

  _fillText (locator, text) {
    const field = cy.get(locator)
    field.clear()
    field.type(text)
  }

  _clickButton (locator) {
    const button = cy.get(locator)
    button.click()
  }

  _matchText (locator, text) {
    const element = cy.get(locator)
    element.contains(text).should('be.visible')
  }
}

export default BaseTestRobot
