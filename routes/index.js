const router = require("express").Router();
const main = require("../controller/Cmain");
const userResume = require("../controller/CuserResume");
const company = require("../controller/Ccompany");
const navbar = require("../controller/Cnavbar");
const joinmenber = require("../controller/Cjoinmenber");

// main
//---------------------------------------
// get main page
router.get("/", main.getMain);

// try login
router.post("/userLogin", main.userLogin);
router.post("/userLoginCompany", main.userLoginCompany);

//---------------------------------------


// joinmember
//---------------------------------------
router.get("/joinMember", joinmenber.getJoinMember);
router.post("/joinMember/idcheck", joinmenber.idCheck);
router.post("/joinMember/user", joinmenber.postJoinMember);

router.get("/joinMemberCompany", joinmenber.getJoinMemberCompany);
router.post("/joinMemberCompany/idcheck", joinmenber.idCheckCompany);
router.post("/joinMemberCompany/user", joinmenber.postJoinMemberCompany);
//---------------------------------------


// user
//---------------------------------------
// get introduce
router.get("/introduce", userResume.getIntroduce);
router.post("/user/saveIntroudce", userResume.saveIntroudce);
//---------------------------------------

// myPage
//---------------------------------------

//---------------------------------------

// company
//---------------------------------------
// get company page
router.get("/company", company.getCompany);

// send elements data
router.post("/sortUserByElement", company.sortUserByElement);
//---------------------------------------

// navbar
//---------------------------------------
// get myPage
router.get("/myPage", navbar.getMyPage);
//---------------------------------------


module.exports = router;
