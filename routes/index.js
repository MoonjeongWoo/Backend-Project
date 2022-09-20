const router = require("express").Router();
const main = require("../controller/Cmain");
const user = require("../controller/Cuser");
const navbar = require("../controller/Cnavbar");
const devel = require("../controller/Cdevel");

router.get("/", main.getMain);
router.get("/login", main.getLogin);
router.get("/developer", devel.getDevel);
router.get("/joinMember", main.getJoinMember);
router.post("/joinMember/idcheck", main.idCheck);
router.post("/joinMember/user", main.postJoinMember);

router.get("/introduce", user.getIntroduce);
router.get("/navbar", navbar.getNavbar);
router.post("/user/saveIntroudce", user.saveIntroudce);

module.exports = router;
