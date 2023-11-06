const express = require("express");
const router = express.Router();
const db = require("../models");

// Index Route (GET/Read): Retrieve all crayons
router.get("/", (req, res) => {
  db.Crayon.find().then((crayons) => res.json(crayons));
});

// Show Route (GET/Read): Retrieve a specific crayon by ID
router.get("/:id", function (req, res) {
  db.Crayon.findById(req.params.id, function (crayon) {
    res.json(crayon);
  });
});

// Create Route (POST/Create): Create a new crayon
router.post("/", (req, res) => {
  db.Crayon.create(req.body).then((crayon) => res.json(crayon));
});

// Update Route (PUT/Update): Update a specific crayon by ID
router.put("/:id", (req, res) => {
  db.Crayon.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (crayon) => res.json(crayon)
  );
});

// Destroy Route (DELETE/Delete): Delete a specific crayon by ID
router.delete("/:id", (req, res) => {
  db.Crayon.findByIdAndDelete(req.params.id).then(() =>
    res.json({ deletedCrayonId: req.params.id })
  );
});

module.exports = router;
