<template>
  <div>
    <div class="w-[60%] m-auto text-faint_cyan_blue">
        <p class="py-6">Payment Method</p>
        <div class="flex justify-between items-center text-cyan_blue text-xs gap-[20px]">
            <p>MASTERCARD</p>
            <p>**** 3745</p>
            <span class="flex items-center gap-[10px]"><input type="radio"/>Make Primary</span>
        </div>
        <div class="flex items-center justify-between text-cyan_blue text-xs gap-[20px] pt-4">
            <p>MASTERCARD</p>
            <p>**** 3745</p>
            <span class="flex items-center gap-[10px]"><input type="radio"/>Make Primary</span>
        </div>
        <div class="flex items-center pt-[60px] justify-between text-cyan_blue text-xs gap-[20px] pt-4">
            <p>Recurring Bill</p>
            <span class="flex items-center">
                <input type="radio" name="bill_choices" id="enable" class="mr-2 "/> 
                <label for="enable" class="cursor-pointer">Enable</label><br>
            </span>
            <span class="flex items-center cursor-pointer">
                <input type="radio" name="bill_choices" id="disable" class="mr-2"/> 
                <label for="disable" class="cursor-pointer">Disable</label><br>
            </span>
        </div>
        <div class="flex justify-end mt-6 pt-[50px]">
            <ButtonDiv name="Save Changes"/>
        </div>
    </div>
  </div>
</template>

<script>
import ButtonDiv from '../ButtonDiv.vue';
export default {
    components:{
        ButtonDiv
    }
}
</script>

<style>

</style>