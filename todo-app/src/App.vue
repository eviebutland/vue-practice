<template>
  <main>
    <Header 
      @toggle-add-task="toggleAddTask" 
      title="Task Tracker"
      :showAddTasks="showAddTasks"/>
      <!-- able to pass props into the view components -->
      <router-view :showAddTasks="showAddTasks"></router-view>
    <Footer></Footer>
  </main>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return {
      showAddTasks: false
    }
  },
  methods: {
    toggleAddTask(){
      this.showAddTasks = !this.showAddTasks
    },
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
</style>
