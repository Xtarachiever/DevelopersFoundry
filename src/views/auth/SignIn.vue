<template>
   <AuthLayout>
     <div class="text-cyan_blue">
        <p class="text-[1.5rem] pb-2">Welcome</p>
        <p>Don’t have an account? 
            <RouterLink to="/auth/signup">
                <span class="text-green cursor-pointer">Sign up</span>
            </RouterLink>
        </p>
        <div class="bg-white relative rounded-md px-8 mt-[30px] py-6 max-w-[600px] form_div pt-[40px] w-full">
            <InputDiv name="email" v-model="email" label="Email" icon="md-alternateemail-sharp" :errorMsg="emailErrorMsg"/>
            <br />
            <InputDiv name="password" v-model="password" label="Password" icon="bi-eye" :errorMsg="passwordErrorMsg"/>
            <div class="flex justify-between items-center py-4">
                <p class="text-green text-[13px] cursor-pointer">Forgot Password</p>
                <ButtonDiv name="Sign In" @click="handleSubmit"/>
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
            password:'',
            emailErrorMsg:'',
            passwordErrorMsg:''
        }
    },
    methods:{
        handleSubmit(){
            try{
                if(this.email  === '' || this.password === ''){
                    if(this.email === ''){
                        this.emailErrorMsg = 'Required'
                    }
                    if(this.password === ''){
                        this.passwordErrorMsg = 'Required'
                    }
                }else{
                    localStorage.setItem('isLoggedIn','true');
                    this.$router.push({ path: '/dashboard' })

                }
            }catch(e){
                console.log(e)
            }
        }
    }
}
</script>

<style>

</style>