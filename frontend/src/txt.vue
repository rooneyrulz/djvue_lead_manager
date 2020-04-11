<template>
  <div class="page-container">
    <md-app>
      <AppHeader :onClick="onClick" />
      <AppDrawer :menuVisible="menuVisible" />
      <md-app-content>
        <Lead />
        <Lead />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import AppHeader from '@/layouts/AppHeader';
import AppDrawer from '@/layouts/AppDrawer';
import Lead from './pages/Lead';

export default {
  name: 'app',
  data: () => ({
    menuVisible: false,
  }),
  components: {
    AppHeader,
    AppDrawer,
    Lead,
  },
  methods: {
    onClick() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style lang="scss">
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
