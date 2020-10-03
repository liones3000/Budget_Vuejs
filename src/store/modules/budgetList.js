import Vue from 'vue';

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
    list_filter: undefined,
  },
  getters: {
    getList: (state) => state.list_filter || state.list,
    getTotalBalance: ({ list }) =>
      Object.values(list).reduce((acc, item) => acc + item.value, 0),

    filterList: (state) => (type) => {
      if (type == 'ALL') {
        state.list_filter = undefined;
        return;
      }
      const newObjList = Object.fromEntries(
        Object.entries(state.list).filter((item) => {
          // console.log(item);
          return item[1].type == type;
        })
      );
      state.list_filter = newObjList;
    },
  },
  mutations: {
    ADD_LIST_ITEM({ list, list_filter }, item) {
      const id = Object.keys(list);
      const newObj = {
        ...item,
        id: +id[id.length - 1] + 1,
      };
      Vue.set(list, newObj.id, newObj); //куда, ключ, что вставить
      Vue.set(list_filter, newObj.id, newObj); //куда, ключ, что вставить
    },
    DELETE_LIST_ITEM({ list, list_filter }, idItem) {
      Vue.delete(list, idItem);
      Vue.delete(list_filter, idItem);
    },
  },
  actions: {
    delete_item({ commit }, id) {
      commit('DELETE_LIST_ITEM', id);
    },
    add_list_item({ commit }, item) {
      commit('ADD_LIST_ITEM', item);
    },
  },
};

export default budgetList;
