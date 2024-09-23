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

4. Add `.env` file with environment variables

The following environment variables must be set in the `.env` file:

### `MongoDB_URL`
The URL of the MongoDB database.

### `JWT_SECRET`
The secret key used to sign and verify JWT tokens.


5. Start the server

```bash
npm start
```

## Usage

### Endpoints

Once the server is running, you can access the following endpoints:

### Authentication

*   **Register:** `http://localhost:8000/api/user/register`
*   **Sign in:** `http://localhost:8000/api/user/login`

### Products

*   **Get all products:** `http://localhost:8000/api/products`
*   **Get a single product:** `http://localhost:8000/api/products/:productId`
*   **Create a new product:** `http://localhost:8000/api/products`
*   **Update a product:** `http://localhost:8000/api/products/:productId`
*   **Delete a product:** `http://localhost:8000/api/products/:productId`

### Cart

*   **Get all items in the cart:** `http://localhost:8000/api/cart/items`
*   **Add an item to the cart:** `http://localhost:8000/api/cart/item`
*   **Update an item in the cart:** `http://localhost:8000/api/cart/items/:itemid`
*   **Delete an item from the cart:** `http://localhost:8000/api/cart/items/:itemid`

**Note:** To access the cart endpoints, you need to be signed in. In Postman or Thunder Client, you can provide the token as a cookie in the following manner: `authtoken=<your_token>` in the value field of the cookie header.
### Request Examples

#### User routes

### User routes

#### Register

- URL: `http://localhost:8000/api/user/register`
- Method: `POST`
- Headers: `none`
- Body: `JSON`
- Required fields: `email`, `firstName`, `lastName`, `password`

#### Login

- URL: `http://localhost:8000/api/user/signin`
- Method: `POST`
- Headers: `none`
- Body: `JSON`
- Required fields: `email`, `password`

#### Product routes

#### Product routes

| Route | Method | Headers | Body | Parameters | Required fields |
| --- | --- | --- | --- | --- | --- |
| /api/products | GET | none | none | none | none |
| /api/products/:productId | GET | none | none | productId | none |
| /api/products | POST | none | JSON | none | title, description, price, image |
| /api/products/:productId | PUT | none | JSON | productId | The field that needs to be updated |
| /api/products/:id | DELETE | none | none | id | none |

#### Cart routes

| Route | Method | Headers | Body | Parameters | Required fields |
| --- | --- | --- | --- | --- | --- |
| /api/cart/items | GET | Cookie: authtoken=<your_token> | none | none | none |
| /api/cart/item | POST | Cookie: authtoken=<your_token> | JSON | none | productId |
| /api/cart/items/:itemid | PUT | Cookie: authtoken=<your_token> | JSON | itemid | quantity |
| /api/cart/items/:itemid | DELETE | Cookie: authtoken=<your_token> | none | itemid | none |
