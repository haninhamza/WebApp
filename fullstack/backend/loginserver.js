const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "RootforPoste23;",
    database: "postedb",
});

db.query(
    "INSERT INTO admins (username, password) VALUES (?,?)",
    [username, hash],
    (err, result) => {
      console.log(err);
    }
  );



  app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    db.query(
        "SELECT * FROM admins WHERE username = ?;",
        username,
        (err, result) => {
          if (err) {
            res.send({ err: err });
          }
    
          if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, response) => {
              {
                res.send({ message: "Wrong username/password combination!" });
              }
            });
          } else {
            res.send({ message: "User doesn't exist" });
          }
        }
      );
    });
  
app.listen(8081, () => {
    console.log("running login server");
}); 