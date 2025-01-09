<template>
  <div class="bg-white shadow-lg w-full rounded-sm px-6 py-6">
    <div class="flex justify-between items-center">
        <p>{{ name }}</p>
        <p><span class="font-semibold"><sup class="text-[14px]">&#8358;</sup></span> <span class="text-[1.5rem]">{{ amount }}</span></p>
        <ButtonDiv :name="buttonName" :variant="variant" :more-styling="moreStyling" @click="handleModalToggle(name)"/>
    </div>
  </div>
</template>

<script>
import ButtonDiv from './ButtonDiv.vue';
export default {
    props:["name","amount","buttonName","variant","moreStyling","handleModalToggle"],
    components:{
        ButtonDiv
    }
}
</script>

<style>

</style>