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
import tabContent from './TabContent.js'
import TabWrapper from './TabWrapper.vue'
export default {
    data() {
        return {
            tabContent,
            activeContent: 'profile'
        }
    },
    components: {
        TabWrapper
    },
    methods: {
        handleTabChanges(name) {
            this.activeContent = name.toLowerCase()
        }
    }
}
</script>

<style></style>