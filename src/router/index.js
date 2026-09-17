import { createRouter, createWebHistory } from 'vue-router'
import InvitationView from '../views/InvitationView.vue'

const routes = [
  {
    path: '/i/:slug',
    name: 'Invitation',
    component: InvitationView
  },
  {
    path: '/',
    component: {
      template: '<div class="p-10 text-center font-bold text-xl">Bienvenido a tu plataforma de invitaciones digitales. Usa una ruta de invitación válida (ej. /i/boda-ejemplo)</div>'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router