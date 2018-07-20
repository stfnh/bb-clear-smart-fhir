<template>
  <div class="container">
    <h1 class="title">Medication requests</h1>
      <div class="columns is-multiline">
          <medication-tile
            v-for="medication in medications"
            :key="medication.id"
            :medication="medication">
          </medication-tile>        
        </div>

      </div>
</template>

<script>
import MedicationTile from './MedicationTile';
export default {
  props: {
    medications: {
      type: Array
    }
  },
  components: {
    MedicationTile
  },
  filters: {}
};
</script>

<style>
</style>
