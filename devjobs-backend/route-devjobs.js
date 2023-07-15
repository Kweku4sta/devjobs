const express = require("express");
const router = express.Router();
const { allJobs } = require("./devJobController");

router.get("/devjob/:id?", allJobs);
module.exports = router;
