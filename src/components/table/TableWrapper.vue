<template>
    <div class="table_div">
        <table class="text-cyan_blue w-full table">
            <thead v-if="!noHeader">
                <tr>
                    <td v-if="checkers">
                        <v-icon v-if="checked" name="md-checkbox-round"></v-icon>
                        <v-icon  name="md-checkboxoutlineblank"></v-icon>
                    </td>
                    <th v-for="(key, i) in Object.keys(data[0] || {})" :key="i" class="uppercase text-sm font-normal">
                        <slot name="headers" :entity="key" >
                            {{ key === 'S/N' ? '#' : key }}
                        </slot>
                    </th>
                </tr>
            </thead>
            <tbody class="text-faint_cyan_blue">
                <tr v-for="(key,i) in data" :key="i" class="table-rows">
                    <td v-if="checkers">
                        <v-icon v-if="checked" name="md-checkbox-round"></v-icon>
                        <v-icon  name="md-checkboxoutlineblank"></v-icon>
                    </td>
                    <td v-for="(value, colIndex) in Object.values(key)" :key="colIndex">
                        {{ value }}
                    </td>
                    <td v-if="checkers" class="cursor-pointer hover:text-green">
                        <v-icon name="ri-delete-bin-line" @click="handleDelete('delete')"></v-icon>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ["data","checkers", "handleDelete", "noHeader"],
    data(){
        return{
            checked: false,
        }
    },
    components:{
    }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
  text-align: left;
  border-radius: 8px;
  overflow: hidden;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
}

th, td {
  padding: 15px;
}
tr{
   margin-bottom: 30px;
}
th {
  text-transform: capitalize;
  font-weight: bold;
}

tbody tr{
  background-color: white;
  padding: 20px;
  border-bottom: 20px solid #F6F8F8; 
  padding-bottom: 30px;
  padding-top: 10px;
}

@media screen and (max-width: 930px){
    .table_div{
        /* min-width: 930px; */
        overflow-x: auto;
        width: 100%;
        position: relative;
    }
    .table{
        min-width: 930px;
        overflow: scroll;
        position: relative;
        width: 100%;
    }
}
</style>