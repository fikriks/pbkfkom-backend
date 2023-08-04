const express = require("express");
const router = express.Router();
const tagsController = require("../controllers/tagsController");
const { tagStore, tagUpdate } = require("../validations/tagsValidation");
const { isLogin } = require("../middleware/authMiddleware");

router.use(isLogin);
router.get("/", tagsController.index);
router.get("/create", tagsController.create);
router.get("/:id/edit", tagsController.edit);

router.post("/store", tagStore, tagsController.store);

router.put("/:id/update", tagUpdate, tagsController.update);
router.delete("/:id", tagsController.destroy);

// API
router.get("/index", tagsController.indexAPI);

module.exports = router;
