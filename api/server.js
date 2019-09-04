const express = require('express');


const productsRouter = require('../products/products-router')
const suppliersRouter = require('../suppliers/suppliers-router')

const server = express();

// Global Middleware
server.use(express.json());

server.use('/products', productsRouter)
server.use('/suppliers', suppliersRouter)


// Route Handler
server.get('/', (req, res) => {
    res.status(200).json({ api: 'UP'});
})

// manage products (8)
// manage clients (8)
// manage orders
// manage suppliers

server.get('/clients', (req, res) => {});

module.exports = server;