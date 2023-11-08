const { default: mongoose } = require("mongoose");

const StudentSchema = mongoose.Schema({
  username: String,
  password: String,
});

const studentModel = mongoose.model("students", StudentSchema);

module.exports = studentModel;
