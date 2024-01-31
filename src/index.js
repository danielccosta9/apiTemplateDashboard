const express = require("express");

const createUser = require("./users/create.js");
const deleteUser = require("./users/delete.js");
const getAllUsers = require("./users/getAll.js");
const getUserById = require("./users/getById.js");
const updateUser = require("./users/update.js");

const createProduct = require("./products/create.js");
const deleteProduct = require("./products/delete.js");
const getAllProducts = require("./products/getAll.js");
const getProductById = require("./products/getById.js");
const updateProduct = require("./products/update.js");

const createTransaction = require("./transactions/create.js");
const deleteTransaction = require("./transactions/delete.js");
const getAllTransactions = require("./transactions/getAll.js");
const getTransactionById = require("./transactions/getById.js");
const updateTransaction = require("./transactions/update.js");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.post("/users", createUser);
app.get("/users", getAllUsers);
app.get("/users/:id", getUserById);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

app.post("/products", createProduct);
app.get("/products", getAllProducts);
app.get("/products/:id", getProductById);
app.put("/products/:id", updateProduct);
app.delete("/products/:id", deleteProduct);

app.post("/transactions", createTransaction);
app.get("/transactions", getAllTransactions);
app.get("/transactions/:id", getTransactionById);
app.put("/transactions/:id", updateTransaction);
app.delete("/transactions/:id", deleteTransaction);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
