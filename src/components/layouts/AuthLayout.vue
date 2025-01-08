<template>
    <div class="h-[100vh] flex justify-between">
        <div class="carousel_div w-[50%] xl:w-[45%] h-full">
            <CarouselDiv :images="images" />
        </div>
        <div class="w-[55%] pt-[60px] relative">
            <div class="text-cyan_blue px-8 absolute left-[50%] top-[100px] w-full max-w-[600px] -translate-x-[50%]">
                <slot />
            </div>
            <div
                class="flex flex-wrap justify-between w-[90%] left-[50%] -translate-x-[50%] absolute bottom-[30px] text-sm gap-y-2">
                <p>By signing up, you agree to our <span class="text-green">Terms</span> and <span class="text-green">Privacy
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
            images: ['/slide_img1.jpg', '/slide_img2.jpg'],
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