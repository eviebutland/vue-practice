<template>
<!-- $emit shares the values up from child to parent  -->
  <div @click="$emit('toggle-reminder', task.id)" :class="[task.reminder && 'reminder', 'task'] ">
      <h3>{{ task.text }}
        <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
      </h3>
      <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object
  }
}
</script>
<style scoped>
  .task {
    text-align: left;
    margin: 10px;
    padding: 0 10px;
    border-left: 5px solid transparent;

  }
  .reminder {
    border-left: 5px solid green;
  }
  h3 {
    display: flex;
    justify-content: space-between;
  }
</style>