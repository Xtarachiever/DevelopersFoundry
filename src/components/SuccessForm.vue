<template>
    <div class="bg-white rounded-md px-8 mt-[30px] py-6 max-w-[600px] shadow-xl w-full">
        <div class="text-center max-w-[350px] m-auto h-full min-h-[280px] flex flex-col justify-center items-center py-3">
            <p class="text-[1.5rem] font-semibold">Great to have you onboard</p>
            <p class="py-4 pb-8 text-[15px] leading-[26px]">We just mailed you a confirmation link to josh.bakery@gmail.com.
                Complete registration by following the link.</p>
            <RouterLink to="/auth/signin">
                <ButtonDiv name="Dashboard" iconName="md-arrowrightalt-round" />
            </RouterLink>
        </div>
    </div>
</template>

<script>
import ButtonDiv from './ButtonDiv.vue';
export default {
    components: {
        ButtonDiv
    }
}
</script>

<style></style>