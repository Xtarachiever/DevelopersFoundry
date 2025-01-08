<template>
   <AuthLayout>
     <div class="text-cyan_blue">
        <p class="text-[1.5rem] pb-2">Welcome</p>
        <p>Don’t have an account? <span class="text-green">Sign up</span></p>
        <div class="bg-white relative rounded-md px-8 mt-[30px] py-6 max-w-[600px] form_div pt-[40px] w-full">
            <InputDiv name="email" v-model="email" label="Email" icon="md-alternateemail-sharp"/>
            <br />
            <InputDiv name="password" v-model="password" label="Password" icon="bi-eye" />
            <div class="flex justify-between items-center py-4">
                <p class="text-green text-[13px] cursor-pointer">Forgot Password</p>
                <ButtonDiv name="Sign In"/>
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
            email:'',
            password:''
        }
    },
}
</script>

<style>

</style>