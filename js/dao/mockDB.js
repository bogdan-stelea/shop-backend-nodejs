class MockDB {

    productMap = {
        "5B3raA": {
            code: "5B3raA",
            name: "Cui",
            description: "AREWQWEqeq",
            stock: 5,
            price: 10,
            imageURL: "https://us.123rf.com/450wm/coprid/coprid1903/coprid190300005/118914375-top-view-of-metal-open-end-wrench-isolated-on-white.jpg?ver=6"
        }
    };

    clientMap = {
        "1234": {
            lastName: "IOBN",
            surName: "GION",
            phoneNumber: "5325123"
        }
    };

    transactionStack;

    addProduct(product) {
        if (this.productMap[product.code]) {
            return false
        }
        this.productMap[product.code] = product;
        return true;
    }
}

module.exports = MockDB