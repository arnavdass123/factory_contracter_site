const express = require('express')
const path = require('path')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')
// const expresslayout = require("express-ejs-layouts");
const app = express()
const port = 80

// express specific stuff:
app.use(express.static("static"));

// set engine:
app.set("view engine", "ejs");
app.use(expressLayouts)
app.set("/views", path.join(__dirname, "veiws")); // connect with file


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/info', (req, res) => {
    res.render('info')
})

// prot listening:
app.listen(port, () => {
    console.log("listing on port", port);
});