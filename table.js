const mysql = require('express');
var mysql = require('mysql');

var con = mysql.createConnection ({
    host: "localhost",
    user: "admin",
    password: "pw",
    database: "testdb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
    var sql = "CREATE TABLE poll (QuestionID int, Question VARCHAR(255), Options VARCHAR(225), Votes int";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});