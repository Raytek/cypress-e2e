import BaseTestRobot from './baseTestRobot'

class ProductRobot extends BaseTestRobot {
  hasProducts () {
    this._waitAllRequests()
    this._mustExist('.product-container')
  }

  getProductByName (name) {
    this._clickButton(`a[class="product-name"][title="${name}"]`)
    return this
  }

  setSize (size) {
    const selectId = '#group_1'
    switch (size.toLowerCase()) {
      case 's':
        this._select(selectId, 0)
        break
      case 'm':
        this._select(selectId, 1)
        break
      case 'l':
        this._select(selectId, 2)
        break
      default:
        throw new Error('Invalid size!')
    }
    return this
  }

  setColor (color) {
    this._clickButton(`a[name="${this._capitalize(color)}"]`)
    return this
  }

  hasPrice (price) {
    this._matchText('#our_price_display', `${price}`)
    return this
  }

  isNotAvailable () {
    this._matchText('#availability_value', 'This product is no longer in stock')
  }

  isAvailableWithOtherAttrs () {
    this._matchText('#availability_value', 'This product is no longer in stock with those attributes but is available with others')
  }

  isAvailable () {
    this._matchText('#availability_value', 'In stock')
  }
}

export default ProductRobot
