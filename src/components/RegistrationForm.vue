<template>
    <div class="bg-white relative rounded-md px-8 mt-[30px] py-6 max-w-[600px] form_div pt-[40px] w-full">
        <!-- <div class="text-green absolute top-[15px] left-[20px] cursor-pointer flex items-center gap-[5px]" >
            <v-icon name="bi-arrow-left" ></v-icon>
            <span class="text-xs">Back</span>
        </div> -->
        <div class="gap-y-[20px] flex flex-col pt-[10px]">
        <div class="flex items-center justify-between gap-x-[30px] gap-y-[50px]">
            <InputDiv name="firstName" label="First Name" v-model="firstName" icon="pr-user"/>
            <InputDiv name="lastName" label="Last Name" v-model="lastName" icon="pr-user"/>
        </div>
        <InputDiv name="email" type="email" label="Email" v-model="email" icon="md-alternateemail-sharp"/>
        <InputDiv name="password" label="Password" v-model="password" icon="bi-eye" type="email"/>
    </div>
    <div class="flex justify-end py-6">
        <ButtonDiv name="Continue" @click="handleFormChanges('form2')"/>
    </div>
    </div>
</template>

<script>
import AuthFormWrapper from './AuthFormWrapper.vue';
import ButtonDiv from './ButtonDiv.vue';
import InputDiv from './InputDiv.vue';
export default {
    data(){
        return{
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
    },
    props:["handleFormChanges"],
    components:{
        AuthFormWrapper,
        InputDiv,
        ButtonDiv
    }
}
</script>

<style>
 .form_div{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 }
</style>