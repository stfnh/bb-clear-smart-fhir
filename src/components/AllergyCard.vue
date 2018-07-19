<template>
  <div class="column is-one-quarter">
    <div class="card allergy">
      <header class="card-header">
      </header>
        <p class="card-header-title">
          {{title | upperCase}}
        </p>
      <div class="card-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  filters: {
    upperCase(input) {
      return input.toUpperCase();
    }
  }
}
</script>

<style>
  .allergy .card-header-title,
  .card.allergy {
    color: white;
    background: #c33;
  }

  .allergy .card-content {
    padding-top: 0px;
  }

  .allergy .card-header-title {
    padding-left: 24px;
  }

  .allergy strong {
    color: white;
  }
</style>
