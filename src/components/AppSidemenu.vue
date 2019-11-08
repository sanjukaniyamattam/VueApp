<template>
  <div>

    <nav>
        <ul>
          <li><router-link to="/Dash">Home</router-link></li>
          <li><router-link to="/LeadAdd">Add Lead</router-link></li>
          <li><router-link to="/LeadManage">Manage Lead</router-link></li>
          <li><router-link to="/Gallery">Images</router-link></li>
        </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'AppSidemenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Create two columns/boxes that floats next to each other */
nav {
  float: left;
  width: 20%;
  height: 450px; /* only for demonstration, should be removed */
  background: #ccc;
  padding: 20px;
}

/* Style the list inside the menu */
nav ul {
  list-style-type: none;
  padding: 0;
}

/* Clear floats after the columns */
section:after {
  content: "";
  display: table;
  clear: both;
}


</style>
