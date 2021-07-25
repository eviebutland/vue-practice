const app = Vue.createApp({
  template: '',
  data() {
    return {
      firstName: 'John',
      lastName: 'doe',
      email: 'email@address.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
    }
  },
  methods: {
    async getUser() {
      try {
        const res = await fetch('https://randomuser.me/api/')
        const { results } = await res.json()

        this.firstName = results[0].name.first
        this.lastName = results[0].name.last
        this.gender = results[0].gender
        this.email = results[0].email
        this.picture = results[0].picture.medium
      } catch (error){
        console.log(error)
      }
    }
  }
})

app.mount('#app')