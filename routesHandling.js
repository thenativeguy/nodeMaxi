const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/**
 * Parsing the incoming request ===>>> To parse the incoming requests and extract data from those requests.
 */

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

/**
 * Now the below middleware i-e. app.use('/product',....) runs for everytime for every incoming request.
 * We are going to limit this to only the POST request right now.
 */
// app.use('/product',(req, res, next) =>{
//     console.log(req.body)
//     res.redirect('/');
// })

/**
 * TO Limit the request to only POST for the above middleware, we are gonna modify it a little bit like below.
 * What the below middleware do is that it restrict the incoming request to only POST requests.
 */

app.post('/product',(req, res, next) =>{
    console.log(req.body);
    res.redirect('/')
})

app.use('/', (req, res, next) => { 
    console.log("Hello First Middleware with using default Route");
    return res.send("<h1>Hello from Express </h1>");
})




app.listen(3000, () => {
    console.log('Server is Running');
});