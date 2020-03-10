<template>
  <div id="lead">Leads</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Lead',
  components: {},
  props: {},
  data: () => ({
    leads: []
  }),
  methods: {
    getLeads: async function() {
      const { data } = await axios.get('http://localhost:8000/api/leads');
      this.leads = data;
    }
  }
};
</script>

<style scoped></style>
