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
  beforeCreate() {
    console.log('running before create');
  },
  async created() {
    const { data } = await axios.get('/leads/');
    // this.leads = data;
    console.log(data);
  }
};
</script>

<style scoped></style>
