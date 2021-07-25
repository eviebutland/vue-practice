<template>
  <div>
    <div v-for="task in tasks" :key="task.id" class="container">
      <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task"></Task>
    </div>
  </div>
</template>

<script>
import Task from './Task.vue'

export default {
  name: 'Tasks',
  props: {
    tasks: Array
  },
  components: {
    Task
  },
  emits: ['delete-task', 'toggle-reminder']

}
</script>
<style scoped>
  .container {
    text-align: left;
    margin: 0 auto;
    width: 300px
  }
</style>