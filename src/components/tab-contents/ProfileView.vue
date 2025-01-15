<template>
  <div class="flex gap-[30px] px-6 py-6">
    <v-icon name="fa-user-circle" scale="2"></v-icon>
    <div class="w-[90%]">
        <InputDiv name="firstName" label="First Name" type="text"/>
        <div class="py-4">
            <InputDiv name="lastName" label="Last Name" type="text"/>
        </div> 
        <InputDiv name="email" label="Email" type="email"/>
        <div class="flex justify-end pt-5">
            <ButtonDiv name="Save Changes" />
        </div>
    </div>
  </div>
</template>

<script>
import ButtonDiv from '../ButtonDiv.vue'
import InputDiv from '../InputDiv.vue'
export default {
    components:{
        InputDiv,
        ButtonDiv
    }
}
</script>

<style>

</style>