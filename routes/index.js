const router = require("express").Router();
const main = require("../controller/Cmain");
const user = require("../controller/Cuser");
const company = require("../controller/Ccompany");

// const userinfo = require("../controller/CuserInfo");
// const companyinfo = require("../controller/CcompanyInfo");

// main
//---------------------------------------
    // get main page
    router.get("/", main.getMain);

    // try login
    router.post("/userLogin", main.userLogin);

    // joim membership
    router.get("/joinMember", main.getJoinMember);
    router.post("/joinMember/idcheck", main.idCheck);
    router.post("/joinMember/user", main.postJoinMember);

    router.get("/joinMemberCompany", main.getJoinMemberCompany);
    router.post("/joinMemberCompany/idcheck", main.idCheckCompany);
    router.post("/joinMemberCompany/user", main.postJoinMemberCompany);

    // router.get("/joinMember", userinfo.getJoinMember);
    // router.post("/joinMember/idcheck", userinfo.idCheck);
    // router.post("/joinMember/user", userinfo.postJoinMember);

    // router.get("/joinMemberCompany", companyinfo.getJoinMember);
    // router.post("/joinMemberCompany/idcheck", companyinfo.idCheck);
    // router.post("/joinMemberCompany/user", companyinfo.postJoinMember);
//---------------------------------------


// user
//---------------------------------------
    // get introduce
    router.get("/introduce", user.getIntroduce);
    router.post("/user/saveIntroudce", user.saveIntroudce);
//---------------------------------------


// company
//---------------------------------------
    // get company page
    router.get("/company", company.getCompany);
//---------------------------------------

// myPage
//---------------------------------------
    // get myPage
    router.get("/myPage", user.getMyPage);
//---------------------------------------

module.exports = router;