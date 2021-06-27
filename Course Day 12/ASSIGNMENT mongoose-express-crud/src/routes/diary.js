const { Router } = require("express")
const router = Router()

const {
  getAll,
  getById,
  create,
  getByUser,
  updateById,
  deleteById,
} = require("../controllers/diary")
const { idCheck } = require("../middleware/index")

router.get("/", getAll)
router.get("/me", getByUser)
router.get("/:_id", getById)
router.post("/", create)
router.put("/:_id", idCheck, updateById)
router.delete("/:_id", idCheck, deleteById)

module.exports = router
