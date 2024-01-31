const mysql = require("mysql");

const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'nodeandmysql'
});


con.connect((err) => {
    if(err){
        console.log("Error in connection -->"+err);
    }else{
        console.log("Connected.....");
    }
});

module.exports = con;