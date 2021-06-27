module.exports = {
  find: async (modal, query) => {
    return await modal.find(query)
  },

  save: async (modal, data) => {
    const newData = new modal(data)
    return await newData.save()
  },
}
