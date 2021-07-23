<template>
  <h3>{{ task }}</h3>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object
  }
}
</script>