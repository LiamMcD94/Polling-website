const express = require('express');
const app = express();
app.set("view engine", "ejs")
const database = require("./data.js")
const port = 3000;

app.get('/', (req, res) => {
  res.render("index.ejs")
})


const data = [
  {
    pollId: 1,
    pollName: "Premier League Winner",
    question: "Who will win the Premier League?",
    options: [
      {
      optionId: 1,
      optionText: "Manchester City",
      vote: 35
      },
      {
      optionId: 2,
      optionText: "Arsenal",
      vote: 23
      },
      {
      optionId: 3,
      optionText: "Liverpool",
      vote: 42
      },
      {
        optionId: 3,
        optionText: "Liverpool",
        vote: 42
        }
    ]
  }
]

app.get("/data", (req, res) => {
  res.render("data.ejs", {
    data
  })
})

app.get("/data/:id", (req, res) => {
  const id = +req.params.id
  const data = database.getData(id)
  res.send(id)
})

app.use("/public", express.static("public"))

app.listen(port, () => {
  console.log('Example app is listening at http://localhost:' + port);
});