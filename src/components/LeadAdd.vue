<template>
  <div>

    <DashLayout>

        <div class="form-group marginB">
          <label class="control-label col-sm-2" for="email">Name:</label>
          <div class="col-sm-10">
          <input type="email" class="form-control" id="email" placeholder="Enter Name">
          </div>
        </div>

        <div class="form-group marginB" >
          <label class="control-label col-sm-2" for="email">Age:</label>
          <div class="col-sm-10">
          <input type="email" class="form-control" id="email" placeholder="Enter Age">
          </div>
        </div>

        <div class="form-group marginB">
          <label class="control-label col-sm-2" for="email">Interest:</label>
          <div class="col-sm-10">
          <input type="email" class="form-control" id="email" placeholder="Enter Interest">
          </div>
        </div>

        <div class="form-group marginB">
          <label class="control-label col-sm-2" for="email">Model:</label>
          <div class="col-sm-10">
          <input type="email" class="form-control" id="email" placeholder="Enter Model">
          </div>
        </div>

        <div class="form-group marginB">
          <label class="control-label col-sm-2" for="email"></label>
          <div class="col-sm-10">
          <button type="submit" class="btn btn-default">Save</button>
          </div>
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
    return {
      msg: 'Welcome to Your Vue.js App'
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
