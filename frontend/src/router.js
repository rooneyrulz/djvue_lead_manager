import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// COMPONENTS
import Leads from '@/pages/Leads';
import Lead from '@/pages/Lead';

export default new Router({
  routes: [
    { path: '/leads', name: 'leads', component: Leads },
    { path: '/lead/:id', name: 'lead', component: Lead },
  ],
});
