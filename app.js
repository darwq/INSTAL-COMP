const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const app = express();

const appTitle = "SCM INSTAL COMP SRL";

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

const PORT = 3000 || process.env.PORT;

app.get("/",(req,res) => {
    res.render("home",{title : appTitle});
})

// app.get("/cariera",(req,res) => {
//     res.render("cariera",{title : appTitle});
// })

app.listen(PORT,() => {
    console.log("Listening on port " + PORT);
})