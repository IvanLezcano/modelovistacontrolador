const express = require("express");
const router = express.Router();

const {list,detail} = require("../controllers/productsController")



/* /rpdocuts */
router.get("/",list);
router.get("/detail", detail)

module.exports = router