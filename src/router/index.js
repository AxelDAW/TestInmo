import { createRouter, createWebHistory } from 'vue-router'
import Filtros from '../components/Filtros.vue'
import Casa from '../views/Casa.vue'
import Chalet from '../views/Chalet.vue'
import Piso from '../views/Piso.vue'
import PaginaPrincipal from '../views/PaginaPrincipal.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PaginaPrincipal
    },
    {
      path: '/about',
      name: 'about',
    
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Filtros',
      name: 'Filtros',
      component: Filtros
    },
    {
      path: '/Casa/:id',
      name: 'casa',
      props: true,
      component: Casa
    },
    {
      path: '/Chalet/:id',
      name: 'chalet',
      props: true,
      component: Chalet
    },
    {
      path: '/Piso/:id',
      name: 'piso',
      props: true,
      component: Piso
    },
    {
      path: '/PaginaPrincipal',
      name: 'paginaprincipal',
      component: PaginaPrincipal
    }
  ]
})

export default router
