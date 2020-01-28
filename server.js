
const express= require("express");

const bodyParser=require("body-parser");
const myConnection=require("./routes/conection");
// new medium





const mainRoutes =require("./routes/main");
var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/main",mainRoutes);



app.listen(5000)