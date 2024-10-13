import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import NotFound from '../pages/NotFound.vue';
import Terms from '../pages/Terms.vue';
import Privacy from '../pages/Privacy.vue';
import SolutionsComponent from '../components/solutions-content/SolutionsComponent.vue';
import ConsultationComponent from '../components/consultation/ConsultationComponent.vue';
import TrainingComponent from '../components/training/TrainingComponent.vue';
import ProjectManagement from '../components/project-management/ProjectManagement.vue';

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash };
    }
    return { left: 0, top: 0 };
  },
  routes: [
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/training',
      name: 'Training',
      component: TrainingComponent,
    },
    {
      path: '/solutions',
      name: 'Solutions',
      component: SolutionsComponent,
    },
    {
      path: '/consultation',
      name: 'Consultation',
      component: ConsultationComponent,
    },
    {
      path: '/management',
      name: 'Management',
      component: ProjectManagement,
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy,
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms,
    },
  ],
});
router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
}).href;
export default router;
