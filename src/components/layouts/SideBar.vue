<template>
    <div>
        <div class="flex gap-y-[40px] flex-col mt-[60px]">
            <SideBarContentDiv v-for="content in sideBarContents" :key="content" :content="content" :active="active" :setActive="setActive"/>
        </div>
    </div>
</template>

<script>
import sideBarContents from './SideBarContent.json'
import SideBarContentDiv from './SideBarContentDiv.vue'
export default {
    data() {
        return {
            sideBarContents,
            active: 'Dashboard',
        }
    },
    components:{
        SideBarContentDiv
    },
    methods: {
        setActive(newName) {
            this.active = newName
        }
    }
}
</script>

<style></style>