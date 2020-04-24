<template>
  <div id="lead">
    <h2 v-if="loading">Loading..</h2>
    <h2 v-if="!lead">No lead found..</h2>
    <div v-if="!loading">
      <LeadItem :key="lead.email" :lead="lead" />
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
    ...mapActions(['getLead']),
  },
  computed: mapGetters(['lead', 'loading']),
  created() {
    this.getLead(this.$route.params.id);
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
