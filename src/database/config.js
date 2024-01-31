require("dotenv").config();

var pg = require("pg");
const { Pool, Client } = require("pg");

var conString = process.env.POSTGRES_URL;
var database = new pg.Client(conString);

database.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  database.query('SELECT NOW() AS "theTime"', function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    console.log("Database Connected");
  });
});

module.exports = database;
