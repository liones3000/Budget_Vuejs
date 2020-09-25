<template>
  <div id="app">
    <Form @submitForm="onFormSubmit" />
    <TotalBalance :total="totalBalance" />
    <BudgetList
      :list="showlist()"
      :lastFilter="lastFilter"
      @deleteItemRout="onDeleteItem"
      @onClickFilter="onClickFilter"
    />
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList';
import TotalBalance from '@/components/TotalBalance';
import Form from '@/components/Form';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form,
  },
  data: () => ({
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
    list2: {},
    lastFilter: 'ALL',
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
  },
  methods: {
    showlist() {
      if (!Object.keys(this.list2).length) {
        return this.list;
      }
      return this.list2;
    },
    onDeleteItem(id) {
      this.$delete(this.list, id);
      this.onClickFilter(this.lastFilter);
    },
    onFormSubmit(data) {
      const id = Object.keys(this.list);
      const newObj = {
        ...data,
        id: +id[id.length - 1] + 1,
      };

      this.$set(this.list, newObj.id, newObj); //куда, ключ, что вставить
      this.onClickFilter('ALL');
    },
    onClickFilter(value) {
      this.lastFilter = value;
      // console.log('lastFilter:', this.lastFilter);
      if (value == 'ALL') {
        this.list2 = {};
        // console.log('ALL', this.list2);
        return;
      }
      const newObjList = Object.fromEntries(
        Object.entries(this.list).filter((item) => {
          return item[1].type == value;
        })
      );
      if (!Object.keys(newObjList).length) {
        this.list2 = { empty: true };
        return;
      }
      this.list2 = { ...newObjList };
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.green {
  color: #67c23a;
}
.red {
  color: #f56c6c;
}
.yellow {
  color: #e6a23c;
}
</style>
