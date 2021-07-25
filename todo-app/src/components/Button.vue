<template>
  <button @click="onClick()">{{text}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: ['text'],
  methods: {
    onClick() {
      console.log('click')
      this.$emit('btn-click')
    }
  }
}
</script>
<style scoped>
  button {
    background-color: green;
    border: none;
    padding: 15px;
    border-radius: 10px;
    margin: 0 10px;
  }
</style>