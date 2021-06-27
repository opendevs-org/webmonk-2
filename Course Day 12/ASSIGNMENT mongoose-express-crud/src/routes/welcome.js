const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send({
    note:
      "Welcome to diary entry application powered by Express, Mongoose, JWT",
    steps: [
      "authenticate by using /users/* route",
      "do CRUD applications with /diary/* routes",
    ],
  })
})

module.exports = router
