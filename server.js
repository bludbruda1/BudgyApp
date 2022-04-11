const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

// App and Port
const app = express();
const PORT = process.env.PORT || 8000;

// Schema
const Schema = mongoose.Schema;
const LoginSchema = new Schema({
  email: String,
  password: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

// Model
const Login = mongoose.model("Login", LoginSchema);

// Saving data to DB
const data = {
  email: "geezel@test.com",
  password: "testing123",
};

const newLogin = new Login(data);

// newLogin.save((error) => {
//   if (error) {
//     console.log("Something went wrong");
//   } else {
//     console.log("Data has been saved!");
//   }
// });

// HTTP request logger
app.use(morgan("tiny"));

// Routes
app.get("/api", (req, res) => {
  Login.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

// Tells us which port the server is running on
app.listen(PORT, console.log(`Server is starting at ${PORT}`));

// Defining the DB URI
const MONGODB_URI =
  "mongodb+srv://bludbruda1:taBret94@budgydb.oawh8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Connects to our MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// If the DB is connected successfully, log this message
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});
