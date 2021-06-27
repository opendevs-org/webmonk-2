const { verify } = require("jsonwebtoken")
const Diary = require("../models/diary.model")

module.exports = {
  auth: (req, res, next) => {
    try {
      let token = req.headers.authorization
      if (!token) {
        res.locals.status = 401
        res.locals.error = "No authentication token, access denied"
        return next()
      }

      token = token.split(" ")[1]

      if (!token) {
        res.locals.status = 401
        res.locals.error = "No authentication token, access denied"
        return next()
      }

      const verified = verify(token, process.env.JWT_SECRET) // process.env.JWT_SECRET
      if (!verified) {
        res.locals.status = 401
        res.locals.error = "Token verification failed, authorization denied"
        return next()
      }

      req.user = verified
      return next()
    } catch (error) {
      res.locals.error = error.message
      return next()
    }
  },

  idCheck: async (req, res, next) => {
    try {
      const diary = await Diary.findOne({ _id: req.params._id }) //NOTE getting id from params of diary and finding that diary entry
      if (diary.user.email === req.user.email) {
        // NOTE if email stored in user object of a diary is same as email we received from JWT token stored in req.user object, allow edit/delete
        return next()
      } else {
        res.locals.status = 401
        res.locals.error = "You are not authorized to change this diary"
        return next()
      }
    } catch (error) {
      res.locals.error = error.message
      return next()
    }
  },
}
