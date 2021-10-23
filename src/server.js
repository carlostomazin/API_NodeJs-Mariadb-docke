const express = require('express')
const app = express()
const routes = require ('./routes')

app.use(express.urlencoded({ extended: false})) // apenas dados simples
app.use(express.json()) // json de entrada no body

app.use("/tech", routes)

app.listen(3000, () => console.log("Server is running on port 3000 "))
