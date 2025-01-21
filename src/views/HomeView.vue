<template>
  <div>
    <DashboardLayout>
      <div class="relative min-h-[100vh]">
        <div class="absolute top-[20%] left-[40%] -translate-x-[50%] -translate-y-[20%]" v-if="isLoading">
          <div class="loader"></div>
        </div>
        <div class="mr-[300px]" v-else-if="!isLoading && getAllProducts.length > 0">
          <div class="flex flex-col gap-[20px]">
            <BannerDiv name="Store wallet" amount="2500" buttonName="Top up wallet" moreStyling="max-w-[200px]"
              :handleModalToggle="handleModalToggle" :user_banner="user_banner" />
            <BannerDiv name="Total Disbursed" amount="12000" buttonName="View History"
              variant="bg-transparent text-cyan_blue border border-cyan_blue max-w-[200px]"
              :handleModalToggle="handleModalToggle" :user_banner="user_banner" />
          </div>
          <div>
            <div class="flex justify-between text-cyan_blue pt-8">
              <p>Recent Activities</p>
              <div class="flex items-center gap-[20px]">
                <div class="flex items-center">
                  <span>Show</span>
                  <div class="min-w-[50px] relative">
                    <select @change="handleShowRangeUpdate">
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                    </select>
                    <v-icon name="md-keyboardarrowdown-sharp" class="absolute right-[5px] top-[3px]"></v-icon>
                  </div>
                </div>
                <div class="flex items-center gap-[10px]">
                  <p v-show="selected > 0">{{ selected }} of {{ slicedProducts.length }}</p>
                  <v-icon name="fa-chevron-circle-left" class="cursor-pointer text-green" scale="1.1"
                    @click="handlePagination(-1)"></v-icon>
                  <v-icon name="fa-chevron-circle-right" class="cursor-pointer text-green" scale="1.1"
                    @click="handlePagination(+1)"></v-icon>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-[20px] text-cyan_blue bg-white w-full p-4 mt-4">
              <span>SelectView Type:</span>
              <div class="relative w-[100px]">
                <!-- <select v-model="viewType" @change="handleViewChoice">
                  <option value="list">List</option>
                  <option value="grid"><v-icon name="bi-grid-1x2-fill" scale="4"></v-icon></option>
                </select> -->
                <div class="flex gap-[14px]">
                  <v-icon name="bi-list-task" class="cursor-pointer w-[40px] h-[40px]"
                    :class="viewType === 'list' && 'border-2 border-green rounded-lg'" scale="1.4"
                    @click="handleViewChoice('list')"></v-icon>
                  <v-icon name="bi-grid-1x2-fill" class="cursor-pointer w-[40px] h-[40px]"
                    :class="viewType === 'grid' && 'border-2 border-green rounded-lg'" scale="1.4"
                    @click="handleViewChoice('grid')"></v-icon>
                </div>
                <!-- <v-icon name="md-keyboardarrowdown-sharp" class="absolute right-[5px] top-[3px]"></v-icon> -->
              </div>
            </div>
            <TableWrapper :data="slicedProducts" :entity="['id', 'title', 'category', 'description', 'price', 'rating']"
              v-model:selected="selected" :viewType="viewType" />
          </div>
        </div>
        <div v-else>Products not found</div>
        <div
          class="bg-white box-shadow max-w-[300px] overflow-scroll w-full h-[100vh] shadow-md fixed top-[80px] right-0">
          <CalculatorDiv />
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
import CalculatorDiv from '@/components/CalculatorDiv.vue';
import { mapGetters, mapState } from 'vuex';
export default {
  components: {
    DashboardLayout,
    BannerDiv,
    TableWrapper,
    ModalOverlay,
    CalculatorDiv
  },
  data() {
    return {
      tableContent,
      modalStatus: {},
      user_banner: true,
      selected: 0,
      showRange: 5,
      viewType: localStorage.getItem('viewType') || 'list',
      itemsOffSet: 0,
    }
  },
  mounted() {
    this.$store.dispatch('productsStore/getAllProducts')
  },
  methods: {
    handleModalToggle(name) {
      this.modalStatus[name] = true
    },
    handleShowRangeUpdate(event) {
      this.showRange = parseInt(event.target.value, 10);
      this.itemsOffSet = 0;
    },
    handleViewChoice(selectedViewType) {
      this.viewType = selectedViewType
      localStorage.setItem('viewType', this.viewType)
    },
    handlePagination(direction) {
      const totalProducts = this.getAllProducts.length;
      let nextPage = this.itemsOffSet + direction
      const newOffSet = (nextPage * this.showRange) % totalProducts
      this.itemsOffSet = newOffSet

      if (this.itemsOffSet < 0 && direction === -1) {
        this.itemsOffSet = 0;
      }
      // console.log(newOffSet)
      if (newOffSet >= totalProducts && direction === +1) {
        return;
      }
    }

  },
  computed: {
    ...mapGetters('productsStore', ['getAllProducts', 'isLoading']),
    ...mapState('productsStore', ['products']),

    endOffSet() {
      return this.itemsOffSet + this.showRange;
    },

    slicedProducts() {
      return this.getAllProducts.slice(this.itemsOffSet, this.endOffSet)
    }
  }
}
</script>

<style>
select {
  padding: 8px 12px;
  width: 100%;
  -moz-appearance: none;
  /* Firefox */
  -webkit-appearance: none;
  /* Safari and Chrome */
  appearance: none;
  text-indent: 10px;
}

</style>