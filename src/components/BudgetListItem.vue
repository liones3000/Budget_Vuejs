<template>
  <div class="list-item-wrap" id="BudgetListItem">
    <div class="list-item" v-for="(item, prop) in listItem" :key="prop">
      <span class="budget-comment">{{ item.comment }}</span>
      <span class="budget-value" :class="toggleClass(item.value)"
        >{{ item.value }} <i :class="toggleIcon(item.value)"></i
      ></span>
      <ElButton type="danger" size="mini" @click="showDialog(item.id)"
        >Delete</ElButton
      >
    </div>
    <DeleteDialog
      :isVisible.sync="dialogVisible"
      @cancelDialog="onCancelDialog"
      @isDelete="deleteItem"
    />
  </div>
</template>

<script>
import DeleteDialog from './DeleteDialog';
import { changeColorValue } from '../helpers/classHelper';

export default {
  name: 'BudgetListItem',
  components: { DeleteDialog },
  props: {
    listItem: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    dialogVisible: false,
    isConfirm: false,
    currentId: undefined,
  }),
  methods: {
    showDialog(id) {
      this.dialogVisible = true;
      this.currentId = id;
    },
    deleteItem() {
      this.$emit('deleteItem', this.currentId);
    },
    onCancelDialog(value) {
      this.dialogVisible = value;
    },
    onAcceptDialog() {
      this.deleteItem();
    },
    toggleClass(val) {
      return changeColorValue(null, val);
    },
    toggleIcon(val) {
      return changeColorValue('icon', val);
    },
  },
  computed: {},
};
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
</style>
