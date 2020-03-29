const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");

// api routes
router.use("/api", apiRoutes);

// one get route

router.get("/", (req, res) => {
  res.sendFile("../../client/src/index.js");
});

module.exports = router;
