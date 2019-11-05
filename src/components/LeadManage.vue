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
                    <td><strong>Action</strong></td>
                </tr>

                <tr v-for="(lead, index) in leadsData" :key="index">
                    <td>{{lead.name}}</td>
                    <td>{{lead.email}}</td>
                    <td>{{lead.age}}</td>
                    <td>{{lead.interest}}</td>
                    <td><router-link :to="{ name: 'LeadEdit', params: {id:lead.id}}">Edit</router-link></td>
                </tr>

            </table>    
        </div>   
      
    </DashLayout>
  </div>
</template>

<script>
import DashLayout from './DashLayout'

export default {
  name: 'Leadmanage',
  components:{
    DashLayout
  },
  computed:{
    leadsData(){
      return this.$store.getters.getLeadsdata;
    }
  },
  mounted () {
    this.$store.dispatch('getCurrentprice', '');
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