const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");
var session = require("express-session"),
  bodyParser = require("body-parser");
const passport = require("./config/passport");

app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "../client/build")));

app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

const routes = require("./routes");
const users = require("./routes/api/user");
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add routes
app.use(routes);
app.use(users);

// connect to db (meetingsdb)

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/meetingsdb");
var MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost/meetingsdb";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4 // Use IPv4, skip trying IPv6
};

mongoose.connect(MONGODB_URI, options);

// Start the API server
app.listen(process.env.PORT || PORT, function() {
  console.log("Express server is up and running!");
});
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
