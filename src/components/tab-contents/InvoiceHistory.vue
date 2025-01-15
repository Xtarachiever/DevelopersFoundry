<template>
  <div class="text-cyan_blue w-[70%] m-auto">
    <div class="flex items-center justify-end gap-[10px] pt-4">
        <p>1 of {{ invoiceContent.length }}</p>
        <v-icon name="fa-chevron-circle-left" class="cursor-pointer text-green" scale="1.1"></v-icon>
        <v-icon name="fa-chevron-circle-right" class="cursor-pointer text-green" scale="1.1"></v-icon>
    </div>
     <div>
        <TableWrapper :data="invoiceContent" noHeader="true"/>
     </div>
  </div>
</template>

<script>
import TableWrapper from '../table/TableWrapper.vue'
import invoiceContent from '../table/InvoiceContent.json'
export default {
    data(){
        return{
            invoiceContent
        }
    },
    components:{
        TableWrapper
    }
}
</script>

<style>

</style>