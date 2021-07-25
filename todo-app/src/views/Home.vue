<template>
  <main>
    <AddTask v-show="showAddTasks" @add-task="addTask"></AddTask>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
  </main>
</template>

<script>
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'

export default {
  name: 'Home',
  components: {
    Tasks,
    AddTask
  },
  props:  {
    showAddTasks: Boolean
  },
  data(){
    return {
      tasks: []
    }
  },
  async created() {
    this.tasks = await this.fetchTasks()
  },
  methods: {
    async fetchTasks () {
      const res = await fetch('api/tasks')
      const results  = await res.json()
      return results
    },
    async fetchTask (id) {
      const res = await fetch(`api/tasks/${id}`)
      const results  = await res.json()
      return results
    },
    async deleteTask(id){
      if(confirm('Are you sure')){
        try {
          const res = await fetch(`api/tasks/${id}`, 
          { 
            method: 'DELETE'
          })
          res.status === 200 ? this.tasks = this.tasks.filter((task) => task.id !== id ) : alert("deleting task failed")
        } catch(error){
          console.log(error)
        }
      }
    },
    async toggleReminder(id){
      try {
        const res = await fetch(`api/tasks/${id}`)
        const taskToToggle =  await res.json()
        const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

        const updated = await fetch(`api/tasks/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(updateTask)
        })
        const data = await updated.json()
        this.tasks = this.tasks.map((task) => task.id === id ? {...task, data} : task)
      } catch (error) {
        console.log(error)
      }
    },
    async addTask (task){
      try {
        const res = await fetch('api/tasks', 
        { 
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(task)
        })
        const data = res.json()
        this.tasks = [...this.tasks, data]
      } catch (error){
        console.log(error)
      }
    },
  }
}
</script>