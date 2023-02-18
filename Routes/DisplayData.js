const express = require("express");
const router = express.Router();
router.post("/foodData", (req, res) => {
  try {
    res.send([global.foodData, global.foodCatogery]);
    console.log(global.foodData);
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});
router.get("/pckuser", (req, res) => {
  try {
    res.send([global.users]);
    console.log(global.users);
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});
module.exports = router;
