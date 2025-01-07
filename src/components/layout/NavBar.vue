<script>
export default {
    name: "NavBar",
    data() {
        return {
            inputValue: "",
            activeSearch: false,
        };
    },
    methods: {
        // handleInputChange(e) {
        //     this.inputValue = e.target.value;
        // },
        handleSearchUpdate() {
            this.activeSearch = true;
        },
        handleInputBlur() {
            this.activeSearch = false;
        },
        async handleAnimeSearch() {
            const payload = {
                search: this.inputValue,
                // genres: this.inputValue,
            };

            try {
                await this.$store.dispatch("setAnimesArray", payload); // Dispatch the action
            } catch (error) {
                console.error("Error during anime search:", error);
            }
        },
    },
    components: {},
};
</script>

<template>
    <div class="flex justify-between py-6 px-8 text-stained_white">
        <p class="text-white font-semibold">MovieDB</p>
        <div class="">
            <v-icon name="io-search" @click="handleSearchUpdate" v-if="!activeSearch"></v-icon>
            <div v-else class="mr-2 max-w-[200px]">
                <input name="search" @blur="handleInputBlur" v-model="inputValue" @keydown.enter="handleAnimeSearch"
                    class="box-border w-full px-2 py-1 text-primary_dark" />
            </div>
        </div>
    </div>
</template>

<style></style>
