const express = require("express");
const router = express.Router();
const achievementsController = require("../controllers/achievementsController");
const {
  achievementStore,
  achievementUpdate,
} = require("../validations/achievementsValidation");
const { isLogin } = require("../middleware/authMiddleware");

router.use(isLogin);

router.get("/", achievementsController.index);
router.get("/create", achievementsController.create);
router.get("/:id/edit", achievementsController.edit);

router.post("/store", achievementStore, achievementsController.store);

router.put("/:id/update", achievementUpdate, achievementsController.update);
router.delete("/:id", achievementsController.destroy);

module.exports = router;
