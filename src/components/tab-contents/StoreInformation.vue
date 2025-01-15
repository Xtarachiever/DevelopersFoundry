<template>
  <div class="py-6 w-[60%] m-auto pt-[60px]">
    <InputDiv name="businessName" label="Business Name"/>
    <div class="py-4">
        <InputDiv name="businessAddress" label="Business Address"/>
    </div>
    <InputDiv name="phoneNumber" label="Phone Number"/>
    <div class="flex justify-end">
        <ButtonDiv name="Save Changes"/>
    </div>
  </div>
</template>

<script>
import InputDiv from '../InputDiv.vue';
import ButtonDiv from '../ButtonDiv.vue';
export default {
    components:{
        InputDiv,
        ButtonDiv
    }
}
</script>

<style>

</style>