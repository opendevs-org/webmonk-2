const { sign } = require("jsonwebtoken")
const { genSalt, compare, hash } = require("bcryptjs")

const User = require("../models/users.model")
const { find } = require("../daos/index")

const ifErrorInResSendIt = (res, next) => {
  if (Object.keys(res.locals).length) return next()
}

module.exports = {
  get: async (req, res, next) => {
    ifErrorInResSendIt(res, next)
    try {
      const { email } = req.user

      const user = await find(User, { email })

      res.status(200).send({
        email: user[0].email,
        displayName: user[0].displayName,
        bio: user[0].bio,
      })
    } catch (error) {
      res.locals.error = error.message
      return next()
    }
  },

  login: async (req, res, next) => {
    ifErrorInResSendIt(res, next)
    try {
      const { email, password } = req.body

      // validate
      if (!email || !password) {
        res.locals.status = 400
        res.locals.error = "Not all fields have been entered"
        return next()
      }

      const user = await User.findOne({ email }) // NOTE: refactor just like line 17
      if (!user) {
        res.locals.status = 404
        res.locals.error = "No account with such credential exists"
        return next()
      }

      const isMatch = await compare(password, user.password)
      if (!isMatch) {
        res.locals.status = 400
        res.locals.error = "Invalid Credentials"
        return next()
      }

      const token = sign({ email: user.email }, process.env.JWT_SECRET)

      res.json({
        token,
        user: {
          email: user.email,
          displayName: user.displayName,
        },
      })
    } catch (error) {
      res.locals.error = error.message
      return next()
    }
  },

  register: async (req, res, next) => {
    ifErrorInResSendIt(res, next)
    try {
      let { email, password, passwordCheck, displayName, bio } = req.body

      if (!email || !password || !passwordCheck) {
        res.locals.status = 400
        res.locals.error = "Not all fields have been entered"
        return next()
      }

      if (password.length < 5) {
        res.locals.status = 400
        res.locals.error =
          "The password needs to be at least 5 characters long."
        return next()
      }

      if (password !== passwordCheck) {
        res.locals.status = 400
        res.locals.error = "Enter the same password twice for verification."
        return next()
      }

      const existingUser = await User.findOne({ email }) // NOTE: refactor just like line 17

      if (existingUser) {
        res.locals.status = 400
        res.locals.error = "An account with this email already exists."
        return next()
      }

      if (!displayName) displayName = email

      if (!bio) bio = ""

      const salt = await genSalt()
      const passwordHash = await hash(password, salt)

      const newUser = new User({
        email,
        password: passwordHash,
        displayName,
        bio,
      })

      const savedUser = await newUser.save() // NOTE: refactor just like line 17

      res.json(savedUser)
    } catch (error) {
      res.locals.error = error.message
      return next()
    }
  },
}
