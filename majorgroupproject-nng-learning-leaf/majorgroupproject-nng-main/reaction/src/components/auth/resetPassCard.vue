//Component for the forgot password card. Asks for the users email and sends the appropriate email
<template lang="">
    <div class= "p-4 md:w-1/2 sm:w-full">
            <div class= "bg-white p-4 rounded-lg shadow-md text-black w-full">
                <h1 class="my-3 text-4xl font-bold tracking-wider text-center ">Forgot Password</h1>
                <div class="m-7">
                    <form>
                        <div class="mb-6">
                            <label class= "block mb-2 text-sm">E-mail</label>
                            <input class= "w-full p-2 border border-grey-300 rounded-lg focus:outline-none focus:ring focus:ring-pastel-green" placeholder="Your Email" v-model="email"/>
                        </div>
                       
                        <div class= "mb-4 flex items-center justify-center">
                            <button class="mx-4 w-full h-10 px-4 font-semibold text-pastel-green bg-pastel-grey hover:bg-pastel-green hover:text-pastel-grey rounded-lg" v-on:click="handleClickResetPassword">Reset</button>
                        </div>
                        
                        </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {authenticateUser} from "../firebaseInit.js"

export default {
    data(){
        return {
            email:"",
        }
    },
    computed:mapGetters(['authError']),
    
    methods:{
       ...mapActions({
      resetPassword:"resetPassword"
      
    }),
    handleClickResetPassword(e){
        e.preventDefault()
        this.resetPassword({
            email:this.email,
      })
    },
    }
}
</script>
<style scoped>

</style>