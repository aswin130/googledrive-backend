const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')
const app = express()

//connect to db
connectDB()

require('dotenv').config({
    path: './config/config.env'
})

//use bodyparser

app.use(bodyparser.json())

//config for development
if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
    //gives info about each request

}
//load routes
const authRouter = require('./routes/authroutes')

//Use Routes
app.use('/api/', authRouter);

app.use((req, res, next) => {
    res.status(404).json({
        sucess: false,
        message: "Page Not found"
    })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`App is up on Port ${PORT}`);
});