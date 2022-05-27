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
    const sqlGet = "SELECT * FROM feedbacks";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/:id",(req,res) => {
    const {id} = req.params;    
 const sqlGet = "SELECT * FROM feedbacks where id = ?";
 db.query(sqlGet, id, (error, result) => {
    if(error) {
        console.log(error);
    } 
     res.send(result);
 });
});

app.listen(5004, () => {
    console.log('Server running at port 5004');
});