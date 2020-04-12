const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect DB
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.send("Hello World!!"));
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to ContactKeeper API!!!" })
);

//define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

//test check in
