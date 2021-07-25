<template>
  <header>
    <h1>{{title}}</h1>
    <Button v-show="homePage" @btn-click="$emit('toggle-add-task')" :text="showAddTasks ? 'Close' : 'Add task'"/>
    <Tasks></Tasks>
  </header>
</template>

<script>
import Button from './Button.vue'
import Tasks from './Tasks.vue'

export default {
  name: 'Header',
  props: {
    title: String,
    showAddTasks: Boolean
  },
  computed: {
    homePage() {
      if(this.$route.path === '/'){
        return true
      } else {
        return false
      }
    }
  },
  components: {
    Button,
    Tasks
  }
}
</script>
<style scoped>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>