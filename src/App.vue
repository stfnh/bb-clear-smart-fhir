<template>
  <div id="app" class="section">
    <pulse-loader v-if="loading"></pulse-loader>
    <div v-else>
      <patient-demographics :patient="patient"></patient-demographics>
      <hr />
      <allergies :allergies="allergyIntolerance"></allergies>
    </div>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

import Allergies from './components/Allergies';
import PatientDemographics from './components/PatientDemographics';
import smartClient from './smartClient';

export default {
  name: 'app',
  components: {
    Allergies,
    PatientDemographics,
    PulseLoader
  },
  data() {
    return {
      patient: null,
      allergyIntolerance: null,
      loading: true
    };
  },
  async mounted() {
    const smart = await smartClient();    
    this.patient = await smart.patient.read();
    this.allergyIntolerance = await smart.patient.api.fetchAll({ type: 'AllergyIntolerance'});
    const medicationDispense = await smart.patient.api.fetchAll({ type: 'Condition' });
    console.log(medicationDispense)
    this.loading = false;
  }
};
</script>

<style>
</style>
