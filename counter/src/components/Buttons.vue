<template>
  <div class="buttons">
    <button @click="decreaseCounter">-</button>
    <button @click="increaseCounter">+</button>
  </div>
</template>

<script>
export default {
  name: 'Buttons',
  methods: {
    decreaseCounter() {
      return this.$store.dispatch('decreaseCounter')
    },
    increaseCounter(){
      return this.$store.dispatch('increaseCounter')
    }
  }
}
</script>