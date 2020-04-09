<template>
  <div class="page-container">
    <md-app>
      <md-app-content>
        <Lead />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Lead from './pages/Lead';

export default {
  name: 'app',
  data: () => ({
    menuVisible: false,
  }),
  components: {
    Lead,
  },
};
</script>

<style lang="scss" scoped>
.md-app {
  // max-height: 100vh;
  height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
