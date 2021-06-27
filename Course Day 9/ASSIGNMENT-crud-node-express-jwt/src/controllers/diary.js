const { readFile, writeFile } = require("../daos/index") //NOTE: Importing the readFile & writeFile as separate functions

const ifErrorInResSendIt = (res, next) => {
  if (Object.keys(res.locals).length) return next()
}

module.exports = {
  getAll: async (req, res, next) => {
    ifErrorInResSendIt(res, next)
    try {
      const data = await readFile(dbFilePath)
      res.send(data)
    } catch (error) {
      res.locals.error = error.message
      next()
    }
  },
  getById: async (req, res, next) => {
    ifErrorInResSendIt(res, next)
    try {
      const id = Number(req.params.id)
      const diary = await readFile(dbFilePath)
      const singleEntry = diary.find((entry) => entry.id === id)

      if (!singleEntry) {
        res.locals.status = 404
        res.locals.error = `Account with id: ${id} not found!`
        return next()
      } else {
        res.send(singleEntry)
      }
    } catch (error) {
      res.locals.error = error.message
      next()
    }
  },
  create: async (req, res, next) => {
    ifErrorInResSendIt(res, next)
    //NOTE: implement create operation same way as course day 7
  },
  updateById: async (req, res, next) => {
    ifErrorInResSendIt(res, next)
    //NOTE: implement update operation same way as course day 7
  },
  deleteById: async (req, res, next) => {
    ifErrorInResSendIt(res, next)
    //NOTE: implement delete operation same way as course day 7
  },
}
