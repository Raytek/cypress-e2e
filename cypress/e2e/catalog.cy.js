import CatalogRobot from '../robots/catalogRobot'
import ProductRobot from '../robots/productRobot'

describe('Catalog', () => {
  const catalog = new CatalogRobot()
  const product = new ProductRobot()

  beforeEach(() => {
    catalog.load()
  })

  context('Filters', () => {
    it('Filtering by category', () => {
      catalog
        .setCategory('tops')
      product
        .hasProducts()
    })

    it('Filtering by size', () => {
      catalog
        .setSize('m')
      product
        .hasProducts()
    })

    it('Filtering by category and size', () => {
      catalog
        .setCategory('dresses')
        .setSize('l')
      product
        .hasProducts()
    })
  })

  context('Products', () => {
    it('Unavailable', () => {
      product
        .getProductByName('Faded Short Sleeve T-shirts')
        .setSize('m')
        .setColor('blue')
        .hasPrice(17)
        .isNotAvailable()
    })

    it('Available with other attributes', () => {
      product
        .getProductByName('Blouse')
        .hasPrice(27)
        .isAvailableWithOtherAttrs()
    })

    it('Available', () => {
      product
        .getProductByName('Blouse')
        .setColor('white')
        .hasPrice(27)
        .isAvailable()
    })
  })
})
