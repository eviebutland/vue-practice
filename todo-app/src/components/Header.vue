<template>
  <header>
    <h1>{{title}}</h1>
    <Button text="Update task"/>
  </header>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Header',
  props: ['title'],
  components: {
    Button
  }
}
</script>
<style scoped>
  h1 {
    display: flex;
  }
  header {
    display: flex;
    justify-content: center;
  }
</style>