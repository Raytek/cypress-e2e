import BaseTestRobot from './baseTestRobot'

class CatalogRobot extends BaseTestRobot {
  load () {
    this._load('?id_category=3&controller=category')
    this._interceptAllRequests()
  }

  setCategory (category) {
    switch (category.toLowerCase()) {
      case 'tops':
        this._checkbox('#layered_category_4')
        break
      case 'dresses':
        this._checkbox('#layered_category_8')
        break
      default:
        throw new Error('Invalid category!')
    }
    return this
  }

  setSize (size) {
    switch (size.toLowerCase()) {
      case 's':
        this._checkbox('#layered_id_attribute_group_1')
        break
      case 'm':
        this._checkbox('#layered_id_attribute_group_2')
        break
      case 'l':
        this._checkbox('#layered_id_attribute_group_3')
        break
      default:
        throw new Error('Invalid size!')
    }
    return this
  }
}

export default CatalogRobot
