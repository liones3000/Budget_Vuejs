<template>
  <div class="budget-list-wrap" id="BudgetList">
    <ElCard>
      <div slot="header" class="card-header" @click="onClickFilter">
        <span class="card-header-title"
          >{{ header }}: <span class="filter">{{ lastfilter }}</span></span
        >
        <ElButton type="danger" size="mini" data-type="INCOME">
          sort +</ElButton
        >
        <ElButton type="danger" size="mini" data-type="OUTCOME">
          sort -</ElButton
        >
        <ElButton type="danger" size="mini" data-type="ALL"> show all</ElButton>
      </div>
      <template v-if="!isEmpty">
        <BudgetListItem />
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from '@/components/BudgetListItem';
import { mapGetters } from 'vuex';

export default {
  name: 'BudgetList',
  components: { BudgetListItem },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty List',
    lastfilter: 'ALL',
  }),
  methods: {
    onClickFilter(e) {
      if (
        e.target.parentElement.tagName == 'BUTTON' ||
        e.target.tagName == 'BUTTON'
      ) {
        this.lastfilter =
          e.target.parentElement.dataset.type || e.target.dataset.type;
        this.filterList(this.lastfilter);
      }
    },
  },
  computed: {
    ...mapGetters('budgetList', ['getList', 'filterList']),
    isEmpty() {
      // console.log(this.list, Object.keys(this.list).length);
      return !Object.keys(this.getList).length;
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-header-title {
  font-weight: bold;
  margin-right: 20px;
  flex-grow: 2;
}
.card-header .filter {
  font-weight: normal;
  font-style: italic;
  text-transform: lowercase;
}
</style>
