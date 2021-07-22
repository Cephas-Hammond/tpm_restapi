const mysql = require('mysql');


const dbConn = mysql.createConnection({
    user: "root",
    host: "localhost",
    database: "students",
    password: "",
    
});

dbConn.connect((err)=>{
    if(err) throw err;
    console.log("Database connected");
});

module.exports = dbConn;