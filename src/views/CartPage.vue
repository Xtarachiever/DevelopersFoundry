<template>
    <DashboardLayout>
        <div  v-if="getCartItems.length > 0">
            <div class="max-w-[1200px] mx-auto">
                <div class="flex justify-between items-center w-full text-center bg-white p-4 rounded-lg shadow-lg my-4">
                    <p class="">Image</p>
                    <p>Prices</p>
                    <p>Rating</p>
                    <p>Quantity</p>
                </div>
                <div v-for="cartItem in getCartItems" :key="cartItem" class="flex justify-between items-center py-4 px-4 hover:bg-green transition-all cursor-pointer">
                    <div class="max-h-[100px] overflow-clip">
                        <img :src="cartItem.image" :alt="cartItem.title" class="object-contain h-[150px] w-[150px]"/>
                    </div>
                    <p>{{ +cartItem.price * +cartItem.quantity }}</p>
                    <p>{{ cartItem.rating.rate }} / 5.0</p>
                    <div class="flex items-center gap-[10px]">
                        <v-icon name="bi-plus" scale="2" class="cursor-pointer" @click="handleQuantityChange(cartItem,+1)"></v-icon>
                        <span>{{ cartItem.quantity }}</span>
                        <v-icon name="hi-minus-sm" scale="2"  class="cursor-pointer" @click="handleQuantityChange(cartItem,-1)"></v-icon>
                    </div>
                </div>
            </div>
            <div>
                <p>Checkout</p>
                <div v-for="cartItem in getCartItems" :key="cartItem">
                    <p>{{ cartItem.title }} - {{ (cartItem.quantity * cartItem.price).toFixed(2) }}</p>
                </div>
                <div>
                    Total: {{ handleTotalPrices }}
                </div>
            </div>
        </div>
        <div v-else class="pt-10 mt-10">
            <img src="/empty-cart.png" alt="Not found" class="m-auto"/>
        </div>
    </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    components:{
        DashboardLayout
    },
    setup(){
        const store = useStore()
        const getCartItems = computed(()=> store.getters['productsStore/getCartItems'])

        const handleTotalPrices = computed(()=>{
            const total = getCartItems.value.reduce((total, item)=> (item.price*item.quantity) + total,0)
            return total.toFixed(2);
        })

        // Methods
        const removeFromCart = store.dispatch('productsStore/removeFromCart')

        const handleQuantityChange=(cartItem, action)=>{
           if(cartItem.quantity === 1 && action === -1){
            removeFromCart(cartItem.id)
           }
           cartItem.quantity += action
        }

        return{
            handleQuantityChange,
            handleTotalPrices,
            getCartItems
        }
    },
}
</script>

<style>

</style>