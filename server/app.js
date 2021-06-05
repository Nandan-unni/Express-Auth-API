const express = require("express"); // for Server
const mongoose = require("mongoose"); // MongoDB connections
const passport = require("passport"); // Authentication purpose
const expressSession = require("express-session"); // server sessions
const bodyParser = require("body-parser"); // parsing req body
const cors = require("cors"); // cors handling
require("dotenv").config(); // Obtaining env variables

// User Model
const User = require("./models/user.model");

//Connecting to the database
const DB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://argon:tcmern@nebula.5hkzx.mongodb.net/TvitterDB?retryWrites=true&w=majority";
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Connected to DataBase ->", db.connection.name))
  .catch((err) => console.log("DataBase connection failure ->", err));

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(bodyParser.json()); // req body json data handling
server.use(passport.initialize()); // Auth
server.use(passport.session()); // Auth
server.use(
  expressSession({
    secret: "TwitterCloneServer",
    resave: false,
    saveUninitialized: false,
  })
); // Create a session middleware
server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
); // Cors origins

// Importing routes
const userRoutes = require("./routes/user.route");

// Connecting routes to server
server.use("/user", userRoutes);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
