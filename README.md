# Wearsum E-commerce API

This API provides endpoints for an e-commerce platform called Wearsum. It includes features for user authentication, product management, and cart management.

# API Endpoints

## Authentication

### Signup
- Register a new user
- POST /signup

- Creates a new user account with encrypted password.

- Example request body:

 {
  "username": "example_user",
  "email": "user@example.com",
  "password": "password"
 }

- Returns:

{
  "success": true,
  "token": "<token>"
}

### Login

- POST /login

- Logs in a user with email and password.

- Example request body:

{
  "email": "user@example.com",
  "password": "password"
}

- Returns:

{
  "success": true,
  "token": "<token>"
}

## Products

### Add a new product

- POST /addproduct

- Adds a new product to the database.

- Example request body:

{
  "name": "Product Name",
  "image": "image_url",
  "category": "Category Name",
  "new_price": 100,
  "old_price": 80
}

- Returns:

{
  "success": true,
  "name": "Product Name"
}

### Get all products

- GET /allproducts

- Retrieves all products from the database.

- Returns an array of product objects.

## Cart Management

### Add to cart

- POST /addtocart

- Adds a product to the user's cart.

- Example request body:

{
  "itemId": "product_id"
}

- Returns:

"Added"
 
### Remove from cart

- POST /removefromcart

- Removes a product from the user's cart.

- Example request body:

{
  "itemId": "product_id"
}

- Returns:

"Removed"

### Get cart contents

- POST /getcart

- Retrieves the user's cart contents.

- Returns an object representing the user's cart data.

## File Upload

### Upload product image


- POST /upload

- Uploads an image for a product.

- Example request body:

{
  "product": "<image_file>"
}

- Returns:

{
  "success": 1,
  "image_url": "http://localhost:4000/images/<image_filename>"
}


# Requirements

- Node.js
- MongoDB

# Installation

## Navigate into the project directory:

- cd wearsum

## Install dependencies:

- npm install

## Create a .env file in the root directory and add the following environment variables:

- PORT=4000
- MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.hhhqnbx.mongodb.net/wearsum
- JWT_SECRET=secret

- Replace <username> and <password> with your MongoDB username and password.

1. Clone the repository:

## Start the server:

- npm start

- The server will run on http://localhost:4000 by default.


## Git:
```bash
git clone https://github.com/your-repo/wearsum.git

