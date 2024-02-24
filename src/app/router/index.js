const {Router} = require("express");
const router = Router();
const textTranslateContoller = require("../module/index");

router.get("/health", function (req, res) {
  res.status(200).send(`Its working fine...`);
});
router.post("/translate", textTranslateContoller);

module.exports = router;
