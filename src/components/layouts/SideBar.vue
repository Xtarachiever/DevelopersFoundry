<template>
    <div>
        <div class="flex gap-y-[40px] flex-col mt-[60px]">
            <SideBarContentDiv v-for="content in sideBarContents" :key="content" :content="content" :active="active" :setActive="setActive"/>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import sideBarContent from './SideBarContent.json'
import SideBarContentDiv from './SideBarContentDiv.vue'
export default {
    components:{
        SideBarContentDiv
    },
    setup(){
        const active = ref('Dashboard')
        const sideBarContents = sideBarContent

        // methods
        const setActive = (newName) => {
            active.value = newName
        }

        return{
            active,
            sideBarContents,
            setActive
        }
    }
}
</script>

<style></style>