const router = require("express").Router();

const controller = require("../controller/fileController");


router.get("/", controller.home);
router.post("/upload", controller.uploadFile);
router.get("/delete/:file", controller.fileDelete);
router.get("/show", controller.showFile);

module.exports = router;
