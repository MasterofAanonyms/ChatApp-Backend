import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pa$$@word12",
  database: "beta_x5",
});

db.connect((err) => {

  if (!err) {
    console.log("Connected to Database");
  } else {
    console.error(err.message);
  }

});


export default db;