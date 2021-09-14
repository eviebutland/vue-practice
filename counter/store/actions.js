import axios from 'axios'

const actions = {
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
}

export default actions