const express = require("express");
const path = require("path");
const app = express();
const port =9000;
const dotenv = require("dotenv");
const connectDB = require("./config/mongoose");
const bodyParser = require("body-parser");

// =============== dotEnv configuration and dataBase connection call ====================
dotenv.config();
// connectDB();

// urlEncoded
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./assets"));

// ======= EJS ========
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Load Router
app.use("/", require("./routes/index"));

app.listen(port, (error) => {
   if (error) {
      console.log("error in the port");
   }
   console.log(`Server is running on Port ${port}`)
});
