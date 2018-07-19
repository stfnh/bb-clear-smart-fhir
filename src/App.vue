<template>
  <div id="app" class="section">
    <pulse-loader v-if="loading"></pulse-loader>
    <div v-else>
      <patient-demographics :patient="patient"></patient-demographics>
      <hr />
      <allergies :allergies="allergyIntolerance"></allergies>
      <hr />
      <medications :medications="medications"></medications>
    </div>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

import Allergies from './components/Allergies';
import Medications from './components/Medications';
import PatientDemographics from './components/PatientDemographics';
import smartClient from './smartClient';

export default {
  name: 'app',
  components: {
    Allergies,
    Medications,
    PatientDemographics,
    PulseLoader
  },
  data() {
    return {
      patient: null,
      allergyIntolerance: null,
      medications: null,
      loading: true
    };
  },
  async mounted() {
    const smart = await smartClient();    
    this.patient = await smart.patient.read();
    this.allergyIntolerance = await smart.patient.api.fetchAll({ type: 'AllergyIntolerance'});
    const medications = await smart.patient.api.search({type: 'MedicationRequest', query: { patient: this.patient.id }});
    if (medications.status === 'success') {
      this.medications = medications.data.entry.map(m => m.resource);
    }
    this.loading = false;
  }
};
</script>

<style>
.tile .title {
  font-size: 18px;
}

.tile .subtitle {
  font-size: 16px;
}

.tile ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
