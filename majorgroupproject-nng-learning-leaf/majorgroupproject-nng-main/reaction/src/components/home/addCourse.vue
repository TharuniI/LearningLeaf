//Component for the add Course modal that asks for the Course name and code of a teachers course

<template>
    <div>
        <!-- <button class= "text-white rounded bg-purple-300 hover:bg-purple-400 p-3 outline-none focus:outline-none" @click="toggleModal = !toggleModal">Add Course</button> -->
       
        <button @click="toggleModal = !toggleModal" class="text-pastel-green hover:text-red-500 transition:ease-in duration-300 modalBtn outline-none focus:outline-none">
                    <font-awesome-icon   :icon="['fas', 'plus-circle']" />
        </button>

        <div v-if="toggleModal" class="flex items-center justify-center fixed inset-0 z-50">
            <div class= "relative w-auto max-w-2xl">
                <div class= "bg-white w-full rounded-xl p-5">
                    <div class="pb-3">
                        <p class="text-2xl font-bold">Add Course</p>
                    </div>
                    <form>
                        <div class="mb-6">
                            <div class= "flex justify-between">
                                <label class= "block mb-2 text-sm">Course Name</label>
                            </div>
                            <input class= "w-full p-2 border border-grey-300 rounded-lg focus:outline-none focus:ring focus:ring-pastel-green" placeholder=""  @change="handleNameChange" v-bind:value="name"/>
                        </div>
                        <div class="mb-6">
                            <div class= "flex justify-between">
                                <label class= "block mb-2 text-sm">Course Code</label>
                            </div>
                            <input class= "w-full p-2 border border-grey-300 rounded-lg focus:outline-none focus:ring focus:ring-pastel-green" placeholder=""  @change="handleCodeChange" v-bind:value="code"/>
                        </div>
                    </form>
                    <div class= "flex justify-end rounded-xl">
                        <button class="p-2 mr-2 w-1/2 bg-transparent rounded-lg text-pastel-grey hover:bg-pastel-green hover:text-white focus:outline-none" v-on:click="addInfo">Save</button>
                        <button class="p-2  w-1/2 border-2 border-red-400 text-red-400 rounded-lg text-grey-400 hover:bg-red-400 hover:text-white focus:outline-none" @click="toggleModal = false">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="toggleModal" class="absolute inset-0 z-40 opacity-25 bg-black"></div>
    </div>
</template>

<script>
export default{
    name: "modal",
    data(){
        return{
            toggleModal: false,
            name: "",
            code: "",
        };
    },
    methods:{
        addInfo(){
            this.$emit('handleAddCourse', {name: this.name, code: this.code});
            this.name = ""
            this.code = ""
        },
        handleNameChange(e){
            this.name = e.target.value
        },
        handleCodeChange(e){
            this.code = e.target.value
        }
    }
}
</script>

<style scoped>
.modalBtn{
    font-size:3rem;

}
</style>