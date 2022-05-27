import { Sequelize } from "sequelize";
 
const db = new Sequelize('auth_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "RootforPoste23;",
  DB: "postedb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
