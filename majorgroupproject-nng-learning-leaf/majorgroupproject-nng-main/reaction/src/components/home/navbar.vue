//Component that has contains a responsive navbar that has links to sign in and about us link
//Component from the Tailwind UI documentation -- https://tailwindui.com/preview
//Added functional Javascript, Transitions, and Routing

</transition>
<template lang="">
<div class="relative bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <router-link to="/" exact>
          <a href="#">
            <img class="h-10 w-auto sm:h-10" src="../../assets/LearningLeaf.svg" alt="">
          </a>
        </router-link>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button v-on:click="mobileMenuToggle" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
          <span class="sr-only">Open menu</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav class="hidden md:flex space-x-10">
      
        <router-link to="/About" exact>
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
            About Us
          </a>
        </router-link>
       
      </nav>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <router-link to="/Login" exact>
        <a class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
          Sign in
        </a>
        </router-link>
        <router-link to="/SignUp">
        <a class="ml-8 whitespace-nowrap inline-flex items-center justify-center p-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-pastel-green hover:text-pastel-grey bg-pastel-grey hover:bg-pastel-green">
          Sign up
        </a>
        </router-link>
      </div>
    </div>
  </div>

   <transition
              enter-active-class="duration-200 ease-out"
              enter-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="duration-100 ease-in"
              leave-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
              >
  
  <div v-show="showMobileMenu" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div class="pt-5 pb-6 px-5">
        <div class="flex items-center justify-between">
          <div>
              <router-link to="/" exact>
                   <img class="h-10 w-auto sm:h-10" src="../../assets/LearningLeaf.svg" alt="">
              </router-link>
          </div>
          <div class="-mr-2">
            <button v-on:click="mobileMenuToggle" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="py-6 px-5 space-y-6">
        <div class="grid grid-cols-2 gap-y-4 gap-x-8">
            <router-link to="/About" exact>
                <a class="text-base font-medium text-gray-900 hover:text-gray-700">
                    About Us
                </a>
            </router-link>
        </div>
        <div>
          <router-link to="/SignUp"><a class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-pastel-green bg-pastel-grey">
            Sign up
          </a> </router-link>
          <p class="mt-6 text-center text-base font-medium text-gray-500">
            Existing User?
            <router-link to="/Login" ><a class="text-pastel-grey">
              Sign in
            </a></router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
  </transition>
  
</div>
</template>
<script>
export default {
  data: ()=>({
    showMobileMenu:false,

  }),
  methods:{
    mobileMenuToggle:function(){
      this.showMobileMenu = !this.showMobileMenu;
    }


  }
    
}
</script>
<style lang="">
    
</style>