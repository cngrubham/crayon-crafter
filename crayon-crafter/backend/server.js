/* Require modules
---------------------------------------------------------- */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

/* Require the db connection, models, and seed data
---------------------------------------------------------- */
const db = require("./models");

/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const crayonCtrl = require("./controllers/crayon");
const boxCtrl = require("./controllers/box");

/* Create the Express app
---------------------------------------------------------- */
const app = express();

/* Middleware (app.use)
---------------------------------------------------------- */
// cross origin allowance
app.use(cors());
// body parser - used for POST/PUT/PATCH routes:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Mount routes
---------------------------------------------------------- */
app.use("/api/crayon", crayonCtrl);
app.use("/api/box", boxCtrl);

/* Tell the app to listen on the specified port
---------------------------------------------------------- */
app.listen(process.env.PORT, function () {
  console.log("Express is listening to port", process.env.PORT);
});
