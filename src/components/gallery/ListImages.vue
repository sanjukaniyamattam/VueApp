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
                    <td><strong></strong></td>
                </tr>

                <tr v-for="(image, index) in getallImages" :key="index">
                    <td>{{image.employee_name}}</td>
                    <td>{{image.employee_salary}}</td>
                    <td>{{image.employee_age}}</td>
                    <td>{{image.title}}</td>
                    <td></td>
                </tr>

            </table>    
        </div>   
      
    </DashLayout>
  </div>
</template>

<script>
import DashLayout from './../DashLayout'

export default {
  name: 'imagemanage',
  components:{
    DashLayout
  },
  computed:{
    getallImages(){
      return this.$store.getters.getImages;
    }
  },
  mounted(){
    this.$store.dispatch('getImages', '')
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