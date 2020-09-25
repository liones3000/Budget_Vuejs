<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules">
      <ElFormItem label="Type" prop="type">
        <ElSelect
          class="type-select"
          v-model="formData.type"
          placeholder="Choose type ..."
        >
          <ElOption label="Income" value="INCOME" />
          <ElOption label="Outcome" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comment" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: 'Form',
  data() {
    let numberValid = (rule, value, callback) => {
      if (!isFinite(value)) {
        callback(new Error('Please input a number'));
      }
      if (this.formData.value == 0) {
        callback(new Error('Please input any number, but not 0'));
      }
      if (this.formData.type === 'OUTCOME' && this.formData.value > 0) {
        callback(new Error('Please input a - number'));
      }
      if (this.formData.type === 'INCOME' && this.formData.value < 0) {
        callback(new Error('Please input a + number'));
      }
      callback();
    };
    return {
      formData: {
        type: 'INCOME',
        comment: '',
        value: 0,
      },
      rules: {
        type: [
          { required: true, message: 'Please select type', trigger: 'blur' },
        ],
        comment: [
          {
            required: true,
            message: 'Please input comment',
            trigger: 'change',
          },
        ],
        value: [
          { required: true, message: 'Please input value', trigger: 'change' },
          { validator: numberValid, trigger: 'change' },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          this.$emit('submitForm', { ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}
.type-select {
  width: 100%;
}
</style>
