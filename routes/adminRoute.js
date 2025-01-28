const router = require("express").Router()

const adminController = require("../controllers/adminController")
const authenticate = require("../middleware/authenticate")

router.get("/admin/login", adminController.getLogin)
router.get("/admin/dashboard", authenticate.isAdminAuthenticated, adminController.getDashboard)

router.post("/admin/login", adminController.loginAdmin)
router.post("/admin/generate-token", authenticate.isAdminAuthenticated, adminController.generateToken)

module.exports = router