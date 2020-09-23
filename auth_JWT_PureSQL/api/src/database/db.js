const mysql = require('mysql')
const express = require('express')
const app = express()
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

// connect.query('CREATE DATABASE authentification')

connect.query('CREATE TABLE users (id INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(50),email VARCHAR(100),password VARCHAR(100))')