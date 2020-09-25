<template>
  <div class="total-value" :class="toggleClass">
    Balance: {{ total }} <i :class="toggleIcon"></i>
  </div>
</template>

<script>
import { changeColorValue } from '../helpers/classHelper';

export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  computed: {
    toggleClass: function() {
      return changeColorValue(null, this.total);
    },
    toggleIcon: function() {
      return changeColorValue('icon', this.total);
    },
  },
};
</script>

<style scoped>
.total-value {
  max-width: 500px;
  margin: auto;
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px 0;
  text-align: center;
}
</style>
