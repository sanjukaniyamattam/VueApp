<template>
  <div>
    <AppHeader></AppHeader>

    <section>
      <AppSidemenu></AppSidemenu>
      <article>
      <slot></slot>
      </article>
    </section>

    <AppFooter></AppFooter>

  </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppSidemenu from './AppSidemenu'
import AppBody from './AppBody'
import AppFooter from './AppFooter'

export default {
  name: 'DashLayout',
  components:{
    AppHeader, AppSidemenu, AppBody, AppFooter  
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
article {
  float: left;
  padding: 20px;
  width: 80%;
  background-color: #f1f1f1;
  height: 450px; /* only for demonstration, should be removed */
}
</style>
