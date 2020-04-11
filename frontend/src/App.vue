<template>
  <div class="page-container">
    <md-app>
      <!-- <AppHeader :onClick="onClick" /> -->
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Lead Manager</span>
      </md-app-toolbar>
      <!-- <AppDrawer :menuVisible="menuVisible" /> -->
      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0"
          >Lead Manager</md-toolbar
        >
        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <Lead />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
// import AppHeader from './layouts/AppHeader';
// import AppDrawer from './layouts/AppDrawer';
import Lead from './pages/Lead';

export default {
  name: 'app',
  data: () => ({
    menuVisible: false,
  }),
  components: {
    Lead,
  },
  methods: {
    // onClick() {
    //   this.menuVisible = !this.menuVisible;
    // },
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
