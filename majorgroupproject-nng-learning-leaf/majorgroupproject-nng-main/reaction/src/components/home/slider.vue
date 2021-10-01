<template>
    <body>
        <div>
            <h2 id = "rangeValue">{{this.sliderValue}}</h2>
            <div id = "fillRangeValue"></div>
            <input v-model = "sliderValue" type = "range" class = "range" name = "" value = "0" min = "0" max = "100" v-on:mousemove = "updateDiv"> 
            <div class="flex flex-row items-center justify-center justify-content:center w-full space-x-4 ">
            <button type="button" v-on:click="submitHandler" class=" z-10 flex my-2 py-2 px-2 w-28 bg-white border border-blue-400  hover:bg-white-700 text-blue-700 transition ease-in duration-200 text-center text-2xl  font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">Submit</button>
            <button type="button" v-on:click="moreHandler" class=" z-10 flex my-2 py-2 px-6 w-28 bg-blue-600 hover:bg-blue-700 text-white transition ease-in duration-200 text-center text-2xl  font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">More</button>
            </div>
        </div>
       
        
    </body>
</template>

<script>
    export default {
        data(){
            return {
                sliderValue: 0,
                styleObject: {
                    width: this.sliderValue+"%",
                },
            }
        }, 
        methods: {
            updateDiv: function(){
                document.getElementById('fillRangeValue').style.width = +this.sliderValue+"%";
                console.log('execution');
                //red
                if(this.sliderValue < 30){
                    document.querySelector("#fillRangeValue").style.background = "#cc0000";
                }
                //blue
                else if(this.sliderValue < 80){
                    document.querySelector("#fillRangeValue").style.background = "#00adff";
                }
                //green
                else{
                    document.querySelector("#fillRangeValue").style.background = "#00cc22";
                }
                
            },
            submitHandler:function(e){
                e.preventDefault();
                
            },
            moreHandler:function(e){
                e.preventDefault();
                this.$router.push('/MoreInfo');
            },
           


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');

    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #151515;
    }

    div {
        position: relative;
    }

    .range{
        position: relative;
        width: 400px;
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
        background: #00adff;
        border: 4px solid #222;
        z-index: 2;
        box-shadow: -407px 0 0 400px #00adff;
    }

    #rangeValue{
        position: relative;
        display: block;
        font-size: 6em;
        color: rgba(0, 0, 0, .8);
        font-weight: 800;
        z-index: 2;
        text-align: center;
    }
    #rangeValue:after{
        content: '%';
    }

    #fillRangeValue{
        position: fixed;
        top: 0;
        left: 0;
        width: var(--width);
        height: 100%;
        background: #00adff;
        z-index: 1;
    }

</style>
