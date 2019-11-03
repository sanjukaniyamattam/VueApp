<template>
  <div>

    <header>
    <h2>{{msg}}</h2>
    </header>

  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      msg: 'Welcome To Skoda'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the header */
header {
  background-color: #666;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: white;
}


</style>
