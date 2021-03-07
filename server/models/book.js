/*
Filename: book..js 
Student Name: Ashrut Sharma
Student ID: 301107609 
Date: 5th March, 2021
*/

let mongoose = require('mongoose');

// create a model class

let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
  collection: "books"  
});

module.exports = mongoose.model('Book', bookModel);