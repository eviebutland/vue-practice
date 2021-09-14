<template>
  <div class="buttons">
    <button id="btn-1" @click="decreaseCounter('https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new')">-</button>
    <button @click="increaseCounter('https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new')">+</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Buttons',
  methods: {
    ...mapActions(['decreaseCounter', 'increaseCounter'])
  }
}
</script>