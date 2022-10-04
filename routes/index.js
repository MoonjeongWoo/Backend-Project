const router = require("express").Router();
const main = require("../controller/Cmain");
const userResume = require("../controller/CuserResume");
const company = require("../controller/Ccompany");
const navbar = require("../controller/Cnavbar");
const joinMember = require("../controller/CjoinMember");
const myPage = require("../controller/CmyPage");
const bucket = require("../controller/bucket");
const multer = require("multer");
const path = require("path"); // 파일 관리자

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, "static/img/userId/");
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

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

router.post("/joinMemberU/idcheck", joinMember.idCheck);
router.post("/joinMemberU/join", joinMember.postJoinMember);

// router.get("/joinMemberCompany", joinMember.getJoinMemberCompany);
router.post("/joinMemberCompany/idcheck", joinMember.idCheckCompany);
router.post("/joinMemberCompany/join", joinMember.postJoinMemberCompany);
//---------------------------------------

// user
//---------------------------------------
// get introduce
router.get("/introduce", userResume.getIntroduce);
router.post("/user/saveIntroudce", userResume.saveIntroudce);
//---------------------------------------

// myPage
//---------------------------------------
// update profile
router.post("/updateProfile", upload.single("picture"), myPage.updateProfile);
//---------------------------------------
//---------------------------------------

// company
//---------------------------------------
// get company page
router.get("/company", company.getCompany);
router.get("/bucket", company.getBucket);
router.get("/watchother", company.getOthers);
// send elements data
router.post("/sortUserByElement", company.sortUserByElement);
// add bucket
router.post("/addBucket", company.addBucket);
//---------------------------------------

// bucket
router.post("/companyBucket", bucket.companyBucket)
router.post("/companyBucket/ruleOut", bucket.ruleOut)
router.post("/getViewUserResume", bucket.getViewUserResume)
//---------------------------------------

// navbar
router.get("/myPage", navbar.getMyPage);
//---------------------------------------

// del account
// router.post("/profile/del", myPage.delAccount);

module.exports = router;
