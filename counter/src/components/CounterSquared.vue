<template>
  <div class="counter-squared">
    {{ $store.state.counter}}
    <sup>2</sup> =
    {{$store.getters.getSquared}}
  </div>
</template>
<script>
export default {
  name: 'CounterSquared'
}
</script>