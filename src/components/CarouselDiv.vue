<template>
    <div class="relative h-full">
      <img v-for="image in images" :key="image" :src="image" :alt="image" class="w-full h-full object-cover object-top"
        :class="selected === image ? 'block transition-opacity ease-in-out delay-150 opacity-100' : 'hidden opacity-0'" />
      <div class="absolute bottom-[70px] -translate-x-[50%] left-[50%]">
        <div class="text-center text-white max-w-[300px] pb-6">
          <p class="pb-2">No Hazzles</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        </div>
        <div class="flex gap-[12px] items-center justify-center">
          <div class="w-[20px] h-[20px] flex items-center justify-center rounded-full"
            :class="selected === image ? 'border-2 border-faint_green' : 'border-none'" v-for="image in images" :key="image"
            @click="selected = image">
            <button class="rounded-full w-[60%] h-[60%]"
              :class="selected === image ? 'bg-green' : 'bg-faint_green'"></button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
export default {
  props: ["images"],

  setup(props){
    const selected = ref(props.images[0])
    const intervalId = ref(null)
    const currentIndex = ref(0)

    onMounted(()=>{
      slideCarousel()
    })

    // Methods
    const slideCarousel = () =>{
      intervalId.value = setInterval(()=>{
        selected.value = props.images[currentIndex.value]
        currentIndex.value = (currentIndex.value + 1) % props.images.length
      },3000)
    }

    onBeforeUnmount(()=>{
      if (intervalId.value) {
        clearInterval(intervalId.value);
      }
    })

    return{
      selected
    }
  }
  
}
</script>

<style></style>