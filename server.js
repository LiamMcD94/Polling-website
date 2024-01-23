const express = require('express');
const app = express();
app.set("view engine", "ejs")
const database = require("./database")
const port = 3000;

app.get('/', (req, res) => {
  res.render("index404.ejs")
})

app.get("/:id", (req, res) => {
  const id = +req.params.id
  const data = database.getData(id)
  if (!data){
    res.status(404).render("index404.ejs")
    return
  }
  res.render("index.ejs", {
    data
  })
})

app.get("/results", (req, res) => {
  res.render("results.ejs", {
    vote
  })
})

app.get("/results/:id", (req, res) => {
  const id = +req.params.id
  const vote = database.getVotes(id)
  if (!vote){
    res.status(404).render("index404.ejs")
    return
  }
  res.render("results.ejs", {
    vote
  })
})


app.use("/public", express.static("public"))

app.listen(port, () => {
  console.log('Example app is listening at http://localhost:' + port);
});