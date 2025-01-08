<template>
    <div class="bg-white form_div rounded-md pt-[40px] px-8 mt-[30px] py-6 max-w-[600px] w-full">
        <div class="gap-y-[20px] flex flex-col">
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