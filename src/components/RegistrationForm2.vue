<template>
    <div class="bg-white relative form_div rounded-md pt-[40px] px-8 mt-[30px] py-6 max-w-[600px] w-full">
        <div class="text-green absolute top-[15px] left-[20px] cursor-pointer flex items-center gap-[5px]" @click="handleFormChanges('form1')">
            <v-icon name="bi-arrow-left" ></v-icon>
            <span class="text-xs">Back</span>
        </div>
        <div class="gap-y-[20px] flex flex-col pt-[10px]">
            <InputDiv name="businessName" label="Business Name" v-model="businessName" icon="ri-building-2-line" />
            <InputDiv name="businessAddress" label="Business Address" v-model="businessAddress" icon="hi-location-marker" />
            <InputDiv name="phoneNumber" label="Phone Number" v-model="phoneNumber" icon="bi-telephone" />
        </div>
        <div class="flex justify-end py-6">
            <ButtonDiv name="Finish" @click="handleFormChanges('form3')" />
        </div>
    </div>
</template>

<script>
import ButtonDiv from './ButtonDiv.vue'
import InputDiv from './InputDiv.vue';
export default {
    data() {
        return {
            businessName: '',
            businessAddress: '',
            phoneNumber: ''
        }
    },
    components: {
        ButtonDiv,
        InputDiv
    },
    props: ["handleFormChanges"],
}
</script>

<style>
 .form_div{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 }
</style>