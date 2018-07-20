<template>
  <div class="notification is-danger">
    <strong>{{error.statusText}}</strong><br />
    <span v-if="errorDiagnostics">{{errorDiagnostics}}</span>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object
    }
  },
  computed: {
    errorDiagnostics() {
      if (this.error.responseJSON && this.error.responseJSON.issue) {
        return this.error.responseJSON.issue.map(i => i.diagnostics).join('; ');
      }
      return null;
    }
  }
};
</script>

<style>
</style>
