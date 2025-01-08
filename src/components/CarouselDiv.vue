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
export default {
  props: ["images"],
  data() {
    return {
      selected: '/slide_img1.jpg',
      intervalId: null,
      currentIndex: 0
    }
  },
  mounted(){
    this.slideCarousel();
  },
  methods: {
    slideCarousel(){
      this.intervalId = setInterval(()=>{
        this.selected = this.images[this.currentIndex]
        this.currentIndex = (this.currentIndex + 1) % this.images.length
      },3000)
    }
  },
  beforeDestroy() {
  if (this.intervalId) {
    clearInterval(this.intervalId); // Clear the interval when the component is destroyed
  }
},
}
</script>

<style></style>