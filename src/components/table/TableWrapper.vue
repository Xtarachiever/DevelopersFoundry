<template>
    <div class="table_div">
        <table class="text-cyan_blue w-full table">
            <thead v-if="!noHeader" :class="viewType === 'grid' && 'hidden'">
                <tr>
                    <td v-if="checkers">
                        <v-icon v-if="checked" name="md-checkbox-round"></v-icon>
                        <v-icon  name="md-checkboxoutlineblank"></v-icon>
                    </td>
                    <th v-for="(key, i) in entity" :key="i" class="uppercase text-sm font-normal">
                        <slot name="headers" :entity="key" >
                            {{ key === 'S/N' ? '#' : key }}
                        </slot>
                    </th>
                </tr>
            </thead>
            <!-- :class="viewType === 'grid' ? 'grid grid-cols-3 gap-[30px] w-full' : 'contents'" -->
            <tbody class="text-faint_cyan_blue" v-if="viewType === 'list'">
                <tr v-for="(key,i) in data" :key="i" class="table-rows cursor-pointer ring-2 relative hover:transition-all" @click="handleSelectedItems(key.id)"
                :class="[selectedStatus[key.id] === true ? 'ring-offset-2 ring-green' : ' ring-transparent',]"   @mouseover="handleHover(key.id)"
                    @mouseleave="handleMouseLeave(key.id)"
                >
                    <td v-if="checkers">
                        <v-icon v-if="checked" name="md-checkbox-round"></v-icon>
                        <v-icon  name="md-checkboxoutlineblank"></v-icon>
                    </td>
                    <td v-for="(value, colIndex) in entity" :key="colIndex">
                        {{ value === 'rating' ? key[value].rate : truncateText(key[value],30) }}
                    </td>
                    <td v-if="checkers" class="cursor-pointer hover:text-green">
                        <v-icon name="ri-delete-bin-line" @click="handleDelete('delete')"></v-icon>
                    </td>
                    <td v-show="hovering[key.id]" class="absolute -right-[10px] top-0 flex gap-[20px]">
                        <div class="">
                            <span class="bg-red-500 text-white rounded-sm p-3" @click.stop="handleRemoveFromCart(key.id)" v-if="handleCartProductsFiltering(key.id)">Remove from Cart</span>
                            <span class="bg-green text-white rounded-sm p-3" @click.stop="handleAddToCart(key)" v-else>Add to Cart</span>
                        </div>
                        <RouterLink :to="`/product/${key.id}`">
                            <span class="bg-green text-white rounded-sm p-3">View Product</span>
                        </RouterLink>
                    </td>
                </tr>
            </tbody>

            <tbody v-else class="grid grid-cols-3 gap-[20px]">
                <tr
                v-for="(key,i) in data" :key="i" class="cursor-pointer ring-2 relative hover:scale-[1.02]" @click="handleSelectedItems(key.id)"
                :class="[selectedStatus[key.id] === true ? 'ring-offset-2 ring-green' : ' ring-transparent',]"   @mouseover="handleHover(key.id)"
                    @mouseleave="handleMouseLeave(key.id)"
                >
                    <td>
                        <div class="w-[150px] h-[150px] overflow-clip m-auto">
                            <img :src="key.image" :alt="key.title"/>
                        </div>
                        <div>
                            <p class="font-bold text-[1.2rem] py-4">{{ truncateText(key.title,20) }}</p>
                            <p>{{ truncateText(key.description, 40) }}</p>
                            <p>Price: {{ key.price }}</p>
                            <div class="flex items-center gap-[10px]" v-if="handleCartProductsFiltering(key.id)">
                                <v-icon name="bi-plus" scale="2" class="cursor-pointer" @click.stop="getCartItemQuantity(key.id,'increment')"></v-icon>
                                <p >Qty: {{ getCartItemQuantity(key.id) }}</p>
                                <v-icon name="hi-minus-sm" scale="2"  class="cursor-pointer" @click.stop="getCartItemQuantity(key.id,'decrement')"></v-icon>
                            </div>
                        </div>
                        <div class="pt-4 mb-6">
                            <ButtonDiv name="Remove From Cart" moreStyling="max-w-none py-3 bg-red-500" @click.stop="handleRemoveFromCart(key.id)" v-if="handleCartProductsFiltering(key.id)"/>
                            <ButtonDiv name="Add To Cart" moreStyling="max-w-none py-3" @click.stop="handleAddToCart(key)" v-else/>
                        </div>
                        <RouterLink :to="`/product/${key.id}`">
                            <span class="bg-green text-white rounded-md p-3 w-full block text-center">View Product</span>
                        </RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';
import ButtonDiv from '../ButtonDiv.vue';
export default {
    props: ["data","checkers", "handleDelete", "noHeader","entity","viewType"],
    components:{
        RouterLink,
        ButtonDiv
    },
    setup(props, {emit}){
        const store = useStore()

        const checked = ref(false)
        const selected = ref(0)
        const selectedStatus = reactive({})
        const hovering = reactive({})

        // Methods
        const handleSelectedItems = (id) => {
            selectedStatus[id] = !selectedStatus[id];
            const selectedCount = Object.values(selectedStatus).filter((item)=>item === true).length
            emit('update:selected', selectedCount);
        }

        const handleHover = (id) =>{
            hovering[id] = true;
        }

        const handleMouseLeave = (id) =>{
            hovering[id] = false
        }

        const handleAddToCart = async (product) => {
            try {
                await store.dispatch('productsStore/addToCart', product)
            } catch (error) {
                console.error(error)
            }
        }

        const handleRemoveFromCart = async (productId) => {
            try{
                await store.dispatch('productsStore/removeFromCart', productId)
            }catch(err){
                console.log(err)
            }
        }
        
        const handleCartProductsFiltering = (id) =>{
            return getCartItems.value.filter((eachItem)=>eachItem.id === id).length
        }
        
        const getCartItemQuantity = (id,actions) =>{
            const item = getCartItems.value.find((eachItem) => eachItem.id === id);
            if(item && actions === 'increment'){
                return item.quantity++
            }else if(item && actions === 'decrement'){
                if(item.quantity <= 1){
                    handleRemoveFromCart(id)
                }else{
                    item.quantity--
                }
            }
            return item ? item.quantity : 0;
        }

        // computed
        const getCartItems = computed(()=> store.getters['productsStore/getCartItems'])

        return{
            checked,
            selected,
            selectedStatus,
            hovering,
            handleSelectedItems,
            getCartItemQuantity,
            handleAddToCart,
            handleRemoveFromCart,
            handleMouseLeave,
            handleHover,
            handleCartProductsFiltering,            
        }
    }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  font-size: 16px;
  text-align: left;
  margin: 20px 0px;
}

th, td {
  padding: 15px;
}
tbody tr {
  background-color: #fff;
  transition: border-color 0.3s, box-shadow 0.3s;
  border-radius: 8px;
}
th {
  text-transform: capitalize;
  font-weight: bold;
}

tbody tr{
  background-color: white;
  padding: 20px;
  padding-top: 10px;
}

tbody tr.table-rows{
    border-bottom: 20px solid #F6F8F8; 
    padding-bottom: 30px;
}

@media screen and (max-width: 930px){
    .table_div{
        /* min-width: 930px; */
        overflow-x: auto;
        width: 100%;
        position: relative;
    }
    .table{
        min-width: 930px;
        overflow: scroll;
        position: relative;
        width: 100%;
    }
}
</style>