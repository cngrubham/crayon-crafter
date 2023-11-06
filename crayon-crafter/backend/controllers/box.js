const express = require("express");
const router = express.Router();
const db = require("../models");

// Index Route (GET/Read): Retrieve all boxes
router.get("/", (req, res) => {
  db.Box.find().then((boxes) => res.json(boxes));
});

// Show Route (GET/Read): Retrieve a specific box by ID
router.get("/:id", function (req, res) {
  db.Box.findById(req.params.id, function (box) {
    res.json(box);
  });
});

// Create Route (POST/Create): Create a new box
router.post("/", (req, res) => {
  db.Box.create(req.body).then((box) => res.json(box));
});

// Update Route (PUT/Update): Update a specific box by ID
router.put("/:id", (req, res) => {
  db.Box.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((box) =>
    res.json(box)
  );
});

// Destroy Route (DELETE/Delete): Delete a specific box by ID
router.delete("/:id", (req, res) => {
  db.Box.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(500).send("Error deleting the box.");
    } else {
      res.json({ deletedBoxId: req.params.id });
    }
  });
});
router.delete("/:id", (req, res) => {
    db.Box.findByIdAndDelete(req.params.id).then(() =>
      res.json({ deletedBoxId: req.params.id })
    );
  });
  
module.exports = router;
