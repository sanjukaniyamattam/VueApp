<template>
  <div>

    <DashLayout>

        <h1>This is home page</h1>
        <p>This is home page content</p>
      
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
      msg: 'Welcome to Your Vue.js App',
      Isloading:''
    }
  },
  beforeMount() {
    this.Isloading=false;
     
  },
  mounted(){
     this.Isloading=true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>






</style>
