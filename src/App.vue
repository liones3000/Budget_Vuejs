<template>
  <div id="app">
    <Form />
    <TotalBalance />
    <BudgetList />
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
    list2: {},
    lastFilter: 'ALL',
  }),
  computed: {},
  methods: {
    showlist() {
      if (!Object.keys(this.list2).length) {
        return this.list;
      }
      return this.list2;
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
