import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(Router)

const routes = [
  movieRouter,
  cinemaRouter,
  mineRouter,
  {
    path: '/*',
    redirect: '/movie'
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
