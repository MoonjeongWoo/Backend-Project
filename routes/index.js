const router = require("express").Router();
const main = require("../controller/Cmain");
const userResume = require("../controller/CuserResume");
const company = require("../controller/Ccompany");

// const userinfo = require("../controller/CuserInfo");
// const companyinfo = require("../controller/CcompanyInfo");

// main
//---------------------------------------
    // get main page
    router.get("/", main.getMain);

    // try login
    router.post("/userLogin", main.userLogin);
    router.post("/userLoginCompany", main.userLoginCompany);

    // joim membership
    router.get("/joinMember", main.getJoinMember);
    router.post("/joinMember/idcheck", main.idCheck);
    router.post("/joinMember/user", main.postJoinMember);

    router.get("/joinMemberCompany", main.getJoinMemberCompany);
    router.post("/joinMemberCompany/idcheck", main.idCheckCompany);
    router.post("/joinMemberCompany/user", main.postJoinMemberCompany);
//---------------------------------------


// user
//---------------------------------------
    // get introduce
    router.get("/introduce", userResume.getIntroduce);
    router.post("/user/saveIntroudce", userResume.saveIntroudce);
//---------------------------------------


// company
//---------------------------------------
    // get company page
    router.get("/company", company.getCompany);

    // post stack tag
    router.post("/sortUserByElement", company.sortUserByElement);
//---------------------------------------

// myPage
//---------------------------------------
    // get myPage
    router.get("/myPage", user.getMyPage);
//---------------------------------------

module.exports = router;