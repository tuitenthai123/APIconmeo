const express = require("express");
const router = express.Router();
const apiserver = require("../testapi/server");

// getSong
router.get("/alo123", apiserver.getDHT22);

module.exports = router;

