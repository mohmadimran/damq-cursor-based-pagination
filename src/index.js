const express = require("express");
require("dotenv").config();
const cors = require("cors");
const DataBase = require("./db")
const routes = require("./routes")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/activities",routes)



DataBase();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`app runing on ${PORT}`)
})