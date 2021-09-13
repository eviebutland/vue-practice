<template>
  <div class="counter-squared">
    {{ $store.state.counter}}
    <sup>2</sup> =
    {{getSquared}}
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CounterSquared',
  computed: {
    ...mapGetters['getSquared']
  }
}
</script>