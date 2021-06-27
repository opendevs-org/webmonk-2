module.exports = {
  find: async (modal, query) => {
    return await modal.find(query)
  },

  //NOTE: implement findOne

  save: async (modal, data) => {
    const newData = new modal(data)
    return await newData.save()
  },

  //NOTE: implement findOneAndUpdate

  //NOTE: implement findByIdAndDelete
}
