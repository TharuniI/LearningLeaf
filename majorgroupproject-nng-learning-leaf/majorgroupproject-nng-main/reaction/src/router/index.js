import firebase from 'firebase'
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/aboutPage.vue'
import dashboard from '../views/dashboard.vue'
import emailSent from '../views/emailSent.vue'
import Home from '../views/Home.vue'
//all auth pages
import Login from '../views/login.vue'
import more from '../views/more.vue'
import resetPass from '../views/resetPass.vue'
import signUp from '../views/signUp.vue'
import slider from '../views/sliderPage.vue'
import course from '../views/course.vue'
import lecture from '../views/lecture.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/ResetPassword',
    name: 'ResetPassword',
    component: resetPass
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: signUp
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: dashboard,
    meta:{
      requiresAuth:true,
    }
  },
  {
    path: '/EmailSent',
    name: 'EmailSent',
    component: emailSent
  },
  {
    path: '/Slider',
    name: 'Slider',
    component: slider,
    props: true,
  },
  {
    path: '/MoreInfo',
    name: 'More',
    component: more,
    props: true,

  },
  {
    path: '/Courses/:id',
    name: 'course',
    component: course,
    props: true,
  },
  {
    path: '/Lectures/:id',
    name: 'lecture',
    component: lecture,
    props: true,
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  //add an attribute to the user if the user is a instructor then only then show them the instructors page

  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {

    // Check if logged user
    if (firebase.auth().currentUser) {
      console.log("signed in")
      // Go to appropriate page 
      next();
    }
    else {
      // if the user is not authenicated then we return them to the home page
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    }
  }else{
    if(firebase.auth().currentUser && (to.name=="Login" || to.name=="SignUp" || to.name=="EmailSent") ){
      next({
        path: '/Dashboard',

      });
    }else{
      next();
    }
  }
  
});

export default router

// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// }