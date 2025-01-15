<template>
    <DashboardLayout>
        <div class="text-cyan_blue mt-[50px]">
            <div class="flex items-center justify-between">
                <p class="text-xl">Employees</p>
                <ButtonDiv name="Add New" @click="handleModalToggle('Add New')"/>
            </div>
            <div class="pt-6 mt-3">
                <BannerDiv name="Josh Bakery Ventures" details="62, Bode Thomas, Surulere, Lagos"/>
            </div>
            <div>
                <TableWrapper :data="userContent" :checkers="checkers" :handleDelete="handleModalToggle"/>
            </div>
            <PracticeTable />
            <div>
                <ModalOverlay name="Add New" :open="modalStatus">
                 <p>Add New</p>
                </ModalOverlay>
                <ModalOverlay name="delete" :open="modalStatus">
                 <p>Delete</p>
                </ModalOverlay>
            </div>
        </div>
    </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'
import ButtonDiv from '@/components/ButtonDiv.vue';
import BannerDiv from '@/components/BannerDiv.vue';
import TableWrapper from '@/components/table/TableWrapper.vue';
import userContent from '@/components/table/UserContent.json';
import ModalOverlay from '@/components/modals/ModalOverlay.vue';
import PracticeTable from '@/components/table/PracticeTable.vue';
export default {
    components:{
        DashboardLayout,
        ButtonDiv,
        BannerDiv,
        TableWrapper,
        ModalOverlay,
        PracticeTable
    },
    data(){
        return{
            userContent,
            checkers: true,
            modalStatus:{}
        }
    },
    methods:{
    handleModalToggle(name){
      this.modalStatus[name] = true
    }
  }
}
</script>

<style>

</style>