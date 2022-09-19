const router = require("express").Router();
const user = require("../controller/UserController");

router.get("/", user.index);

router.get("/signup", user.signup);
router.post("/signup", user.post_signup);

router.get("/signin", user.signin);
router.post("/signin", user.post_signin);

router.post("/profile", user.profile);
router.post("/profile/edit", user.profile_edit);
router.post("/profile/delete", user.profile_delete);


app.get("/", function (req, res) {
    res.render("form");
});

module.exports = router;