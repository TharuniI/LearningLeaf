<template lang="">
    <div class="flex justify-center items-center flex-col">
        <div class="flex flex-row sm:space-x-2 md:space-x-4">
             <font-awesome-icon v-on:click="iconHandler(20)" :icon="['fas', 'leaf']"  class="rating fa-5x" v-bind:style="iconStyles[0]"/>
            <font-awesome-icon v-on:click="iconHandler(40)" :icon="['fas', 'leaf']"  class="rating fa-5x" v-bind:style="iconStyles[1]"/>
            <font-awesome-icon v-on:click="iconHandler(60)" :icon="['fas', 'leaf']"   class="rating fa-5x" v-bind:style="iconStyles[2]"/>
            <font-awesome-icon v-on:click="iconHandler(80)" :icon="['fas', 'leaf']"   class="rating fa-5x" v-bind:style="iconStyles[3]"/>
            <font-awesome-icon v-on:click="iconHandler(100)" :icon="['fas', 'leaf']"   class="rating fa-5x" v-bind:style="iconStyles[4]"/>
        </div>
        <input v-model = "sliderValue" type = "range" class = "range slider mt-5 mb-5 w-9/12 " name = "" value = "0" min = "0" max = "100" step="20"  v-on:change="updateSlider"> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            sliderValue:0,
            iconStyles:[
                {color:"#f1f1f1"},
                {color:"#f1f1f1"},
                {color:"#f1f1f1"},
                {color:"#f1f1f1"},
                {color:"#f1f1f1"},
            ]
            

        }
    },
    props:{
        handleRatingChange: Function
    },
    methods:{
        updateSlider:function(){

            let currentVal = this.sliderValue;
            let index = this.sliderValue/20;
            this.$emit('ratingChange', index);
            //update icon according to the value
            let newColor;
            if(currentVal <= 100){
                newColor = "#99FF85";
                
            }
            if(currentVal < 80){
                newColor = "#FFBF70";
            }
            if(currentVal < 40){
                newColor= "#FF7070";
            }
        

            let defaultColor = "#f1f1f1";
            document.documentElement.style.setProperty('--currentColor', newColor);
            for(let i=0;i<5;i++){
                if(i < index){
                    this.iconStyles[i].color = newColor;
                }else{
                    this.iconStyles[i].color = defaultColor;
                }
            }
        },
        iconHandler:function(newVal){
            this.sliderValue = newVal;

            let currentVal = this.sliderValue;
            let index = this.sliderValue/20;
            this.$emit('ratingChange', index);

            
            //determine the color based on the color
            let newColor;
            if(currentVal <= 100){
                newColor = "#99FF85";
                
            }
            if(currentVal < 80){
                newColor = "#FFBF70";
            }
            if(currentVal < 40){
                newColor= "#FF7070";
            }
        

            let defaultColor = "#f1f1f1";
            document.documentElement.style.setProperty('--currentColor', newColor);
            for(let i=0;i<5;i++){
                if(i < index){
                    this.iconStyles[i].color = newColor;
                }else{
                    this.iconStyles[i].color = defaultColor;
                }
            }
        },
        
       
    }
}
</script>
<style>
    /* lightgray: #f1f1f1 */
    /* red: #fd6b6b */
    /* orange: #ffb72f */
    /* blue:#bad6ef */
    :root{
        --lightGray: #f1f1f1;
        --red:#fd6b6b;
        --orange:#ffb72f;
        --blue:#bad6ef;
        --currentColor: var(--blue);
    }
    .rating{
        color: #f1f1f1;
        cursor:pointer;
    }
    .rating:hover{
        transform: scale(1.1);
    }

    /* styling for chrome browsers */
    .range{
        /* width: 400px; */
        height: 15px;
        -webkit-appearance: none;
        background: rgba(0, 0, 0, 0.8);
        outline: none;
        border-radius: 15px;
        box-shadow: 0 0 0 2px #151515, inset 0 0 5px #000;
        z-index: 3;
        overflow: hidden;
    }
    .range::-webkit-slider-thumb{
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: var(--currentColor);
        border: 4px solid #222;
        z-index: 2;
        box-shadow: -407px 0 0 400px var(--currentColor);
        cursor: pointer;
    }
    


</style>