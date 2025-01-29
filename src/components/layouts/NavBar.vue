<template>
    <div class="bg-white shadow-lg p-4 sticky top-0 w-full z-[2] relative">
        <div class="flex items-center justify-between text-cyan_blue">
            <img src="/logo.jpg" alt="Logo"/>
            <div class="flex items-center gap-[20px]">
                <RouterLink to="/cart">
                    <div class="relative" v-show="getCartItems.length > 0">
                        <span class="bg-red-500 text-white absolute h-[15px] w-[15px] -top-[0px] -right-[4px] rounded-full flex items-center justify-center text-xs">{{ getCartItems.length }}</span>
                        <v-icon name="gi-shopping-cart" scale="2"></v-icon>
                    </div>
                </RouterLink>
                <div class="flex items-center gap-[6px] cursor-pointer" @click="handleNavToggle">
                    <v-icon name="fa-user-circle"></v-icon>
                    <p>Hi! User</p>
                    <v-icon name="md-keyboardarrowdown-round"></v-icon>
                </div>
            </div>
        </div>
        <div class="bg-white w-[200px] px-4 py-4 absolute top-[60px] right-[10px] modal_div" v-if="navOpen">
            <div class="flex flex-col space-y-4">
                <p class="cursor-pointer hover:text-green"><v-icon name="co-clock" class="mr-2"></v-icon><span>Wallet History </span></p>
                <RouterLink to="/settings">
                    <p class="cursor-pointer hover:text-green"><v-icon name="io-settings-sharp" class="mr-2"></v-icon><span>Settings</span></p>
                </RouterLink>
                <RouterLink to="/auth/signin">
                <p class="cursor-pointer hover:text-green" @click="handleLogout"><v-icon name="md-logout-outlined" class="mr-2"></v-icon><span>Log out</span></p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { mapGetters, useStore } from 'vuex';
export default {
    setup(){
        const navOpen = ref(false)
        const store = useStore()

        // Methods
        const handleNavToggle = () => {
            navOpen.value = !navOpen.value
        }

        const handleLogout = () =>{
            localStorage.setItem('isLoggedIn','false');
        }

        // computed
        const getCartItems = computed(()=> store.getters['productsStore/getCartItems'])

        return{
            navOpen,
            handleLogout,
            handleNavToggle,
            getCartItems
        }
    },
}
</script>

<style>

</style>