// Express Application 
// ES Modules Browsers export function import somewhere else
// Bundler
// Node Comment.js Dont work in the Browser NODE: module.exports = const, functions
require('dotenv').config()
const express = require('express');
const path = require('path');

const app = express();
// .env containes environmental vars never upload to github...
const PORT = process.env.PORT || 5000;

//access to Request Body
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const staticOptions = {
    dotfiles:'ignore',
    extensions: ['htm', 'html']
}


// Middleware Serving Static pages from client directory //!UNCOMMENT IF NEEDED
/* app.use(
    express.static(path.join(__dirname, "../public"),{
        dotfiles: "ignore",
        extensions: ["html, htm"],
    })
); */

//Setup express 
app.use(express.static(path.join(__dirname, '../public'),staticOptions))

//API FOR EMPLOYEES
//baseURL api/v1/employees

// http request are GET method

// http method
//app.get(endpoint, (cb)) cb 3 params req, res, next
app.get('/api/v1/employees', (req, res, next)=>{
    res.send("EMPLOYEE MANAGER API")
}) 


// Routing Middleware Listen POST request Route /login
app.post('/login', (req, res)=>{

    res.sendFile(path.join(__dirname, '../public/dashboard.html'));
})

//public 404 page not found
// Sending a specific file 
app.use((req, res, next)=>{
    res.sendFile(path.join(__dirname, '../public/404.html'));
})

app.listen(PORT, () =>{
    console.log(`server is running ON------ http://localhost:${PORT}`);
})

