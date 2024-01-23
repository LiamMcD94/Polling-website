const express = require('express');
const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))

const database = require("./database")
const port = 3000;

app.get('/', (req, res) => {
  res.render("index404.ejs")
})

app.get("/:id", (req, res) => {
  const id = +req.params.id
  const data = database.getData(id)
  const vote = database.getVotes(id)
  if (!data){
    res.status(404).render("index404.ejs")
    return
  }
  if (!vote){
    res.status(404).render("index404.ejs")
    return
  }
  res.render("index.ejs", {
    data,
  })
})

app.post("/results/:resID", (req, res) => {
  const id = +req.params.id
  const form = req.body
  database.addVote(form)
  const vote = database.getVotes(+form.pollId)
  if (!vote){
    res.status(404).render("index404.ejs")
    return
  }
  console.log(vote)
  res.render("results.ejs", {
    vote
  })
})

app.use("/public", express.static("public"))

app.listen(port, () => {
  console.log('Example app is listening at http://localhost:' + port + "/-INSERT NUMBER-");
  console.log('Please insert poll number.');
});