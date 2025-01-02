<template>
  <p :class="unselected ? 'dullColor' : name" class="w-fit text-white rounded-[20px] px-3 py-1 text-sm font-semibold">{{ name }}</p>
</template>

<script>
export default {
    props:["name","unselected"]
}
</script>

<style>
.Action,
.Romance{
    background: orange;
}
.Thriller{
    background: purple;
}
.SciFi{
    background: rgb(0, 71, 98);
}
.dullColor{
    background: #09080A;
    border: 1px solid #393449;
}
</style>