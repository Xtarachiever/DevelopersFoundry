<template>
    <div class="py-4 px-8">
        <div class="flex items-center justify-between w-full px-4 gap-[20px] border-b border-gray cursor-pointer">
            <div v-for="content in tabContent" :key="content" :content="content" class="pb-2"
                :class="activeContent === content.title.toLowerCase() ? 'text-cyan_blue relative font-semibold' : 'font-normal text-faint_cyan_blue'"
                @click="handleTabChanges(content.title)">{{content.title }}
                <div 
                    :class="activeContent === content.title.toLowerCase() 
                        ? 'absolute -bottom-[3px] left-1/2 transform -translate-x-1/2 w-[40px] h-[5px] bg-green' 
                        : 'hidden'"
                ></div>
            </div>
        </div>
        <TabWrapper v-for="content in tabContent" :key="content" :content="content" :activeContent="activeContent" />
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import tabContents from './TabContent.js'
import TabWrapper from './TabWrapper.vue'
export default {
    components: {
        TabWrapper
    },
    setup(){
        const tabContent = tabContents
        const activeContent = ref('profile')

        const handleTabChanges = (name) =>{
            activeContent.value = name.toLowerCase()
        }

        return{
            tabContent,
            handleTabChanges,
            activeContent
        }
    },
    // data() {
    //     return {
    //         tabContent,
    //         activeContent: 'profile'
    //     }
    // },
    // methods: {
    //     handleTabChanges(name) {
    //         this.activeContent = name.toLowerCase()
    //     }
    // }
}
</script>

<style></style>