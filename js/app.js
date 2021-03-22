const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

const ShopService = require('./services/shop-service')

let shopService = new ShopService()

app.get('/shop/products', (req, res) => {
    res.send(shopService.getProductsMap())
})

app.post('/shop/products/add', (req, res) => {
    res.send(shopService.addProduct(req.body))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})