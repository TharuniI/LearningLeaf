//Component for the review card to display the students rating and the comment they leave behind


<template>
<div>
    <div v-if="this.rating == '1'" data-aos="" data-aos-delay="50" data-aos-duration="1000" class="flex items-center justify-center p-5">
        <div class="w-full mx-auto rounded-lg bg-white border-2 border-pastel-red shadow-lg p-5 text-gray-800 ">
            <div class="w-full pt-1 -mt-16 mx-auto">
                <a class="block relative">
                        <div class="bg-pastel-grey text-pastel-red border-pastel-red border-2  flex items-center justify-center mx-auto rounded-full h-20 w-20 ">
                            <h1 class="font-bold text-3xl ">{{rating}}/5</h1>
                        </div>
                </a>
            </div>
            <div class="w-full mb-5">
                <div class="text-3xl text-pastel-grey text-left h-3">
                    “
                </div>
                <p class="text-lg text-gray-600 text-center px-5">
                    {{comment}}
                </p>
                <div class="text-3xl text-pastel-grey text-right h-3 -mt-3">
                    ”
                </div>
            </div>
        </div>
    </div>

    <div v-if="this.rating == '2'" data-aos="" data-aos-delay="50" data-aos-duration="1000" class="flex items-center justify-center p-5">
        <div class="w-full mx-auto rounded-lg bg-white border-2 border-pastel-red shadow-lg p-5 text-gray-800 ">
            <div class="w-full pt-1 -mt-16 mx-auto">
                <a class="block relative">
                        <div class="bg-pastel-grey text-pastel-red border-pastel-red border-2  flex items-center justify-center mx-auto rounded-full h-20 w-20 ">
                            <h1 class="font-bold text-3xl ">{{rating}}/5</h1>
                        </div>
                </a>
            </div>
            <div class="w-full mb-5">
                <div class="text-3xl text-pastel-grey text-left h-3">
                    “
                </div>
                <p class="text-lg text-gray-600 text-center px-5">
                    {{comment}}
                </p>
                <div class="text-3xl text-pastel-grey text-right h-3 -mt-3">
                    ”
                </div>
            </div>
        </div>
    </div>

    <div v-if="this.rating == '3'" data-aos="" data-aos-delay="50" data-aos-duration="1000" class="flex items-center justify-center p-5">
        <div class="w-full mx-auto rounded-lg bg-white border-2 border-pastel-orange shadow-lg p-5 text-gray-800 ">
            <div class="w-full pt-1 -mt-16 mx-auto">
                <a class="block relative">
                        <div class="bg-pastel-grey text-pastel-orange border-pastel-orange border-2  flex items-center justify-center mx-auto rounded-full h-20 w-20 ">
                            <h1 class="font-bold text-3xl ">{{rating}}/5</h1>
                        </div>
                </a>
            </div>
            <div class="w-full mb-5">
                <div class="text-3xl text-pastel-grey text-left h-3">
                    “
                </div>
                <p class="text-lg text-gray-600 text-center px-5">
                    {{comment}}
                </p>
                <div class="text-3xl text-pastel-grey text-right h-3 -mt-3">
                    ”
                </div>
            </div>
        </div>
    </div>

    <div v-if="this.rating == '4'" data-aos="" data-aos-delay="50" data-aos-duration="1000" class="flex items-center justify-center p-5">
        <div class="w-full mx-auto rounded-lg bg-white border-2 border-pastel-orange shadow-lg p-5 text-gray-800 ">
            <div class="w-full pt-1 -mt-16 mx-auto">
                <a class="block relative">
                        <div class="bg-pastel-grey text-pastel-orange border-pastel-orange border-2  flex items-center justify-center mx-auto rounded-full h-20 w-20 ">
                            <h1 class="font-bold text-3xl ">{{rating}}/5</h1>
                        </div>
                </a>
            </div>
            <div class="w-full mb-5">
                <div class="text-3xl text-pastel-grey text-left h-3">
                    “
                </div>
                <p class="text-lg text-gray-600 text-center px-5">
                    {{comment}}
                </p>
                <div class="text-3xl text-pastel-grey text-right h-3 -mt-3">
                    ”
                </div>
            </div>
        </div>
    </div>

    <div v-if="this.rating == '5'" data-aos="" data-aos-delay="50" data-aos-duration="1000" class="flex items-center justify-center p-5">
        <div class="w-full mx-auto rounded-lg bg-white border-2 border-pastel-green shadow-lg p-5 text-gray-800 ">
            <div class="w-full pt-1 -mt-16 mx-auto">
                <a class="block relative">
                        <div class="bg-pastel-grey text-pastel-green border-pastel-green border-2  flex items-center justify-center mx-auto rounded-full h-20 w-20 ">
                            <h1 class="font-bold text-3xl ">{{rating}}/5</h1>
                        </div>
                </a>
            </div>
            <div class="w-full mb-5">
                <div class="text-3xl text-pastel-grey text-left h-3">
                    “
                </div>
                <p class="text-lg text-gray-600 text-center px-5">
                    {{comment}}
                </p>
                <div class="text-3xl text-pastel-grey text-right h-3 -mt-3">
                    ”
                </div>
            </div>
        </div>
    </div>
    
</div>


</template>

<script>
export default {
    name:'reviewCard',
    props: {
        rating:{
            type:String,
        },
        comment:{
            type:String,
        },
      
    },
}
</script>