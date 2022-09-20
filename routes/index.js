const router = require("express").Router();
const main = require("../controller/Cmain")
const user = require("../controller/Cuser");

router.get("/", main.getMain)
router.get("/login", main.getLogin);
router.post("/login/userLogin", main.userLogin);

router.get("/joinMember", main.getJoinMember);
router.post("/joinMember/user", main.postJoinMember)

router.get("/introduce", user.getIntroduce);
router.post("/user/saveIntroudce", user.saveIntroudce)

module.exports = router;