<template>
   <div class=" pt-[60px] w-[60%] m-auto">
        <InputDiv name="oldPassword" label="Old Password"/>
        <div class="py-4">
            <InputDiv name="newPassword" label="New Password"/>
        </div>
        <InputDiv name="confirmNewPassword" label="Confirm New Password"/>
        <div class="flex justify-end pt-2">
            <ButtonDiv name="Save Changes"/>
        </div>
   </div>
</template>

<script>
import InputDiv from '../InputDiv.vue';
import ButtonDiv from '../ButtonDiv.vue';
export default {
    components:{
        InputDiv,
        ButtonDiv
    }

}
</script>

<style>

</style>