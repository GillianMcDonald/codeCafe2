const express = require("express");
const sql = require("mysql");
const router = express.Router();
const coffees = require("../coffees.json");

const con = sql.createConnection({
 host: "127.0.0.1",
 database: "codeCafe_schema",
 user: "root",
 password: "password"
});

con.connect(err => {
 if (err) {
   console.error(`NOT CONNECTED to DB  - ${err.stack}`);
   return;
 }
 console.log(`Connected to DB - on thread:${con.threadId}`);
});

/* GET home page. */
router.get("/", (req, res) => {
 const str = "SELECT * FROM cartDB";

 con.query(str, (err, result) => {
   if (err) {
     console.log(err);
     res.status(200).json({ error: true });
   } else {
     console.log(result);
     res.status(200).json(coffees);
   }
 });
});

router.post("/neworder", (req, res) => {

 const sql =
   `INSERT INTO cartDB (orderName, coffeeName, coffeePrice, coffeeSize, caffeine, milktype) VALUES ("${req.body.orderName}", "${req.body.coffeeName}", "${req.body.coffeePrice}", "${req.body.coffeeSize}", "${req.body.caffeine}", "${req.body.milktype}")`;

 console.log(sql);

 con.query(sql, (err, result) => {
     if (err) throw err;
     console.log(`${result} - data inserted`);
     res.status(200).send(result);
   }
 );
});

module.exports = router;
