import CatalogRobot from '../robots/catalogRobot'

describe('Catalog', () => {
  const catalog = new CatalogRobot()

  beforeEach(() => {
    catalog.load()
  })

  it('Filtering by category', () => {
    catalog
      .setCategory('tops')
      .mustBringProducts()
  })

  it('Filtering by size', () => {
    catalog
      .setSize('m')
      .mustBringProducts()
  })

  it.only('Filtering by category and size', () => {
    catalog
      .setCategory('dresses')
      .setSize('l')
      .mustBringProducts()
  })
})
