const express = require('express')
const app = express()
const port = 4000
const productData = require('./data.json')
const cors = require ('cors')

app.use(cors());

app.get('/products', (req, res) => {
    res.json(productData)
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})