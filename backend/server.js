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
app.use((req, res, next) => {
  console.log("request url", req.originalUrl);
  console.log("request method", req.method);
  next();
});
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))


/* Mount routes
---------------------------------------------------------- */
app.use("/api/crayon", crayonCtrl);
app.use("/api/box", boxCtrl);

// Any other route not matching the routes above gets routed by React
app.get('*', (req, res) => {
  res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'));
});

/* Tell the app to listen on the specified port
---------------------------------------------------------- */
app.listen(process.env.PORT, function () {
  console.log("Express is listening to port", process.env.PORT);
});
