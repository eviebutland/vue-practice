<template>
  <footer>
    <p>Copyright &copy; {{year}}</p>
    <router-link to="/about">About</router-link>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data(){
    return {
      year: '2020'
    }
  },
  created() {
      this.year = new Date().getFullYear()
  }
}
</script>