<template>
  <div>

    <DashLayout>
        <div>
            <table>
                <tr bgcolor="#cccccc" >
                    <td><strong>Name</strong></td>
                    <td><strong>Age</strong></td>
                    <td><strong>Interest</strong></td>
                    <td><strong>Model</strong></td>
                </tr>

                <tr v-for="(lead, index) in leadsData" :key="index">
                    <td>{{lead.name}}</td>
                    <td>{{lead.Age}}</td>
                    <td>{{lead.interest}}</td>
                    <td>{{lead.model}}</td>
                </tr>

            </table>    
        </div>   
      
    </DashLayout>
  </div>
</template>

<script>
import DashLayout from './DashLayout'

export default {
  name: 'HelloWorld2',
  components:{
    DashLayout
  },
  data () {
      return{
        leadsData:[
          {
              name:'Sanju', Age: '20',interest: 'Car', model: 'GolfR'
          },
          {
              name:'Sanju', Age: '20',interest: 'Car', model: 'GolfR'
          },
          {
              name:'Sanju', Age: '20',interest: 'Car', model: 'GolfR'
          },
          {
              name:'Sanju', Age: '20',interest: 'Car', model: 'GolfR'
          }
        ]
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