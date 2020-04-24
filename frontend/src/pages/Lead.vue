<template>
  <div id="lead">
    <h2 v-if="loading">Loading..</h2>
    <div v-if="!loading">
      <LeadItem :key="lead.email" v-for="lead in llLeads" :lead="lead" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

// COMPONENTS
import LeadItem from '@/components/LeadItem';

export default {
  name: 'Lead',
  data() {
    return {};
  },
  components: {
    LeadItem,
  },
  methods: {
    ...mapActions(['getLeads']),
  },
  computed: mapGetters(['llLeads', 'loading']),
  created() {
    this.getLeads();
  },
};
</script>

<style scoped>
#lead {
  align-content: center;
  align-items: center;
  text-align: center;
}
</style>
