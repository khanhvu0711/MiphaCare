import express from "express";
import homeController from "../controllers/homeController";

const router = express.Router();

const initWeb = (app) => {
  router.get("/", homeController.HomePage);
  return app.get("/", router);
};

module.exports = initWeb;
