<script>
import DiscoverEventsCardVue from './DiscoverEventsCard.vue'
export default {
  data() {
    return {
      eventTypes: [
        {
          name: 'Online Events',
          img: '/online_events.jpg',
        },
        {
          name: 'Physical Events',
          img: '/physical_events.jpg',
        },
        {
          name: 'Hybrid Events',
          img: '/hybrid_events.jpg',
        },
      ],
    }
  },
  components: {
    DiscoverEventsCardVue,
  },
}
</script>

<template>
  <div
    class="discovery-section py-8 pb-[200px] sm:pt-[100px] sm:pb-[150px] w-[90%] flex m-auto justify-between flex-col md:flex-row gap-[20px]"
  >
    <div class="flex-initial w-full md:w-[35%] items-center mt-4 justify">
      <p class="text-left text-2xl mb-4 font-semibold max-w-[300px]">
        Discover a World of Events Tailored Just for You.
      </p>
      <button
        class="bg-purple-button border-0 py-[12px] px-[25px] rounded-lg text-white font-semibold hover:bg-button-hover transition-all"
      >
        View All Events
      </button>
    </div>
    <div class="boxes relative grid grid-cols-1 sm:grid-cols-2 w-full md:w-[80%] gap-4">
      <DiscoverEventsCardVue
        v-for="eventType in eventTypes"
        :key="eventType"
        :name="eventType?.name"
        :img="eventType?.img"
      />
    </div>
  </div>
</template>

<style>
.shadow_cover {
  @apply bg-black opacity-40 z-1 w-full h-full absolute top-0 block;
}
.boxes div {
  @apply overflow-hidden rounded-lg cursor-pointer;
}
.boxes div:hover img,
.boxes div:hover .shadow_cover {
  @apply scale-105 transition-all duration-200 ease-in-out;
}
.boxes div:hover .shadow_cover {
  @apply bg-light-purple;
}
</style>
