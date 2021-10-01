//Component for the lecture card to display the the teachers lecture name along with any other notes.
//Once clicked opens up the reviews of that given lecture material along with a graph

<template>
  <div class="p-4 flex flex-col items-center" v-on:click="handleCardClick">
    <div
      class="bg-gray-300 h-36 w-full rounded-lg shadow-md bg-cover bg-center bg-image"
    >
      <img class="relative m-2 logo h-7 w-auto sm:h-7" src="../../assets/leaf.svg" alt="">
    </div>

    <div class="w-5/6 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
        <div class="header-content">
          <div class="text-gray-400 text-left">{{name}}</div>
          <div class="font-semibold text-left">{{notes}}</div>

          <div></div>
        </div>
    </div>
  </div>
</template>


<script>
export default {
    name:'LectureCard',
    props: {
        name:{
            type: String,
        },
        notes:{
            type: String,
        },
        lecId:{
          type:String
        }
    },
    methods:{
      handleCardClick(){
        this.$router.push( { name:  `lecture`, params: {id:this.lecId }})

      }
    }
}
</script>

<style scoped>
  .bg-image{
      background-image: url("../../assets/lecture.jpg");
  }
</style>