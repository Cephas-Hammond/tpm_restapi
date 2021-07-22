const Pool = require('pg').Pool;


// local postgresql db connection
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "niiayittey",
    port: 5432
});


module.exports =  pool;
    