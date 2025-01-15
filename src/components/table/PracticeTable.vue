<template>
    <div class="h-[40px]">
        <p class="text-[20px]">Practice Table</p>
        <p v-if="selected > 0">{{ selected }} of {{ practiceTable.length }}</p>
    </div>
  <table class="table">
    <thead>
        <tr>
            <th v-for="data in Object.keys(practiceTable[0])" :key="data.id">{{ data }}</th>
        </tr>
    </thead>
    <tbody>
        <!-- <tr v-for="(data, i) in practiceTable" :key="i" @click="handleSelected(Object.keys(data))">
            <td>{{ data.id }}</td>
            <td>{{ data.name }}</td>
        </tr> -->
        <tr v-for="(row, i) in practiceTable" :key="i" @click="handleSelected(Object.values(row)[0])" 
        :class="selectedStatus[Object.values(row)[0]] ? 'ring-offset-2 ring-green' : ' ring-transparent'"
        class="ring-2"
        >
            <td v-for="(values, i) in Object.values(row)" :key="i" 
            >
                {{ values }}
            </td>
        </tr>
    </tbody>
  </table>
</template>

<script>
import practiceTable from './PracticeTable.json'
export default {
    data(){
        return{
            practiceTable,
            selected: 0,
            selectedStatus:{}
        }
    },
    methods:{
        handleSelected(id){
            this.selectedStatus[id] = !this.selectedStatus[id]
            // console.log( Object.values(this.selectedStatus).filter((value)=>value === true))
            this.selected = Object.values(this.selectedStatus).filter((value)=>value === true).length
        }
    }
}
</script>

<style>
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  font-size: 16px;
  text-align: left;
}

thead th {
  padding: 15px 20px;
  text-transform: capitalize;
  font-weight: bold;
}

tbody tr {
  background-color: #fff;
  /* border: 2px solid transparent; */
  transition: border-color 0.3s, box-shadow 0.3s;
  border-radius: 8px; /* Optional rounded corners */
}

tbody tr td {
  padding: 15px 20px;
}
</style>