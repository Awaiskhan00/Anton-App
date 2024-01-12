// routes/antonRoutes.js

const express = require("express");
const antonController = require("../controllers/antonController");
const middlewares = require("../middlewares");

const router = express.Router();

router.post("/antons", middlewares.validateData, antonController.createAnton);
router.patch("/antons/:atn_number", middlewares.validateData, middlewares.checkAntonExistence, antonController.updateAnton);
router.delete("/antons/:atn_number", middlewares.checkAntonExistence, antonController.deleteAnton);
router.get("/antons", antonController.getAllAntons);
router.get("/antons/:atn_number", middlewares.checkAntonExistence, antonController.getAntonByAtnNumber);

module.exports = router;
