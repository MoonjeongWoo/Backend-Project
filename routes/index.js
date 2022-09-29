const router = require("express").Router();
const main = require("../controller/Cmain");
const userResume = require("../controller/CuserResume");
const company = require("../controller/Ccompany");
const navbar = require("../controller/Cnavbar");
const joinMember = require("../controller/CjoinMember");
const myPage = require("../controller/CmyPage");

// main
//---------------------------------------
// get main page
router.get("/", main.getMain);

// try login
router.post("/userLogin", main.userLogin);
router.post("/userLoginCompany", main.userLoginCompany);

// logout
router.get("/process/logout", main.userLogout);

//---------------------------------------

// joinmember
//---------------------------------------
router.get("/joinMember", joinMember.getJoinMember);
router.post("/joinMember/idcheck", joinMember.idCheck);
router.post("/joinMember/user", joinMember.postJoinMember);

router.get("/joinMemberCompany", joinMember.getJoinMemberCompany);
router.post("/joinMemberCompany/idcheck", joinMember.idCheckCompany);
router.post("/joinMemberCompany/user", joinMember.postJoinMemberCompany);
//---------------------------------------

// user
//---------------------------------------
// get introduce
router.get("/introduce", userResume.getIntroduce);
router.post("/user/saveIntroudce", userResume.saveIntroudce);
//---------------------------------------

// myPage
//---------------------------------------
// router.post("/modUser", myPage.modUser)
//---------------------------------------

// company
//---------------------------------------
// get company page
router.get("/company", company.getCompany);
router.get("/bucket", company.getBucket);

// send elements data
router.post("/sortUserByElement", company.sortUserByElement);
//---------------------------------------

// navbar
router.get("/myPage", navbar.getMyPage);
//---------------------------------------
// get myPage

//---------------------------------------

// edit profile
router.get("/profile", joinMember.readyToEdit);
router.post("/profile/edit", joinMember.editProfile);

// del account
router.post("/profile/del", joinMember.delAccount);

module.exports = router;
