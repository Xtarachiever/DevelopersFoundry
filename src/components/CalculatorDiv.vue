<template>
    <div>
        <div class="bg-cyan_blue text-white p-4">
            <p class="text-xs">GETCHANGE WIDGET</p>
            <div>
                <span class="flex items-end w-full text-white opacity-[50%] text-xs pt-4">Amount
                    <hr class="w-[70%] pb-2 ml-2" />
                </span>
                <div class="flex items-center justify-end gap-[30px] py-5">
                    <div>
                        <input type="radio" id="airtime" name="top_up" value="Airtime">
                        <label for="airtime" class="pl-2">Airtime</label><br>
                    </div>
                    <div>
                        <input type="radio" id="iou_voucher" name="top_up" value="IoU Voucher">
                        <label for="iou_voucher" class="pl-2">IOU Voucher</label><br>
                    </div>
                </div>
                <p class="text-[1.8rem] text-center">08012345678</p>
            </div>
        </div>
        <div>
            <div class="all_buttons text-cyan_blue">
                <div class="buttons">
                    <p class="functions">C</p>
                    <p>1</p>
                    <p>4</p>
                    <p>7</p>
                </div>
                <div class="buttons">
                    <p class="functions"><v-icon name="md-keyboardarrowleft-sharp"></v-icon></p>
                    <p>2</p>
                    <p>5</p>
                    <p>8</p>
                </div>
                <div class="buttons">
                    <p class="functions"><v-icon name="md-keyboardarrowright-round"></v-icon></p>
                    <p>3</p>
                    <p>6</p>
                    <p>9</p>
                </div>
                <div class="buttons">
                    <p class="functions"><v-icon name="co-delete"></v-icon></p>
                    <p class="functions">*</p>
                    <p class="functions">#</p>
                    <p class="functions">0</p>
                </div>
            </div>
        </div>
        <div class="w-full py-4 px-4">
            <ButtonDiv name="Query" variant="bg-transparent py-3 border border-cyan_blue"/>
            <ButtonDiv name="Generate" more-styling="max-w-none w-full py-3 mt-5"/>
        </div>
    </div>
</template>

<script>
import ButtonDiv from './ButtonDiv.vue';
export default {
    components:{
        ButtonDiv
    }
}
</script>

<style scoped>
.all_buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid rgba(1, 60, 97, 0.1);
}

.all_buttons .buttons {
    width: 100%;
}

.all_buttons .buttons .functions {
    background-color: rgba(43, 218, 83, 0.2);
}

.buttons p {
    padding: 20px;
    background-color: white;
    width: 100%;
    text-align: center;
}</style>