<template>
  <div>

    <DashLayout>
        <div>
            <table>
                <tr bgcolor="#cccccc" >
                    <td><strong>Name</strong></td>
                    <td><strong>Email</strong></td>
                    <td><strong>Age</strong></td>
                    <td><strong>Interest</strong></td>
                </tr>

                <tr v-for="(lead, index) in leadsData" :key="index">
                    <td>{{lead.name}}</td>
                    <td>{{lead.email}}</td>
                    <td>{{lead.Age}}</td>
                    <td>{{lead.interest}}</td>
                </tr>

            </table>    
        </div>   
      
    </DashLayout>
  </div>
</template>

<script>
import DashLayout from './DashLayout'
import bus from '../main'

export default {
  name: 'Leadmanage',
  components:{
    DashLayout
  },
  data () {
      return{
        
      }
  },
  created:{
    
  },
  computed:{
    leadsData(){
      return this.$store.getters.getLeadsdata;
    }
  }
}
</script>

<style scoped>
table {
    width: 100%
}
th, td {
  border: 1px solid black;
  width: 25%;
  padding:10px;
}
</style>