//Component for the login card that asks for the E-mail and password of the user
//They are also given the option to sign up which opens the signup card, or sign in with Google
//The user also has the option to open the forgot password, if they forgot their password

<template lang="">
    <div class= "p-4 md:w-1/2 sm:w-full">
            <div class= "bg-white p-4 rounded-lg shadow-md text-black w-full">
                <h1 class="my-3 text-4xl font-bold tracking-wider text-center ">Sign In</h1>
                <div class="m-7">
                    <form>
                        <div class="mb-6">
                            <label class= "block mb-2 text-sm">E-mail</label>
                            <input class= "w-full p-2 border border-grey-300 rounded-lg focus:outline-none focus:ring focus:ring-pastel-green" placeholder="Your Email" v-model="email"/>
                        </div>
                        <div class="mb-6">
                            <div class= "flex-col sm:flex-row flex justify-between">
                                <label class= "block mb-2 mr-2 text-sm">Password</label>
                                <router-link to="/ResetPassword">
                                <a href="#!" class= "text-sm text-pastel-grey hover:text-pastel-green text-right">Forgot Password?</a>
                                </router-link>
                            </div>
                            <input class= "w-full p-2 border border-grey-300 rounded-lg focus:outline-none focus:ring focus:ring-pastel-green" placeholder="Your Password" type="password" v-model="password"/>
                        </div>
                        <div class= "mb-4 flex items-center justify-center">
                            <button class="mx-4 w-full h-10 px-4 font-semibold text-pastel-green bg-pastel-grey hover:bg-pastel-green hover:text-pastel-grey focus:outline-none rounded-lg" v-on:click="handleClickSignIn">Sign In</button>
                        </div>
                        <div class="flex flex-col space-y-5">
                            <span class="flex items-center justify-center space-x-3">
                                <span class="h-px bg-gray-400 w-1/3"></span>
                                <span class="font-normal text-gray-400 text-center ">or Sign In with</span>
                                <span class="h-px bg-gray-400 w-1/3"></span>
                            </span>
                        </div>
                        <div class= "m-4 p-0.5 flex items-center justify-center bg-gradient-to-r from-blue-300 via-yellow-200 to-red-300 rounded-lg">
                            <button class="w-full h-10 px-4 text-pastel-grey bg-gradient-to-r from-white to-white hover:from-blue-300 hover:via-yellow-200 hover:to-red-300 hover:text-white rounded-lg" v-on:click="handleClickGoogleSignIn">
                                <font-awesome-icon :icon="['fab', 'google']" />
                            </button>
                        </div>
                        <p class= "text-sm text-center text-gray-400">Don't have an account yet? 
                            <router-link to="/SignUp">
                            <a href="/SignUp" class="text-sm text-pastel-grey hover:text-pastel-green underline">Sign Up </a>
                            </router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'

import {authenticateUser} from "../firebaseInit.js"

//import db from '../firebaseinit'
export default {
    data(){
        return {
            email:'',
            password:''
        }
    },
    computed:mapGetters(['authError']),

    methods:{
    handleClickSignIn(e){
        e.preventDefault()
        console.log("atempting sign in")
        authenticateUser({
            authType:"signInEmailPass",
            email:this.email,
            password:this.password
      })
    },
    handleClickGoogleSignIn(e){
        e.preventDefault()
        authenticateUser({
            authType:"signInGoogle",
      })
      
     
    }
  }

}
</script>
<style scoped>

</style>