const MockDB = require('../dao/mockDB')

class ShopService {

    mockDB = new MockDB()

    getProductsMap() {
        return this.mockDB.productMap
    }

    addProduct(product) {
        return this.mockDB.addProduct(product)
    }

}

module.exports = ShopService