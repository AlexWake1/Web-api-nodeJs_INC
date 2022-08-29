const express = require("express");
const router = express.Router();

const { ProductsController } = require("./controller.js");

module.exports.ProductsAPI = (app) => {
  router
    .get("/", ProductsController.getProducts)
    .get("/:id", ProductsController.getProduct)
    .post("/", ProductsController.createProduct);

  app.use("/api/products", router);
};
