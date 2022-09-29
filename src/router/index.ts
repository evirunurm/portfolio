import { createRouter, createWebHistory } from 'vue-router'
// import Nav from "../components/HelloWorld.vue";
import Home from "../views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})

export default router