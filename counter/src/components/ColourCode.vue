<template>
  <div>
      <input 
        v-model="colorCode"
        type="text" 
        placeholder="Enter colour code">
    </div>
</template>
<script>
export default {
  name: 'ColourCode',
  computed: { // to be used for a two way binding (reading and changing state)
    colorCode: {
      get(){
        return this.$store.state.colorCode
      },
      set(colour){
        this.$store.dispatch('changeColourCode', colour) // calling mutation
      }
    }
  }
}
</script>