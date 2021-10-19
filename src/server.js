const express = require('express')
//const swaggerDocs = require('./swagger')
const routes = require ('./routes')
//const bodyParser = require('body-parser')
const app = express()

app.use(express.urlencoded({ extended: false})) // apenas dados simples
app.use(express.json()) // json de entrada no body

//app.use('/tech-docs', swaggerUi.server, swaggerUi.setup())
app.use("/tech", routes)

app.listen(3000, () => console.log("Server is running on port 3000 "))