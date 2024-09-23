# ShoppyGLobe Backend

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)


## Introduction

This is the backend application for an Ecommerce website. It is written in NodeJS and Express and uses MongoDB as the database.
The application includes various routes to perform CRUD operations on the database. The routes are as follows:

### Routes

| Route | Description |
| --- | --- |
| GET /api/products | Get all products |
| GET /api/products/:id | Get a single product |
| POST /api/products | Create a new product |
| PUT /api/products/:id | Update a product |
| DELETE /api/products/:id | Delete a product |
| GET /api/cart/items | Get all products |
| POST /api/cart/item | add a single product to cart |
| PUT /api/cart/items/:id | update a single product |
| DELETE /api/cart/:id | Delete a single product from cart  |
| POST /api/user/register | Register a user |
| POST /api/user/signin | Sign in a user |

## Installation

### Pre-requisites

- NodeJS
- NPM
- MongoDB

1. Clone the repository

```bash
git clone https://github.com/itsnileshgosavi/ShoppyGlobe-Backend.git
```

2. Navigate to the cloned repository

```bash
cd ShoppyGlobe-Backend
```

3. Install dependencies

```bash
npm install
```

4. Run the server

```bash
npm start
```

## Usage

Once the server is running, you can access it using the following URL: http://localhost:8000/api/

In the frontend application, you can register or sign the user.
Once the user is signed in you can add products to the cart. Please note to access the cart routes you need to be signed in or in postman or thunder client you need to provide the token as a cookie.

*To provide the token as a cookie in postman/thunder client, open the headers section and add the token as a cookie in the following manner: `authtoken=<your_token>` in the value field of cookie header*

Product routes are accessible to everyone since we do not require authentication to view the products.

### Request Examples

#### User routes

- Sign up or Register: url: `http://localhost:8000/api/user/register`, method: POST, headers: none, body: JSON, Required fields: `email`, `firstName`, `lastName`, `password`
- Login: url: `http://localhost:8000/api/user/signin`, method: POST, headers: none, body: JSON, Required fields: `email`, `password`

#### Product routes

- Get all products: url: `http://localhost:8000/api/products`, method: GET, headers: none, body: none
- Get a single product: url:`http://localhost:8000/api/products/:productId`, method: GET, headers: none, body: none, parameters: `prductId`
- Create a new product: url:`http://localhost:8000/api/products` , method: POST, headers: none, body: JSON, Required fields: `title`, `description`, `price`, `image`
- Update a product: url:`http://localhost:8000/api/products/:productid` , method: PUT, headers: none, body: JSON , params: `productid`, Required fields: The field that needs to be updated
- Delete a product: url:`http://localhost:8000/api/products/:id`, method: DELETE, headers: none, body: none, parameters: `id`

#### Cart routes

- Get cart items of logged in user: url:`http://localhost:8000/api/cart/items`, method: GET, headers: `Cookie: authtoken=<your_token>`, body: none
- Add product to cart: url:`http://localhost:8000/api/cart/item`, method: POST, headers: Cookie: `authtoken=<your_token>`, body: JSON, Required fields: `productId`
- Update cart item: url:`http://localhost:8000/api/cart/items/:itemid`, method: PUT, headers: `Cookie: authtoken=<your_token>`, params: `itemid`, body: JSON, Required fields: `quantity`
- Delete cart item: url:`http://localhost:8000/api/cart/items/:itemid`, method: DELETE, headers: `Cookie: authtoken=<your_token>`, body: none, params: `itemid`