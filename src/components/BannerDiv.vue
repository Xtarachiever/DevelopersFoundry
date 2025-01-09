<template>
  <div class="bg-white shadow-lg w-full rounded-sm px-6 py-6 text-cyan_blue">
    <div class="flex justify-between items-center">
        <p :class="!user_banner ? 'text-[1.4rem] font-semibold' : 'text-[18px]'">{{ name }}</p>
        <div v-if="user_banner" class="flex w-[60%] justify-between items-center">
            <p><span class="font-semibold"><sup class="text-[14px]">&#8358;</sup></span> <span class="text-[1.5rem]">{{ amount }}</span></p>
            <ButtonDiv :name="buttonName" :variant="variant" :more-styling="moreStyling" @click="handleModalToggle(name)"/>
        </div>
        <div v-else>
            <p>{{ details }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import ButtonDiv from './ButtonDiv.vue';
export default {
    props:["name","amount","buttonName","variant","moreStyling","handleModalToggle","user_banner","details"],
    components:{
        ButtonDiv
    }
}
</script>

<style>

</style>