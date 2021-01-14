<template>
  <div class="notification is-danger">
    <strong>{{ error.statusText }}</strong
    ><br />
    <span v-if="errorDiagnostics">{{ errorDiagnostics }}</span>
  </div>
</template>

<script>
export default {
  props: ['error'],
  computed: {
    errorDiagnostics() {
      if (this.error.responseJSON && this.error.responseJSON.issue) {
        return this.error.responseJSON.issue
          .map((i) => i.diagnostics)
          .join('; ');
      } else {
        return this.error.toString();
      }
    }
  }
};
</script>

<style></style>
