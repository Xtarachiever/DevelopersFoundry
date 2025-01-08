<template>
    <div class="h-[100vh] flex justify-between">
        <div class="carousel_div w-[50%] xl:w-[45%] h-full">
            <CarouselDiv :images="images" />
        </div>
        <div class="w-[55%] pt-[60px] relative">
            <div class="text-cyan_blue px-8 absolute left-[50%] top-[100px] w-full max-w-[600px] -translate-x-[50%]">
                <p class="text-[1.5rem] font-semibold py-3">Create your free account</p>
                <p><span class="">Already registered?</span><span class="text-green"> Sign in</span></p>
                <Transition name="slide-fade">
                    <RegistrationForm v-if="name === 'form1'" :handleFormChanges="handleFormChanges" />
                </Transition>
                <Transition name="slide-fade">
                    <RegistrationForm2 v-if="name === 'form2'" :handleFormChanges="handleFormChanges" />
                </Transition>
                <Transition name="slide-fade">
                    <SuccessFormVue v-if="name === 'form3'" ::handleFormChanges="handleFormChanges" />
                </Transition>
            </div>
            <div
                class="flex flex-wrap justify-between w-[90%] left-[50%] -translate-x-[50%] absolute bottom-[30px] text-sm gap-y-2">
                <p>By siging up, you agree to our <span class="text-green">Terms</span> and <span class="text-green">Privacy
                        Policy</span></p>
                <p>© 2019 Tinylabs. All rights reserved.</p>
            </div>
        </div>
    </div>
</template>

<script>
import CarouselDiv from '../CarouselDiv.vue'
import AuthFormWrapper from '../AuthFormWrapper.vue';
import RegistrationForm from '../RegistrationForm.vue';
import RegistrationForm2 from '../RegistrationForm2.vue'
import SuccessFormVue from '../SuccessForm.vue';
export default {
    data() {
        return {
            images: ['slide_img1.jpg', 'slide_img2.jpg'],
            name: 'form1'
        }
    },
    methods: {
        handleFormChanges(formName) {
            this.name = formName
        }
    },
    components: {
        CarouselDiv,
        AuthFormWrapper,
        RegistrationForm,
        RegistrationForm2,
        SuccessFormVue
    }
}
</script>

<style>
.slide-fade-enter-active {
    transition: all 0.6s ease-out;
}

/* .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
} */
.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-50px);
    opacity: 0;
}
</style>