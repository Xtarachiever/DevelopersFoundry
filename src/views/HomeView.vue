<template>
  <div>
    <DashboardLayout>
      <div class="relative">
        <div class="mr-[300px]">
          <div class="flex flex-col gap-[20px]">
            <BannerDiv name="Store wallet" amount="2500" buttonName="Top up wallet" moreStyling="max-w-[200px]" :handleModalToggle="handleModalToggle"/>
            <BannerDiv name="Total Disbursed" amount="12000" buttonName="View History"
              variant="bg-transparent text-cyan_blue border border-cyan_blue max-w-[200px]" :handleModalToggle="handleModalToggle"/>
          </div>
          <div>
            <div class="flex justify-between text-cyan_blue pt-8">
              <p>Recent Activities</p>
              <div class="flex items-center gap-[10px]">
                <p>1 of {{ tableContent.length }}</p>
                <v-icon name="fa-chevron-circle-left" class="cursor-pointer text-green" scale="1.4"></v-icon>
                <v-icon name="fa-chevron-circle-right" class="cursor-pointer text-green" scale="1.4"></v-icon>
              </div>
            </div>
            <TableWrapper :data="tableContent" />
          </div>
        </div>
        <div class="bg-white px-4 box-shadow max-w-[300px] w-full h-[100vh] shadow-md fixed top-[80px] right-0">
          Calculator
        </div>
      </div>
      <ModalOverlay name="Store wallet" :open="modalStatus">
        <p>Store wallet</p>
      </ModalOverlay>
      <ModalOverlay name="Total Disbursed" :open="modalStatus">
        <p>Total Disbursed</p>
      </ModalOverlay>
    </DashboardLayout>
  </div>
</template>

<script>
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'
import BannerDiv from '@/components/BannerDiv.vue';
import TableWrapper from '@/components/table/TableWrapper.vue';
import tableContent from '@/components//table/TableContent1.json'
import ModalOverlay from '@/components/modals/ModalOverlay.vue';
export default {
  components: {
    DashboardLayout,
    BannerDiv,
    TableWrapper,
    ModalOverlay
  },
  data() {
    return {
      tableContent,
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

<style></style>