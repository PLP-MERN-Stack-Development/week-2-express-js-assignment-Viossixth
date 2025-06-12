// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());

// Sample in-memory products database
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// TODO: Implement the following routes:
// GET /api/products - Get all products
app.get('/api/products', (req, res) => {
  const productNames = products.map(product => product.name);
  res.json(names);
});
// GET /api/products/:id - Get a specific product
app.get('/api/products/:id',(req,res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).send('Product Not Found');
  res.json(product);
});
// POST /api/products - Create a new product
app.post('/api/products',(req,res) => {
  const newProduct = req.body;
  if (!newProduct.id || !newProduct.name || !newProduct.description || !newProduct.price || !newProduct.category || !newProduct.inStock){
    return res.status(400).send('Product id, name,description,price, category and inStock are required')
  }

  const exists = products.find(p => p.id === newProduct.id);
  if (exists) {
    return res.status(400).send('Product with this ID already exists');
  }

  products.push(newProduct);
  res.status(201).json(newProduct);
});
// PUT /api/products/:id - Update a product
app.put('/api/products/:id',(req,res) =>{
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).send('Product Not Found');
  object.assign(products,req.body);
  res.json(product);
});
// DELETE /api/products/:id - Delete a product
app.delete('/api/products/:id',(req,res) =>{
  const productID =req.params.id
  const productIndex = products.findIndex(p => p.id === productID)

  if (productIndex === -1) {
    return res.status(404).send('Product not found');
  }

 const deletedProduct = products.splice(productIndex, 1);

 res.json({ message: 'Product deleted', product: deletedProduct[0] });
});

app.listen(3000, () => console.log('Server running on port 3000'));
// Example route implementation for GET /api/products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// TODO: Implement custom middleware for:
// - Request logging
app.use((req,res,next)=>{
  console.log(`Request receive at ${new Date().toISOString()}`);
  next();
});
// - Authentication
function authMiddleware(req, res, next) {
  const apiKey = req.header('x-api-key');
  if (!apiKey || apiKey !== 'mysecretkey') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
}


app.use('/',authMiddleware,(req,res,next) => {
  res.send('You accessed a protected route!');
});

// - Error handling

function errorHandler(err, req, res, next) {
  console.error(err.stack);

  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
    }
  });
}

app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 