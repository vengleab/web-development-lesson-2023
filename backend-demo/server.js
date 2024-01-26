const express = require('express');
const app = express();
const userRoutes = require("./routes/users");
app.set("view engine", "ejs");

app.use(express.json());

app.get("/", (req, res) => {
    // res.send({ "message" : "Hello World!" });
    res.render("template", { payload : "data from server"});
})
app.get("/about-us", (req, res) => {
    // res.send({ "message" : "Hello World!" });
    res.render("template", { payload : "about datafdskfjdslkjflkdsjflkdsjfdsfdsfd"});
})
app.use("/users", userRoutes);


app.listen(3000, () => {
    console.log("API up and running at http://localhost:3000");
});