<template>
  <div class="container">
    <Counter/>
    <Buttons/>
    <CounterSquared/>
    <ColourCode/>
  </div>
</template>

<script>
import Counter from '../src/components/Counter.vue'
import CounterSquared from '../src/components/CounterSquared.vue'
import Buttons from '../src/components/Buttons.vue'
import ColourCode from '../src/components/ColourCode.vue'

export default {
  name: 'Home',
  components: {
    Counter,
    CounterSquared,
    Buttons,
    ColourCode
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
