<template>
    <div>
        <table class="text-cyan_blue w-full table">
            <thead>
                <tr>
                    <th v-for="(key, i) in Object.keys(data[0] || {})" :key="i" class="uppercase text-sm font-normal">
                        <slot name="headers" :entity="key" >
                            {{ key === 'S/N' ? '#' : key }}
                        </slot>
                    </th>
                </tr>
            </thead>
            <tbody class="text-faint_cyan_blue">
                <tr v-for="(key,i) in data" :key="i" class="table-rows">
                    <td v-for="(value, colIndex) in Object.values(key)" :key="colIndex">
                        {{ value }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ["data"]
}
</script>

<style>
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
/* tr td:hover {
  background-color: #d1e7dd;
  cursor: pointer;
} */

/* Responsive table */
@media screen and (max-width: 768px) {
  table {
    border: 0;
  }
  
  thead {
    display: none; /* Hide the headers for small screens */
  }

  tr {
    display: block;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }

  td {
    display: block;
    text-align: right;
    font-size: 14px;
    border-bottom: 1px dotted #ccc;
    position: relative;
    padding-left: 50%;
  }

  td::before {
    content: attr(data-label);
    position: absolute;
    left: 15px;
    font-weight: bold;
    text-transform: capitalize;
  }
}
</style>