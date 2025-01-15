<template>
    <div class="px-6 py-2 cursor-pointer" :class="(content.route === $route.href) ? 'text-green border-l-4 border-green' : 'border-l-4 border-transparent text-faint_cyan_blue'">
        <RouterLink :to="content.route">
            <v-icon :name="content.iconName" @click="content.name === 'Log Out' ? handleLogout() : setActive(content.name)"
            ></v-icon>
        </RouterLink>
    </div>
</template>

<script>
export default {
    props:["content","active","setActive"],
    methods:{
        handleLogout(){
            localStorage.setItem('isLoggedIn','false');
        }
    }
}
</script>

<style></style>