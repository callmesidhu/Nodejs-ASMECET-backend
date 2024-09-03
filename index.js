const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('ASME+CDT!')
})

app.listen(port, () => {
  console.log(`ASME@listening on port ${port}`)
})