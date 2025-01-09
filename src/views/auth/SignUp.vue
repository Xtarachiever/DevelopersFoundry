<template>
    <AuthLayout>
        <div v-if="name !== 'form3'">
            <p class="text-[1.5rem] font-semibold py-3">Create your free account</p>
            <p><span class="">Already registered?</span>
                <RouterLink to="/auth/signin">
                    <span class="text-green"> Sign in</span>
                </RouterLink>
            </p>
        </div>
        <Transition name="slide-fade">
            <RegistrationForm v-if="name === 'form1'" :handleFormChanges="handleFormChanges" />
        </Transition>
        <Transition name="slide-fade">
            <RegistrationForm2 v-if="name === 'form2'" :handleFormChanges="handleFormChanges" />
        </Transition>
        <Transition name="slide-fade">
            <SuccessForm v-if="name === 'form3'" ::handleFormChanges="handleFormChanges" />
        </Transition>
    </AuthLayout>
</template>

<script>
import AuthLayout from '../../components/layouts/AuthLayout.vue'
import RegistrationForm2 from '../../components/RegistrationForm2.vue'
import RegistrationForm from '../../components/RegistrationForm.vue'
import SuccessForm from '../../components/SuccessForm.vue'
export default {
    components: {
        AuthLayout,
        RegistrationForm,
        RegistrationForm2,
        SuccessForm
    },
    methods: {
        handleFormChanges(formName) {
            this.name = formName
        },
        // handleBackClick(){
        //     this.name = formName
        // }
    },
    data(){
        return{
            name: 'form1'
        }
    }
}
</script>

<style></style>