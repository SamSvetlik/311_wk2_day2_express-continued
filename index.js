const express = require("express");
const bodyParser = require("body-parser");
const comments = require('./data/comments')
const contacts = require('./data/contacts')
const products = require('./data/products')
const vehicles = require('./data/vehicles')
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json()
)
// .get routes
// get all comments
app.get('/comments', (req, res) => {
    console.log(comments)
    res.json(comments)
})
// get single comment
app.get('/comments/:id', (req, res) => {
    console.log("this requests a comment by ID")
    console.log(req.params.id)
    // the .some method returns false if no comment._id matches the requests's id
    if(!comments.some(comment => comment._id == req.params.id)){
      res.status(400).json({ msg: `No comment with an ID of ${req.params.id}`})
      // the .filter method returns the element[s] of the comments array that pass the test
    } else res.json(comments.filter(comment => comment._id == req.params.id))
})
// get contacts
app.get('/contacts', (req, res) => {
    res.json(contacts)
})
// get single contact
app.get('/contacts/:id', (req, res) => {
    console.log("this requests a contact by ID")
    console.log(req.params.id)
    if(!contacts.some(contact => contact._id == req.params.id)){
      res.status(400).json({ msg: `No contact with an ID of ${req.params.id}`})
    } else res.json(contacts.filter(contact => contact._id == req.params.id))
})
// get products
app.get('/products', (req, res) => {
    res.json(products)
})
// get single product
app.get('/products/:id', (req, res) => {
    console.log("this requests a contact by ID")
    console.log(req.params.id)
    if(!products.some(product => product._id == req.params.id)){
      res.status(400).json({ msg: `No product with an ID of ${req.params.id}`})
    } else res.json(products.filter(product => product._id == req.params.id))
})
// get vehicles
app.get('/vehicles', (req, res) => {
    res.json(vehicles)
})
// get single vehicle
app.get('/vehicles/:id', (req, res) => {
    console.log("this requests a vehicle by ID")
    console.log(req.params.id)
    if(!vehicles.some(vehicle => vehicle._id == req.params.id)){
      res.status(400).json({ msg: `No vehicle with an ID of ${req.params.id}`})
    } else res.json(vehicles.filter(vehicle => vehicle._id == req.params.id))
})


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
