const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "RootforPoste23;",
    database: "postedb",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get",(req,res) => {
    const sqlGet = "SELECT * FROM contact_db";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.post("/api/post",(req,res) => {
    const {password} = req.body;
    const sqlInsert = "INSERT INTO contact_db (password) VALUES (?) ";
    db.query(sqlInsert, [password], (error, result) => {
        if(error) {
            console.log(error);
        }
    }); 
   });