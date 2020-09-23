const mysql = require('mysql')
const express = require('express')
const app = express()
const config = require('./config.js')
const bcrypt = require('bcrypt')
const cors = require('cors')
const jwt = require('jsonwebtoken')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: "3307",
    database: "authentification"
})

app.post('/sign-up', (req,res)=>{
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if (err) throw err
        var user = [req.body.name ,req.body.email ,hash ]
        var sql = "INSERT INTO users (name,email,password) VALUES (?)"
        connect.query(sql,[user]) 
        res.json({'inscription':'true'})
    })
})

app.post('/sign-in',(req,res)=>{
    var user = {email: req.body.email}
    var sql = "SELECT email,password FROM users WHERE ?"
    connect.query(sql,user,async (err,result)=>{
        if(err) throw err
        if (result.length){
            var comp = await bcrypt.compare(req.body.password,result[0].password)
            let token = jwt.sign({id: result[0].id}, config.secret,{expiresIn: 86400})
            if(comp === true){
                res.json({'connect':'true', 'token': token})
            }else{
                res.json({'connect':'false'})
            }
        }else{
            res.json({'connect':'false'})
        }
        
    })
})

app.listen(8080, function(){
    console.log('listening on http://localhost:8080');
})