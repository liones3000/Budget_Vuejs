const budgetList = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: 'INCOME',
        value: 100,
        comment: 'Some comment',
        id: 1,
      },
      2: {
        type: 'OUTCOME',
        value: -50,
        comment: 'Some out comment 2',
        id: 2,
      },
    },
  },
  getters: {
    getList: ({ list }) => list,
  },
  mutations: {},
  actions: {},
};

export default budgetList;
