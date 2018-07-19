<template>
  <div class="container">
    <h1 class="title">Allergies</h1>
    <div class="columns is-multiline">
      <allergy-card v-for="allergy in allergies" :key="allergy.id" :title="allergy.code.text">        
        <ul>
          <li>clinical status <strong>{{allergy.clinicalStatus}}</strong></li>
          <li>asserted date <strong>{{allergy.assertedDate | formatDate}}</strong></li>
          <li>verification status <strong>{{allergy.verificationStatus}}</strong></li>
          <li v-if="allergy.criticality">criticality <strong>{{allergy.criticality}}</strong></li>
          <li v-if="allergy.category">category <strong>{{allergy.category.join()}}</strong></li>
        </ul>
      </allergy-card>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import AllergyCard from './AllergyCard';
export default {
  props: {
    allergies: {
      type: Array
    }
  },
  components: {
    AllergyCard
  },
  filters: {
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    }
  }
}
</script>

<style>
</style>
