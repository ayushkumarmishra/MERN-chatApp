const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const color = require("colors"); // Just for making the command line look good optional
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();
connectDB();
const app = express();
app.use(express.json()); // to accept the json data.

app.get("/", (req, res, next) => {
  res.send("Api is running");
});

app.use("/api/user", userRoutes);

// API ERROR HANDLING FUNCTIONS.(This is for the user when it goes to some other routes that does not exsists.)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started at port ${PORT}`.yellow.bold));
