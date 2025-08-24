module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const router = require("express").Router();

  // CRUD routes
  router.post("/", tutorials.create);
  router.get("/", tutorials.findAll);
  router.get("/:id", tutorials.findOne);
  router.put("/:id", tutorials.update);
  router.delete("/:id", tutorials.delete);

  app.use("/api/tutorials", router);
};

