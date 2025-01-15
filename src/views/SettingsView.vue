<template>
   <DashboardLayout>
        <div class="bg-white shadow-lg w-[80%] m-auto mt-8 pt-4">
            <TabDiv />
        </div>
   </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/layouts/DashboardLayout.vue';
import TabDiv from '@/components/tab-contents/TabDiv.vue';

export default {
    components:{
        DashboardLayout,
        TabDiv
    }
}
</script>

<style>

</style>