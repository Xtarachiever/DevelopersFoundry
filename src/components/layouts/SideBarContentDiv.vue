<template>
    <div class="px-6 py-2 cursor-pointer" :class="content.name === active ? 'text-green border-l-4' : 'text-faint_cyan_blue'">
        <RouterLink :to="content.route">
            <v-icon :name="content.iconName" @click="setActive(content.name)"
            ></v-icon>
        </RouterLink>
    </div>
</template>

<script>
export default {
    props:["content","active","setActive"]
}
</script>

<style></style>