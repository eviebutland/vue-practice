import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: { // where we store our data
    counter: 0,
    colorCode: 'blue'
  },
  mutations: { // methods that change data in state - only way to modify the state - cannot trigger asynchronous code in a mutation (COMMIT MUTATIONS)
    increaseCounter(state, payload){
      state.counter += payload
    },
    decreaseCounter(state, payload){
      state.counter -= payload
    },
    changeColourCode(state, color){
      state.colorCode = color
    }
  },
  actions: { // also methods but cannot change data in the state, they can access data in the state, able to call a mutation from within an action? Can have aschronus code here (DISPATCH ACTIONS)
    async increaseCounter({ commit }){
      try {
        const res = await axios.get('https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new')
        commit('increaseCounter', res.data) // this is calling the mutation 
      } catch (error) {
        console.log(error)
      }
      // state.counter++
    },
    async decreaseCounter({ commit }){
      try {
        const res = await axios.get('https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new')
        commit('decreaseCounter', res.data) // this is calling the mutation 
      } catch (error) {
        console.log(error)
      }
    },
    changeColourCode({ commit }, color){
      commit('changeColourCode', color) // this is calling the mutation 
    }
  },
  modules: { // able to break down state futher, having its own state, actions, mutations and getters

  },
  getters: { // retrieve data - able to filter etc 
    getSquared(state){
      console.log('get squared', state.counter * state.counter)
      return state.counter * state.counter
    }
  }
})
