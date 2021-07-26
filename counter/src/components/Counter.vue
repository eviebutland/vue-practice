<template>
  <div class="container">
    <div 
      :style="{color: $store.state.colorCode}"
      class="counter">
      {{ $store.state.counter }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
