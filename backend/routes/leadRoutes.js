const express = require("express");
const router = express.Router();
const {
  createLead,
  getLeads,
  deleteLead,
  updateLead
} = require("../controllers/leadcontroller");
router.post("/",createLead);
router.get("/",getLeads);
router.put("/:id",updateLead);
router.delete("/:id",deleteLead);
module.exports = router;