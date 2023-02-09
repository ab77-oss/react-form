const express = require('express');
const cors = require('cors');
const dbConfig = require('./app/config/db.config')
const app = express();


var corsOptions = {
    origin:'http://localhost:8081'
}

app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({extended:true}));

const db = require('./app/models');
const Role = db.role;

db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.db}`)

app.get("/", (req,res) => {
    res.json({message:"welcome to abdelouahed application"})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})