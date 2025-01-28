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
              :handleModalToggle="handleModalToggle" :user_banner="userBanner" />
            <BannerDiv name="Total Disbursed" amount="12000" buttonName="View History"
              variant="bg-transparent text-cyan_blue border border-cyan_blue max-w-[200px]"
              :handleModalToggle="handleModalToggle" :user_banner="userBanner" />
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
                    <v-icon name="md-keyboardarrowdown-sharp"
                      class="absolute right-[5px] top-[3px] pointer-events-none"></v-icon>
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
import tableContents from '@/components//table/TableContent1.json'
import ModalOverlay from '@/components/modals/ModalOverlay.vue';
import CalculatorDiv from '@/components/CalculatorDiv.vue';
import { mapGetters, mapState, useStore } from 'vuex';
import { ref, reactive,computed, onMounted } from 'vue';


export default {
  name: 'Dashboard Page',
  components:{
      DashboardLayout,
      BannerDiv,
      TableWrapper,
      ModalOverlay,
      CalculatorDiv
    },
  setup(){
    const tableContent = ref(tableContents);
    const modalStatus = reactive({});
    const userBanner = ref(true);
    const selected = ref(0);
    const showRange = ref(5);
    const itemsOffset = ref(0);
    const viewType = ref(localStorage.getItem('viewType') || 'list');

    const store = useStore();

    onMounted(()=>{
      store.dispatch('productsStore/getAllProducts')
    })

    // Methods
    const handleModalToggle = (name) => {
      modalStatus[name] = true;
    };

    const handleShowRangeUpdate = (event) => {
      showRange.value = parseInt(event.target.value, 10);
      itemsOffset.value = 0;
    };

    const handleViewChoice = (selectedViewType) => {
      viewType.value = selectedViewType;
      localStorage.setItem('viewType', viewType.value);
    };

    const handlePagination = (direction) => {
      const totalProducts = store.getters['productsStore/getAllProducts'].length;
      const maxOffset = Math.ceil(totalProducts / showRange.value) - 1;

      let nextPage = itemsOffset.value / showRange.value + direction;

      if (nextPage < 0) {
        nextPage = 0;
      } else if (nextPage > maxOffset) {
        return;
      }

      itemsOffset.value = nextPage * showRange.value;
    };

    // Computed
    const getAllProducts = computed(() => store.getters['productsStore/getAllProducts']);
    const isLoading = computed(() => store.getters['productsStore/isLoading']);
    const products = computed(() => store.state.productsStore.products);

    const endOffset = computed(() => itemsOffset.value + showRange.value);

    const slicedProducts = computed(() => {
      return getAllProducts.value.slice(itemsOffset.value, endOffset.value);
    });

    store.dispatch('productsStore/getAllProducts');

    return{
      tableContent,
      modalStatus,
      userBanner,
      selected,
      showRange,
      itemsOffset,
      viewType,
      handleModalToggle, 
      handleShowRangeUpdate,
      handleViewChoice,
      handlePagination,
      getAllProducts,
      isLoading,
      products,
      endOffset,
      slicedProducts
    }

  }

}

// export default {
//   components: {
//     DashboardLayout,
//     BannerDiv,
//     TableWrapper,
//     ModalOverlay,
//     CalculatorDiv
//   },
//   data() {
//     return {
//       tableContent,
//       modalStatus: {},
//       user_banner: true,
//       selected: 0,
//       showRange: 5,
//       viewType: localStorage.getItem('viewType') || 'list',
//       itemsOffSet: 0,
//     }
//   },
//   // mounted() {
//   //   store.dispatch('productsStore/getAllProducts')
//   // },
//   methods: {
//     handleModalToggle(name) {
//       this.modalStatus[name] = true
//     },
//     handleShowRangeUpdate(event) {
//       this.showRange = parseInt(event.target.value, 10);
//       this.itemsOffSet = 0;
//     },
//     handleViewChoice(selectedViewType) {
//       this.viewType = selectedViewType
//       localStorage.setItem('viewType', this.viewType)
//     },

//     handlePagination(direction) {
//       const totalProducts = this.getAllProducts.length;
//       const maxOffset = Math.ceil(totalProducts / this.showRange) - 1;

//       let nextPage = this.itemsOffSet / this.showRange + direction;

//       if (nextPage < 0) {
//         nextPage = 0;
//       } else if (nextPage > maxOffset) {
//         return;
//       }

//       this.itemsOffSet = nextPage * this.showRange;

//     }



//   },
//   computed: {
//     ...mapGetters('productsStore', ['getAllProducts', 'isLoading']),
//     ...mapState('productsStore', ['products']),

//     endOffSet() {
//       return this.itemsOffSet + this.showRange;
//     },

//     slicedProducts() {
//       return this.getAllProducts.slice(this.itemsOffSet, this.endOffSet)
//     }
//   }
// }
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