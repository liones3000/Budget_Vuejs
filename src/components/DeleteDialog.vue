<template>
  <div class="dialog-wrap">
    <ElDialog :title="titleDialog" :visible.sync="isVisible" width="30%" center>
      <span>Are you sure you want to delete?</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="cancelDialog">No</el-button>
        <el-button type="danger" @click="onConfirm">Yes</el-button>
      </span>
    </ElDialog>
  </div>
</template>

<script>
export default {
  name: 'DeleteDialog',
  props: {
    isVisible: { type: Boolean, required: true },
  },
  data: () => ({
    titleDialog: 'Delete item',
  }),
  methods: {
    cancelDialog() {
      this.$emit('cancelDialog', false);
    },
    onConfirm() {
      this.$emit('isDelete');
      this.cancelDialog();
    },
  },
};
</script>

<style scoped></style>
