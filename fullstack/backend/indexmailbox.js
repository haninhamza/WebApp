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
    const sqlGet = "SELECT * FROM mailbox_db";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.post("/api/post",(req,res) => {
    const {raspIPaddress,activity} = req.body;
    const sqlInsert = "INSERT INTO mailbox_db (raspIPaddress, activity) VALUES (?, ?) ";
    db.query(sqlInsert, [raspIPaddress,activity], (error, result) => {
        if(error) {
            console.log(error);
        }
    }); 
   });

   app.delete("/api/remove/:id", (req,res) => {
    const { id } = req.params;
    const sqlRemove ="DELETE FROM mailbox_db WHERE id = ?";
    db.query(sqlRemove, id, (error, result) => {
        if(error) {
            console.log(error);
        }
    });
   });

   app.get("/api/get/:id",(req,res) => {
    const {id} = req.params;    
 const sqlGet = "SELECT * FROM mailbox_db where id = ?";
 db.query(sqlGet, id, (error, result) => {
    if(error) {
        console.log(error);
    } 
     res.send(result);
 });
});

app.put("/api/update/:id", (req,res) => {
    const { id } = req.params;
    const {raspIPaddress, activity}= req.body;    
    const sqlUpdate = "UPDATE mailbox_db SET raspIPaddress = ?, activity=? WHERE id  = ?";
    db.query(sqlUpdate,[raspIPaddress, activity, id], (error, result) => {
    if(error) {
        console.log(error);
    } 
     res.send(result);
 });
});

{/*
app.get("/",(req,res) => {
    const sqlInsert = "INSERT INTO mailbox_db (raspIPaddress,activity) VALUES ('ras', 'active' ) ";
      db.query(sqlInsert, (error, result) => {
          console.log("error", error);
          console.log("result", result);
          res.send("Hello Express");
      })
  });*/}














app.listen(5001, () => {
    console.log('Server running at port 5001');
});