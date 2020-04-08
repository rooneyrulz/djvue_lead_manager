<template>
  <div id="lead">
    <p>
      Leads
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Lead',
  data() {
    return {};
  },
  methods: {
    ...mapActions(['getLeads']),
  },
  computed: mapGetters(['llLeads']),
  created() {
    this.getLeads();
  },
};
</script>

<style scoped></style>
