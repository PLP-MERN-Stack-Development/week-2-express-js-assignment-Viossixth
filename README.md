[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19734249&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## API Endpoints

The API will have the following endpoints:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 


###How to run server
Open the server.js file and click run on the file. 
Open the terminal and head to link at which the server is running at.

## 📘 Endpoints

### 🟢 `GET /`

- **Description:** Welcome message and brief instructions.
- **Response:** `200 OK`
  ```text
  Welcome to the Product API! Go to /api/products to see all products.
  ```

---

### 🟢 `GET /api/products`

- **Description:** Get a list of all products.
- **Response:** `200 OK`
  ```json
  [
    {
      "id": "1",
      "name": "Laptop",
      "description": "High-performance laptop with 16GB RAM",
      "price": 1200,
      "category": "electronics",
      "inStock": true
    },
    ...
  ]
  ```

---

### 🟢 `GET /api/products/:id`

- **Description:** Get a specific product by ID.
- **Params:** `id` (string) – Product ID
- **Responses:**
  - `200 OK` – Product found
  - `404 Not Found` – Product not found

---

### 🟡 `POST /api/products`

- **Description:** Add a new product.
- **Request Body (JSON):**
  ```json
  {
    "id": "4",
    "name": "Headphones",
    "description": "Noise-cancelling headphones",
    "price": 150,
    "category": "electronics",
    "inStock": true
  }
  ```
- **Responses:**
  - `201 Created` – Product added
  - `400 Bad Request` – Missing fields or duplicate ID

---

### 🟠 `PUT /api/products/:id`

- **Description:** Update a product's details.
- **Params:** `id` (string) – Product ID
- **Request Body (JSON):** Any fields you want to update.
  ```json
  {
    "price": 1350,
    "inStock": false
  }
  ```
- **Responses:**
  - `200 OK` – Product updated
  - `404 Not Found` – Product not found

---

### 🔴 `DELETE /api/products/:id`

- **Description:** Delete a product by ID.
- **Params:** `id` (string) – Product ID
- **Response:**
  ```json
  {
    "message": "Product deleted",
    "product": {
      "id": "2",
      "name": "Smartphone",
      ...
    }
  }
  ```
- **Responses:**
  - `200 OK` – Product deleted
  - `404 Not Found` – Product not found

---

### 🔐 `GET /protected`

- **Description:** A sample protected route.
- **Headers Required:**
  ```
  x-api-key: mysecretkey
  ```
- **Response:**
  - `200 OK` – If correct API key is provided.
  - `401 Unauthorized` – If API key is missing or incorrect.

---

## 🚨 Error Responses

- `400 Bad Request` – Missing or invalid data
- `404 Not Found` – Resource does not exist
- `401 Unauthorized` – Missing or invalid API key (for protected routes)
- `500 Internal Server Error` – Something went wrong
