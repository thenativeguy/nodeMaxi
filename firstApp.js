const http = require('http');
const express = require('express');

const app = express();

/**
 * Middlewares are functions that have access to the 'req', 'res' and the 'next
 * 
 */
app.use((req, res, next) => {
    console.log("Middleware is running!");
    next(); //Allows the request to continue to the other middleware
});

app.use((req, res, next) => {
    console.log("Another middleware is running");
    res.send("<h1>Hello from express</h1>");
});

app.listen(3000)