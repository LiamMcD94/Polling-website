var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});



// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected");
//     var sql = "CREATE TABLE poll (QuestionID int, Question VARCHAR(255), Options VARCHAR(225), Votes int";
//     con.query(spl, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });
// });