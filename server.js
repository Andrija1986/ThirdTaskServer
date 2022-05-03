
const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

//middleware

app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


//GET and POST requests

app.get("/", (req, res) => {
    /* res.send("Welcome to the page I call home") */
    res.sendFile("index.html")
})

app.get("/about", (req, res) => {
    res.json({ name: "Andrija", lastname: "Petrovic" })
})

app.get("/contact", (req, res) => {
    res.send(__dirname)
})

app.post("/", (req, res) => {
    if (req.body.username === "andrija" && req.body.password === "1234") {
        res.send(`Welcome ${req.body.username}`)
    } else {
        res.send("Login failed")
    }
});


app.listen(port, () => {
    console.log("Server is running on port:", port);
})