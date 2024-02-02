const express = require('express');
const app = express();
const cors = require('cors')
const userRoutes = require("./routes/users");
app.set("view engine", "ejs");

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    // res.send({ "message" : "Hello World!" });
    res.render("template", { payload : "data from server"});
})
app.get("/about-us", (req, res) => {
    // res.send({ "message" : "Hello World!" });
    res.render("template", { payload : "about datafdskfjdslkjflkdsjflkdsjfdsfdsfd"});
})
app.use("/users", userRoutes);
app.use("/", require("./routes/auth"));


app.listen(8080, () => {
    console.log("API up and running at http://localhost:3000");
});