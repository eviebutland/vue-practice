<template>
  <div class="container">
    <div 
      :style="{color: $store.state.colorCode}"
      class="counter">
      {{ printCounter() }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    msg: String
  },
  methods: {
    printCounter() {
      return this.$store.state.counter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
