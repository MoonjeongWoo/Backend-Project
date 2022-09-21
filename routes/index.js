const router = require("express").Router();
const main = require("../controller/Cmain");
const user = require("../controller/Cuser");
const company = require("../controller/Ccompany");

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


module.exports = router;
