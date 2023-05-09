const express = require('express')
require('dotenv').config({path:'./config.env'})
const {sequelize} = require('./sequelize')
const userRoute= require('./Routes/userRoute')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
// const swaggerJSDoc = require('swagger-jsdoc');

//swagger setup
// const swaggerDefinition = {
//   openapi: '3.0.0',
//   info: {
//     title: 'Api Documentation',
//     version: '1.0.0',
//     description: 'Documented API for testing.'
//   }
// };

// const options = {
//   swaggerDefinition,
//   apis: ['./Routes/*.js']
// };

// const swaggerSpec = swaggerJSDoc(options);


const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use('/user',userRoute)


sequelize.sync().then(()=>{
  console.log("table created");
}).catch((err)=>{
  console.log("error while creating table");
})

const swaggerDocument = YAML.load('./swagger3.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})