<template>
    <AuthLayout>
      <div class="text-cyan_blue">
         <p class="text-[1.5rem] pb-2">Reset Password</p>
         <p>Don’t have an account? <span class="text-green">Sign up</span></p>
         <div class="bg-white relative rounded-md px-8 mt-[30px] py-6 max-w-[600px] form_div pt-[40px] w-full h-[280px] flex justify-end flex-col">
            <div class="h-[60%]">
                <InputDiv name="email" v-model="email" label="Email" icon="md-alternateemail-sharp"/>
            </div>
             <div class="flex justify-between items-center w-full">
                 <p class="text-green text-[13px] cursor-pointer">Back to Login</p>
                 <ButtonDiv name="Recover"/>
             </div>
         </div>
      </div>
    </AuthLayout>
 </template>
 
 <script>
 import AuthLayout from '@/components/layouts/AuthLayout.vue'
 import InputDiv from '@/components/InputDiv.vue'
 import ButtonDiv from '@/components/ButtonDiv.vue'
 export default {
     components: { AuthLayout, InputDiv, ButtonDiv },
     data(){
         return{
             email:''
         }
     },
 }
 </script>
 
 <style>
 
 </style>