
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
//const { default: db } = require("./config/database");


/*try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 */

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
     const sqlGet = "SELECT * FROM contact_db"
     db.query(sqlGet, (error, result) => {
         res.send(result);
     });
 });

 app.post("/api/post",(req,res) => {
     const {name,contact,address,email} = req.body;
     const sqlInsert =   "INSERT INTO contact_db (name,contact,address,email}) VALUES (?, ?, ?, ? ) ";
     db.query(sqlInsert, [name,contact,address,email], (error, result) => {
         if(error) {
             console.log(error);
         }
     }); 
    });

    app.delete("/api/remove/:id", (req,res) => {
        const { id } = req.params;
        const sqlRemove ="DELETE FROM contact_db WHERE id = ?";
        db.query(sqlRemove, id, (error, result) => {
            if(error) {
                console.log(error);
            }
        });
       });

       app.get("/api/get/:id",(req,res) => {
           const {id} = req.params;    
        const sqlGet = "SELECT * FROM contact_db where id = ?";
        db.query(sqlGet, id, (error, result) => {
           if(error) {
               console.log(error);
           } 
            res.send(result);
        });
    });

    app.put("/api/update/:id", (req,res) => {
        const { id } = req.params;
        const {name,contact,address,email} = req.body;    
        const sqlUpdate = "UPDATE contact_db SET name = ?, contact = ?, address= ?, email = ? WHERE id  = ?";
        db.query(sqlUpdate, [name,contact,address,email, id], (error, result) => {
        if(error) {
            console.log(error);
        } 
         res.send(result);
     });
 });
   

app.get("/",(req,res) => {
  const sqlInsert = 
    "INSERT INTO contact_db (name, contact, address, email) VALUES ('Hanin', '123456', 'Tunisia', 'hanin@gmail.com' ) ";
    db.query(sqlInsert, (error, result) => {
        console.log("error", error);
        console.log("result", result);
        res.send("Hello Express");
    })
});





app.listen(5000, () => {
    console.log('Server running at port 5000');
});