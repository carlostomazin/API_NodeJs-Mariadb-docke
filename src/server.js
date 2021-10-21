const express = require('express')
const app = express()
const routes = require ('./routes')

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API Tech',
            description: "Customer API information",
            contact: {
                name: "carlos"
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ['./src/routes.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.urlencoded({ extended: false})) // apenas dados simples
app.use(express.json()) // json de entrada no body

app.use("/tech", routes)

app.listen(3000, () => console.log("Server is running on port 3000 "))