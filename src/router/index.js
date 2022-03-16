import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Results from '../views/Results.vue'
import MovieDetails from '../views/MovieDetails.vue'
import Explore from '../views/Explore.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Results
  },
  {
    path: '/details/:id',
    name: 'MovieDetails',
    component: MovieDetails
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
