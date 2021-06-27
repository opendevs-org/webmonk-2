const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const logger = require("morgan")
require("dotenv").config()
const routes = require("./routes/index")

const app = express()
const PORT = process.env.PORT || 3000

app.use(logger("dev"))
app.use(express.json())
app.use(cors())

app.use("/api", routes)

// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use("*", (req, res, next) => {
  if (Object.keys(res.locals).length) return next()
  else {
    res.locals.status = 404
    res.locals.error = "Not found"
    return next()
  }
})

// handle errors
app.use((req, res, next) => {
  console.log(JSON.stringify(res.locals))

  if (Object.keys(res.locals).length && res.locals.status) {
    res.status(res.locals.status).json({
      message: res.locals.error,
    })
  } else {
    res.status(500).json({
      message: Object.keys(res.locals).length
        ? res.locals.error
        : "Something seems wrong :( !!!",
    })
  }
})

mongoose.connect(
  process.env.MONGODB_CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.error(err)
    console.log("MONGODB connected successfully")
  }
)

app.listen(PORT, () =>
  console.log(`Express server currently running on port 3000`)
)
