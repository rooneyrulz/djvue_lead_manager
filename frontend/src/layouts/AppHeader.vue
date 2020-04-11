<template>
  <md-app-toolbar md-mode="reveal" class="md-primary">
    <md-button class="md-icon-button" @click="onClick">
      <md-icon>menu</md-icon>
    </md-button>
    <span class="md-title">Lead Manager</span>
  </md-app-toolbar>
</template>

<script>
export default {
  name: 'app-header',
  props: ['onClick'],
};
</script>

<style></style>
