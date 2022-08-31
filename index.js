const express = require("express");

const app = express();

app.get("/",(req, res)=>{
   res.status(200).send("Welcome to my Server");
});

app.post("/",(req, res) =>{
    res.status(201).send("Your data has been saved.");
})

app.put("/",(req, res) => {
    res.status(200).send("Your data has been replaced");
})

app.patch("/", (req, res) => {
    res.status(200).send("Your message has been updated");
})

app.delete("/", (req, res) => {
    res.status(200).send("Your messsage has been deleted");
})

app.listen (4000, (err) => {
    console.log("🛴 Server listening on https://localhost/4000")
});

