<template>
  <md-card md-with-hover>
    <md-ripple>
      <md-card-header>
        <div class="md-title">{{ lead.name }}</div>
      </md-card-header>

      <md-card-content> </md-card-content>

      <md-card-actions>
        <md-button>View</md-button>
        <md-button>Delete</md-button>
      </md-card-actions>
    </md-ripple>
  </md-card>
</template>

<script>
export default {
  name: 'lead',
  props: ['lead'],
};
</script>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
