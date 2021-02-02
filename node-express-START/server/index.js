// Express Application 
// ES Modules Browsers export function import somewhere else
// Bundler
// Node Comment.js Dont work in the Browser NODE: module.exports = const, functions

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

//Setup express 
app.use(express.static(path.join(__dirname, '../public')))

//API FOR EMPLOYEES
//baseURL api/v1/employees

// http request are GET method

// http method
//app.get(endpoint, (cb)) cb 3 params req, res, next
app.get('/api/v1/employees', (req, res, next)=>{
    res.send({name:"Pavs"})
}) 

//public 404 page not found
// Sending a specific file 
app.use((req, res, next)=>{
    res.sendFile(path.join(__dirname, '../public/404.html'))
})

app.listen('3000', () =>{
    console.log(`server is running ON------ http://localhost:${PORT}`)
})

