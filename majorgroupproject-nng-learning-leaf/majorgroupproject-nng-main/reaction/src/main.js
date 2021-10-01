import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import firebase from 'firebase';
//intializes firebase
import './components/firebaseInit';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import store from './store/index'


//you want to import the specific icon you want to use to save page laod time
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'


//then add all the icons imported to the library to use them.
library.add(faLeaf,faChalkboardTeacher, faUsers,faGoogle,faPlusCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

let app;

//this is needed to keep the user signed in even if they leave the page
//also needed for vue router
firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    if(!app){
      app = new Vue({
        created () {
          //initializes AOS 
          AOS.init();
        },
        router,
        store,
        render: h => h(App)
      }).$mount("#app");
    }

    if(user.emailVerified){
      store.commit('setAuthDetails',user)
    }

  }else{
    store.commit('clearAuthDetails')
    if(!app){
      app = new Vue({
        created () {
          //initializes AOS 
          AOS.init();
        },
        router,
        store,
        render: h => h(App)
      }).$mount("#app");
    }
    router.push("/").catch((error)=>{})
    
  }
  
  
});


// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
