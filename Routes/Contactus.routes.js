const express = require("express");
const {
  create,
  read,
  Delete,
  update,
} = require("../Controlers/Contactus.controler");
const upload = require("../Middlewares/Multer");
const router = express.Router();
router.post("/create", create);
router.get("/get", read);
router.delete("/delete/:id", Delete);
router.patch("/update/:id", update);
module.exports = router;
