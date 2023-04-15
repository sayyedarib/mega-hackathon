require("dotenv").config()
const axios = require("axios");
const express = require("express");
const cors = require("cors")
const app= express();


app.use(cors());
const connection = require("./db")
const scrappedEvents = require("./routes/scrappedEvents");
const test = require("./routes/test")
connection();


app.use("/api/events/scrappedEvents", scrappedEvents);

app.use("/test", test)

app.get("/", (req, res)=>{
    res.send("Welcome to the server side");
})
const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening to port ${port}`));