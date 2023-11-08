const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const studentsRouter = require("./src/routes/studentRouter");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*",
    exposedHeaders: "*",
  })
);
app.use("/students", studentsRouter);
const connectToDbAndStart = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("connected to mongodb sucessfully");
  } catch (error) {
    console.log("error while connecting to mongodb", error);
  }
};

app.get("/", (req, res) => {
  res.send("hi from the server");
});
app.listen(5500, async () => {
  await connectToDbAndStart();
  console.log(`hi port:5500 is on`);
});
