const express = require("express")
const studenetsRoute=require("./routes/studentsRoute")

const app = express()
const PORT = 5000;

app.use("/api/v1", studenetsRoute)

app.get("/api/v1", (req, res)=>{res.send("welcome to our students api")});

app.listen(post, () => console.log("server started "))