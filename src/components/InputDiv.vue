<template>
    <div class="flex flex-col relative h-[60px] w-full">
        <label :v-html="name" class="absolute pointer-events-none transition-all duration-200 ease-in-out text-faint_cyan_blue font-light text-[13px]" :class="inputFocus ? '-top-[25px]' : 'top-0'">{{ label }}</label>
        <input :value="modelValue" :name="name" :type="type ? type : 'text'" class="border-b border-gray outline-none box-border w-full"
            @focus="inputFocus = true" @blur="!modelValue ? (inputFocus = false) : (inputFocus = true)" 
            @input="handleInput($event)"
            />
        <div class="absolute right-0">
            <v-icon :name="icon" class="text-black"></v-icon>
        </div>
    </div>
</template>

<script>
export default {
    props: ["modelValue", "name", "type", "label","icon"],
    data() {
        return {
            inputFocus: false
        }
    },
    methods: {
        handleInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style></style>