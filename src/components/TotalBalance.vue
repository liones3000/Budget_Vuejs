<template>
  <div class="total-value" :class="toggleClass">
    Balance: {{ getTotalBalance }} <i :class="toggleIcon"></i>
  </div>
</template>

<script>
import { changeColorValue } from '../helpers/classHelper';
import { mapGetters } from 'vuex';

export default {
  name: 'TotalBalance',

  computed: {
    ...mapGetters('budgetList', ['getTotalBalance']),
    toggleClass: function() {
      return changeColorValue(null, this.getTotalBalance);
    },
    toggleIcon: function() {
      return changeColorValue('icon', this.getTotalBalance);
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
