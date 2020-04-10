const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes");

// const MONGODB_URI =
//   "mongodb+srv://TonyV1487:odWYi8bzmbyQ30Xd@bae-mcyk8.mongodb.net/test?retryWrites=true&w=majority";

// connect to DB
mongoose.connect("mongodb://localhost/meetingsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// message to confirm DB connection
mongoose.connection.on("connected", () => {
  console.log("Monogoose is connected!!!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Passport

// HTTP request logger
app.use(morgan("tiny"));
app.use("/", routes);

// Start the API server
app.listen(process.env.PORT || PORT, function () {
  console.log(`Server is starting at ${PORT}`);
});

// const cors = require("cors");
// var session = require("express-session"),
// bodyParser = require("body-parser");
// const passport = require("./config/passport");

// app.use(express.static("public"));
// // app.use(express.static(path.join(__dirname, "../client/build")));

// app.use(session({ secret: "cats" }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(passport.initialize());
// app.use(passport.session());

// const users = require("./routes/api/user");

// Define middleware here
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// add routes
// app.use(routes);
// app.use(users);

// connect to db (meetingsdb)

// ----- From Video ------

// Schema
// const Schema = mongoose.Schema;
// const UserSchema = new Schema({
//   firstName: { type: String, required: true, minlength: 1 },
//   lastName: { type: String, required: false, minlength: 1 },
//   email: { type: String, required: false },
//   position: { type: String },
//   password: { type: String, required: false, minlength: 1 },
//   profileURL: { type: String },
// });

// // Model
// const User = mongoose.model("User", UserSchema);

// const newUser = new User(data); // instance of the model

// Saving data to mongo database
// const data = {
//   firstName: "Tony",
//   lastName: "Vester",
//   position: "Da Boss",
//   email: "tvester1487@gmail.com",
//   password: "password123",
//   profileURL:
//     "https://images.generated.photos/1M5y2b6d0SU7RJ50S9pLdzB2yudegQ2xVxivkJIaIC4/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/OTk3ODAuanBn.jpg",
// };

// Save newUser to DB
// newUser.save((error) => {
//   if (error) {
//     console.log("Ooops, something happened!");
//   } else {
//     console.log("Data has been saved!!!");
//   }
// });

// .save();

// Return JSON when pinging server PORT
// app.get("/api", (req, res) => {
//   User.find({})
//     .then((data) => {
//       console.log("Data: ", data);
//       res.json(data);
//     })
//     .catch((error) => {
//       console.log("error: ", daerrorta);
//     });
// });
