<template>
  <div class="column is-one-quarter">
    <div class="tile">
      <article class="tile notification is-danger">
        <div class="content">
          <p class="title">{{ allergy.code.text }}</p>
          <p class="subtitle">{{ allergy.clinicalStatus.coding[0].code }}</p>
          <div class="content">
            <ul>
              <li v-if="allergy.category">{{ allergy.category.join(', ') }}</li>
              <li>{{ allergy.recordedDate | formatDate }}</li>
              <li v-if="allergy.criticality">{{ allergy.criticality }}</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    allergy: {
      type: Object
    }
  },
  filters: {
    upperCase(input) {
      return input.toUpperCase();
    },
    formatDate(date) {
      return moment(new Date(date)).format('YYYY-MM-DD');
    }
  }
};
</script>
