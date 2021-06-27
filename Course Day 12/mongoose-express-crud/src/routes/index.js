const { Router } = require("express")
const router = Router()
const users = require("./users")
const { auth } = require("../middleware")

// public route
router.use("/", require("./welcome"))
router.use("/users", users)

// private route
router.use("/diary", auth, require("./diary")) // NOTE: Notice the difference between line 9 & this line, how require can be used inline too, instead of assigning to a variable.

module.exports = router
