const router = require("express").Router()

const userController = require("../controllers/userController")
const authenticate = require("../middleware/authenticate")

router.get("/", authenticate.authenticate, userController.getIndex)
router.get("/survey", userController.getSurvery)
router.post("/postSurvey", authenticate.authenticate, userController.postSurvey)

router.get("/login", userController.getLogin)
router.post("/login", userController.postLogin)

module.exports = router