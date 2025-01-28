<template>
    <DashboardLayout>
        <div class="relative min-h-[100vh]">
            <div class="absolute top-[20%] left-[50%] -translate-x-[50%] -translate-y-[20%]" v-if="isLoading">
                <div class="loader"></div>
            </div>
            <div v-else-if="getSingleProduct">
                <div class="flex items-center justify-between">
                    <RouterLink to="/">
                        <p class="cursor-pointer hover:text-green inline"><v-icon
                                name="md-keyboarddoublearrowleft"></v-icon><span class="pl-2">Back</span></p>
                    </RouterLink>
                    <p class="cursor-pointer hover:text-green inline"><span class="pr-2">Next</span><v-icon
                            name="md-keyboarddoublearrowright-outlined"></v-icon></p>
                </div>
                <div class="w-[300px] h-[300px] overflow-clip m-auto">
                    <img :src="getSingleProduct.image" :alt="getSingleProduct.title" />
                </div>
                <div class="shadow-md max-w-[900px] m-auto text-center bg-white px-4 py-6">
                    <p class="text-[1.5rem] font-bold">{{ getSingleProduct.title }}</p>
                    <p>{{ getSingleProduct.description }}</p>
                    <p>Rate: {{ getSingleProduct?.rating?.rate }} / 5.0</p>
                    <p>Counts: {{ getSingleProduct?.rating?.count }}</p>
                </div>
                <div>
                    {{ fetchSingleProductInCart }}
                </div>
            </div>
            <div v-else>
                No product Found
            </div>
        </div>
    </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/layouts/DashboardLayout.vue';
import { useStore } from 'vuex';
import { onMounted, computed, watch } from 'vue';

export default {
    props: ['id'],
    components: {
        DashboardLayout
    },
    setup(props) {
        const store = useStore();

        // Computed
        const getSingleProduct = computed(()=>store.getters['productsStore/getSingleProduct'])
        const isLoading = computed(()=>store.getters['productsStore/isLoading'])
        const getCartItems = computed(()=>store.getters['productsStore/getCartItems'])

        const fetchSingleProductInCart = computed(() => {
            console.log(getCartItems)
            // return this.getCartItems.find((cartItem) => cartItem.id === this.id)
        })

        onMounted(() => {
            store.dispatch('productsStore/fetchSingleProduct',props.id)
            fetchSingleProductDetails()
        })
        //    Methods
        const fetchSingleProductDetails = async () => {
            try {
                await store.dispatch('productsStore/fetchSingleProduct', props.id);
                console.log('Product fetched successfully!');
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        return {
            getSingleProduct,
            isLoading,
            getCartItems,
            fetchSingleProductInCart,
            fetchSingleProductDetails
        }
    }
    // computed: {
    //     ...mapGetters('productsStore', ['getSingleProduct', 'isLoading', 'getCartItems']),
    //     fetchSingleProductInCart(){
    //         console.log(this.getCartItems)
    //         // return this.getCartItems.find((cartItem) => cartItem.id === this.id)
    //     }
    // },
    // mounted() {
    //     this.$store.dispatch('productsStore/fetchSingleProduct')
    //     this.fetchSingleProductDetails()
    //     console.log(this.getCartItems)
    // },
    // methods: {
    //     ...mapActions('productsStore', ['fetchSingleProduct']),
    //     fetchSingleProductDetails() {
    //         this.fetchSingleProduct(this.id)
    //     },
    // }
}
</script>

<style></style>