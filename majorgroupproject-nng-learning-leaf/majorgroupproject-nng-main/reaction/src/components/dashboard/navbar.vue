//Component that has contains a responsive navbar that has links to sign out, display profile info
//and a link to go back to the dashboard
//Component from the Tailwind UI documentation -- https://tailwindui.com/preview
//Added functional Javascript, Transitions, and Routing

<template lang="">
    <div>
    <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <router-link to="/Dashboard" exact>
            <img class="logo h-10 w-auto sm:h-10" src="../../assets/leaf.svg" alt="">
            </router-link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link to="/Dashboard" exact>
                <a href="#" class="text-pastel-grey hover:bg-pastel-grey hover:text-pastel-green px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
              </router-link>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">

            <div class="ml-3 relative">
              <div>
                <button v-on:click="dropDownToggle" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
 <img v-if="userInformation.picture" :src="userInformation.picture" :key="userInformation.picture" class="logo h-8 w-8 rounded-full">
                  <img v-else src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"  class="logo h-8 w-8 rounded-full">                </button>
              </div>
              
               <transition
              enter-active-class="transition ease-out duration-100"
              enter-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75 transform"
              leave-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
              >
              <div v-show="showDropdown" class="origin-top-right absolute right-0 mt-2 w-48 border-2 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">

                <button  @click="handleSignOut" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</button>
              </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button v-on:click="menuToggle" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">Open main menu</span>
            
            <svg v-bind:class="{hidden:menuOpen, block:!menuOpen}" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            
            <svg v-bind:class="{block:menuOpen, hidden:!menuOpen}" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

  
    <div v-bind:class="{block:menuOpen,hidden:!menuOpen}" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link to="/Dashboard" exact>
          <a class="bg-pastel-grey text-pastel-green block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
        </router-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
             <img v-if="userInformation.picture" :src="userInformation.picture" :key="userInformation.picture" class="h-10 w-10 rounded-full">
            <img v-else src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"  class="h-10 w-10 rounded-full">
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-pastel-gray">{{userInformation.name}}</div>
            <div class="text-sm font-medium leading-none text-gray-400">{{userInformation.email}}</div>
          </div>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <a class="block px-3 py-2 rounded-md text-base font-medium text-pastel-grey hover:text-pastel-green hover:bg-pastel-grey" v-on:click="handleSignOut">Sign out</a>
        </div>
      </div>
    </div>
    </nav>
    </div>
</template>
<script>
import { signOut } from "../firebaseInit.js";
import addCourseModal from "../home/addCourse.vue";
import {mapGetters, mapActions} from 'vuex'

export default {
  components:{
    addCourseModal
  },
    data: ()=> ({
        showDropdown:false,
        menuOpen:false,
    }),
    computed:mapGetters(['userInformation']),
    methods:{
        dropDownToggle:function(){
            return this.showDropdown = !this.showDropdown;
        },
        menuToggle:function(){
            return this.menuOpen = !this.menuOpen;
        },
        handleSignOut(){
          signOut()
        }
       
    },
}

</script>
<style scoped>

</style>