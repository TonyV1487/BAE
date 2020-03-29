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
var uri = "mongodb://admin:password1@ds347917.mlab.com:47917/heroku_v1q1k4v0";

var options = {
  server: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  }
};

mongoose.connect(uri, options);

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

mongoose.connect(MONGODB_URI, options);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
