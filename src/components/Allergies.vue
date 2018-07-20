<template>
  <div class="container">
    <h1 class="title">Allergies and Intolarences</h1>
    <div class="columns is-multiline">
      <allergy-tile
        v-for="allergy in allergies"
        :key="allergy.id"
        :allergy="allergy"
      >        
      </allergy-tile>
    </div>
  </div>
</template>

<script>
import AllergyTile from './AllergyTile';

export default {
  props: {
    allergies: {
      type: Array
    }
  },
  components: {
    AllergyTile
  }
};
</script>

<style>
</style>
