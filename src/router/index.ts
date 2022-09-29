import { createRouter, createWebHistory } from 'vue-router'
// import Nav from "../components/HelloWorld.vue";
import Home from "../views/Home.vue"
import About from "../views/About.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})

export default router