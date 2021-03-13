import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import toyApp from '../views/toyApp.vue'
import toyDetails from '../views/toyDetails.vue'
import toyEdit from '../views/toyEdit.vue'
import auth from '../views/auth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/about',
    name: 'About',
    component: about
  },
  {
    path: '/login',
    name: 'login',
    component: auth
  },
  {
    path: '/toy',
    name: 'toyApp',
    component: toyApp
  },
  {
    path: '/toy/details/:toyId',
    name: 'toyDetails',
    component: toyDetails
  },
  {
    path: '/toy/edit/:toyId?',
    name: 'toyEdit',
    component: toyEdit
  },
]

const router = new VueRouter({
  routes
})

export default router
