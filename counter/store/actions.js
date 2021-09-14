import axios from 'axios'

const actions = {
  async increaseCounter({ commit }, api){
    try {
      const res = await axios.get(api)
      commit('increaseCounter', res.data) // this is calling the mutation 
    } catch (error) {
      console.log(error)
    }
    // state.counter++
  },
  async decreaseCounter({ commit }, api){
    try {
      const res = await axios.get(api)
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