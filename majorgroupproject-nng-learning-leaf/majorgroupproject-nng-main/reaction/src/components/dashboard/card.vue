//Component for the course card to display the the teachers courses along with the course code.
//Once clicked opens up the lectures associated with that given course

<template>
  <div class="p-4 flex flex-col items-center" v-on:click="handleCardClick" >
    <div
      class="bg-gray-300 h-36 w-full rounded-lg shadow-md bg-cover bg-bottom bg-image"
    >
       <img class="relative m-2 logo h-7 w-auto sm:h-7" src="../../assets/leaf.svg" alt="">
    </div>

    <div class="w-5/6 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
        <div class="header-content">
          <div class="text-gray-400 text-left">{{courseCode}}</div>
          <div class="font-semibold text-left">{{courseName}}</div>
          <div></div>
        </div>
      
    </div>
  </div>
</template>


<script>
export default {
    name:'Card',
    props: {
        courseName:{
            type: String,
        },
        courseCode:{
            type: String,
        },
        courseId:{
          type:String
        }
    },
    methods:{
      handleCardClick(){
        console.log(this.courseName)
        this.$router.push( { name:  `course`, params: { id:this.courseId } })

      }
    }
}
</script>

<style scoped>
  .bg-image{
    background-image: url(../../assets/course.jpg);
  }
</style>