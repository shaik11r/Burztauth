const jwt = require("jsonwebtoken");
const isUserAuthorized = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization;
      req.currentUser = jwt.verify(token, "S3cret");
      next();
      return;
    } else {
      res.json({
        error: "Error :please sign In",
      });
    }
  } catch (error) {
    res.json({
      error: "ERROR:Unauthorized Request",
    });
  }
};
module.exports = isUserAuthorized;
