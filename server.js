const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("database connected"))

// activate body Parser
app.use(express.json())
app.use(cors())

// routes url
app.use('/app', routesUrls)
app.listen(4000, () => console.log("server is up and running")); 