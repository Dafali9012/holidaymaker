import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import MyBookings from '../views/MyBookings.vue'
import Room from '../views/Room.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
    },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/mybookings',
    name: 'MyBookings',
    component: MyBookings
  },
  {
    path: '/room/:room',
    name: 'Room',
    component: Room
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
