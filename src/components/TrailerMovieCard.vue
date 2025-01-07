<template>
    <div
    :style="{ backgroundImage: `url(${imageUrl})` }"
    class=" relative bg-cover bg-start max-w-[300px] h-[200px] bg-no-repeat rounded-[20px] overflow-clip">
        <div class="absolute right-[20px] top-[10px] text-white">
            <v-icon name="hi-eye" color="white"></v-icon>
            <span class="ml-2">{{ views }}</span>
        </div>
        <div class="blur_bg absolute bottom-[0] px-4 text-left bg-opacity-65 py-2 w-full">
            <div class="flex sm:items-center justify-between flex-col sm:flex-row">
                <div class="flex items-center gap-[5px] sm:gap-[20px]">
                    <v-icon name="hi-solid-play" color="white" scale="2"></v-icon>
                    <div class="font-bold">
                        <p>{{ name }}</p>
                    </div>
                </div>
                <div class="bg-white rounded-[20px] text-xs w-fit px-2 py-1 font-bold self-end">
                   Eps: {{ eps }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["imageUrl","views","name","eps"],
}
</script>

<style>
.blur_bg{
    background: #ffffff88;
    backdrop-filter: blur(16px);
    color: #09080A;
}
</style>