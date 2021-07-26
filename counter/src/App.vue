<template>
  <Home/>
</template>

<script>
import Home from '../views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  margin: 10px
}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size:40px;
  width: 100px
}
</style>
