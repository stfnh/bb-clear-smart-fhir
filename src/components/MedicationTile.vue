<template>
  <div class="column is-one-quarter">
    <div class="tile">
      <article class="tile notification is-warning">
        <div class="content">
          <p class="title">{{medication.medicationCodeableConcept.text}}</p>
          <p class="subtitle">{{medication.status}}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    medication: {
      type: Object
    }
  }
};
</script>

<style>
</style>
