require("dotenv").config()
const axios = require("axios");
const express = require("express");
const cors = require("cors")
const app= express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
  }));
  
const connection = require("./db")
const scrappedEvents = require("./routes/scrappedEvents");
const login = require("./routes/user/auth")
const signUp = require("./routes/user/signUp")
const test = require("./routes/test")
connection();


app.use("/api/events/scrappedEvents", scrappedEvents);
app.use("/api/signup", signUp);
app.use("/api/login", login);
app.use("/test", test)

app.get("/", (req, res)=>{
    res.send("Welcome to the server side");
})
const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening to port ${port}`));