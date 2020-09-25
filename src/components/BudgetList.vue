<template>
  <div class="budget-list-wrap" id="BudgetList">
    <ElCard>
      <div slot="header" class="card-header" @click="onClickFilter">
        <span class="card-header-title"
          >{{ header }}: <span class="filter">{{ lastFilter }}</span></span
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
        <BudgetListItem :list-item="list" @deleteItem="deleteItemRout" />
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from '@/components/BudgetListItem';

export default {
  name: 'BudgetList',
  components: { BudgetListItem },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
    lastFilter: {
      type: String,
    },
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty List',
  }),
  methods: {
    deleteItemRout(id) {
      this.$emit('deleteItemRout', id);
    },
    onClickFilter(e) {
      if (
        e.target.parentElement.tagName == 'BUTTON' ||
        e.target.tagName == 'BUTTON'
      ) {
        let type = e.target.parentElement.dataset.type || e.target.dataset.type;
        // console.dir(e.target.parentElement.dataset.type);

        this.$emit('onClickFilter', type);
      }
    },
  },
  computed: {
    isEmpty() {
      // console.log(this.list, Object.keys(this.list).length);
      return !Object.keys(this.list).length || 'empty' in this.list;
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
