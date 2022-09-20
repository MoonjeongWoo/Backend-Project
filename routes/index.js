const router = require("express").Router();
const main = require("../controller/Cmain")
const user = require("../controller/Cuser");

router.get("/joinMember", main.getJoinMember);
router.post("/joinMember/user", main.postJoinMember)

router.get("/introduce", user.getIntroduce);





module.exports = router;