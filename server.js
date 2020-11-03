const express = require('express')
const http = require('http')
const path = require('path')
const app = express()
const Port = process.env.PORT || 3159


app.use(express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'))
})
app.listen(Port, (err) => {
    if (err) throw err
    console.log(`server is running on port${Port}`)
})
