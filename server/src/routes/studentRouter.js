const express = require("express");
const studentModel = require("../models/studentModel");
const studentsRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isUserAuthorized = require("../middleware/studentMiddleware");

studentsRouter.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await studentModel.findOne({ username: username });
  if (existingUser) {
    res.status(400).json({
      error: "ERROR! username already exitst",
    });
  } else {
    const hash = bcrypt.hashSync(password, 10);
    const newStudent = new studentModel({
      username: username,
      password: hash,
    });
    await newStudent.save();
    res.status(200).json({
      message: "User created",
    });
  }
});

studentsRouter.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await studentModel.findOne({ username: username }).exec();
  if (!existingUser) {
    res.json({
      error: "Error! Username does not exists",
    });
  } else {
    const isPasswordMatch = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordMatch) {
      res.json({
        error: "Error! Invalid Password",
      });
    } else {
      const token = jwt.sign(
        {
          userId: existingUser._id,
          username: existingUser.username,
        },
        "S3cret"
      );
      res.set("authorization", token);
      res.json({
        message: "sign in successful",
      });
    }
  }
});

studentsRouter.get("/user",isUserAuthorized, async (req, res) => {
    const {userId,username}=req.currentUser
    res.json({
        userId:userId,
        username:username
    })
});

studentsRouter.get("/others",isUserAuthorized, async (req, res) => {
  const allStudents=await studentModel.find().exec();
  console.log(allStudents);
  const otherStudents=allStudents.filter(student=>{
    return student._id.toString()!==req.currentUser.userId
  })
  const otherStudentDetails=otherStudents.map((student)=>{
    return{
      userId:student._id,
      username:student.username
    }
  })
  res.status(200).json(otherStudentDetails);
});
module.exports = studentsRouter;
