const router = require("express").Router();
const user = require("../controller/UserController");

router.get("/", user.index);



module.exports = router;