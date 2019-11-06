<template>
  <div>

    <DashLayout>

        <div class="form-group marginB">
          <label class="control-label col-sm-2" for="email">Id:</label>
          <div class="col-sm-10">
          <input type="email" class="form-control" id="id" placeholder="Enter Id" v-model="formData.id">
          </div>
        </div>

        <div class="form-group marginB">
          <label class="control-label col-sm-2" for="email">Name:</label>
          <div class="col-sm-10">
          <input type="email" class="form-control" id="email" placeholder="Enter Name" v-model="formData.name">
          </div>
        </div>

        <div class="form-group marginB">
          <label class="control-label col-sm-2" for="email">Email:</label>
          <div class="col-sm-10">
          <input type="email" class="form-control" id="email" placeholder="Enter Email" v-model="formData.email">
          </div>
        </div>

        <div class="form-group marginB" >
          <label class="control-label col-sm-2" for="email">Age:</label>
          <div class="col-sm-10">
          <input type="text" class="form-control" id="email" placeholder="Enter Age" v-model="formData.age">
          </div>
        </div>

        <div class="form-group marginB">
          <label class="control-label col-sm-2" for="email">Interest:</label>
          <div class="col-sm-10">
          <select name="interest" class="form-control" v-model="formData.interest">
            <option value="Car">Car</option>
            <option value="Suv">SUV</option>
            <option value="Truck">Truck</option>
            <option value="Bus">Bus</option>
          </select>
          </div>
        </div>

        

        <div class="form-group marginB">
          <label class="control-label col-sm-2" for="email"></label>
          <div class="col-sm-10">
          <button type="submit" class="btn btn-default" v-on:click="leadSave();" >Save</button>
          </div>
        </div>

      
    </DashLayout>
  </div>
</template>

<script>
import DashLayout from './../DashLayout'

export default {
  name: 'LeadAdd',
  components:{
    DashLayout
  },

  data () {
    // return {
    //   msg: 'Welcome to Your Vue.js App'
    // }
    return {
      formData:{
        id: '',
        name: '',
        email: '',
        age:'',
        interest:''
      }
    }
  },

  methods:{
    leadSave(){
      //this.$emit('addlead', this.formData)
      this.$store.dispatch('addLead', this.formData);
      this.$router.push('LeadManage'); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.marginB{
  padding-bottom: 30px;
}

</style>
