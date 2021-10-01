//Component for the signup card that asks for the Name, E-mail, password of the user
//They are also given the option to sign in which opens the login card.

<template lang="">
    <div class= "p-4 md:w-1/2 sm:w-full">
            <div class= "bg-white p-4 rounded-lg shadow-md text-black w-full">
                <h1 class="my-3 text-4xl font-bold tracking-wider text-center ">Welcome, Signup</h1>
                <div class="m-7">
                    <form>
                    <div class="mb-6">
                            <div class= "flex justify-between">
                                <label class= "block mb-2 text-sm">Name</label>
                            </div>
                            <input class= "w-full p-2 border border-grey-300 rounded-lg focus:outline-none focus:ring focus:ring-pastel-green" placeholder="Your Name"  v-model="user.name"/>
                        </div>
                        <div class="mb-6">
                            <label class= "block mb-2 text-sm">E-mail</label>
                            <input class= "w-full p-2 border border-grey-300 rounded-lg focus:outline-none focus:ring focus:ring-pastel-green" placeholder="Your Email" v-model="user.email"/>
                        </div>
                        <div class="mb-6">
                            <div class= "flex justify-between">
                                <label class= "block mb-2 text-sm">Password</label>
                            </div>
                            <input class= "w-full p-2 border border-grey-300 rounded-lg focus:outline-none focus:ring focus:ring-pastel-green" placeholder="Your Password" type="password" v-model="user.password"/>
                        </div>
                        
                        <div class= "mb-4 flex items-center justify-center">
                            <button class="mx-4 w-full h-10 px-4 font-semibold text-pastel-green bg-pastel-grey hover:bg-pastel-green hover:text-pastel-grey rounded-lg focus:outline-none" v-on:click="signUp">Register</button>
                        </div>
                        
                
                        <p class= "text-sm text-center text-gray-400">Already Have an Account? 
                            <router-link to="/Login">
                            <a href="#!" class="text-sm text-pastel-grey hover:text-pastel-green underline">Sign In </a>
                            </router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import {authenticateUser} from "../firebaseInit.js"

//import db from '../firebaseinit'
export default {
    data:()=>({
        user:{
            email:'',
            password:'',
            name:''
        }
    }),
    computed:mapGetters(['authError']),
    
    methods:{
        signUp:function(e){
           e.preventDefault()
            authenticateUser({
                authType:"signUpEmailPass",
                email:this.user.email,
                password:this.user.password,
                name:this.user.name
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