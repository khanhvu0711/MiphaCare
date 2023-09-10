import expess from "express";

const viewEngine = (app) => {
  app.use(expess.static("./src/public"));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

module.exports = viewEngine;
