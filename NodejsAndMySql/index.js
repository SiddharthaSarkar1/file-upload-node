const express = require('express');
const con = require('./config');
const app = express();

app.use(express.json());

//GET API-------------->
app.get("/", (req, res) => {
    con.query("select * from users", (err, result) => {
        if(err){
            res.send("Error.....");
        }else{
            res.send(result); 
        }
    });
});

//POST API---------------------->
app.post("/", (req, res) => {
    const data = req.body;
    con.query('INSERT INTO users SET ?', data, (error, result, fields) => {
        if(error) error;
        res.send(result);
    });
});

//PUT API --------------------->
app.put("/:id", (req, res) => {
    const data = [req.body.name, req.body.password, req.body.user_type, req.params.id];
    con.query("UPDATE users SET name = ?, password = ?, user_type = ? where id = ?", data, (error, result, fields) => {        
        if(error) error;
        res.send(result);
    });
});

//DELETE API-------------------->
app.delete("/:id", (req, res) => {
    con.query("DELETE FROM users WHERE id ="+req.params.id, (error, result, fields) => {
        if(error) throw error;
        res.send(result); 
    });
});

app.listen(5000);
