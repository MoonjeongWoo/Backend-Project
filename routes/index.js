const router = require("express").Router();
const main = require("../controller/Cmain");
const userResume = require("../controller/CuserResume");
const company = require("../controller/Ccompany");
const navbar = require("../controller/Cnavbar");
const joinmember = require("../controller/Cjoinmember");

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
router.get("/joinMember", joinmember.getJoinMember);
router.post("/joinMember/idcheck", joinmember.idCheck);
router.post("/joinMember/user", joinmember.postJoinMember);

router.get("/joinMemberCompany", joinmember.getJoinMemberCompany);
router.post("/joinMemberCompany/idcheck", joinmember.idCheckCompany);
router.post("/joinMemberCompany/user", joinmember.postJoinMemberCompany);
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

// edit profile
router.get("/profile", joinmember.readyToEdit);
router.post("/profile/edit", joinmember.editProfile);


module.exports = router;
