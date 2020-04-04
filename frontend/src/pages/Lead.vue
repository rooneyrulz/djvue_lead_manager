<template>
  <div id="lead">
    <p>{{ llLeads[0].name }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Lead',
  data() {
    return {};
  },
  computed: mapGetters(['llLeads'])
};
</script>

<style scoped></style>
