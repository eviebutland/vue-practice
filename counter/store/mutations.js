const mutations = {
  increaseCounter(state, payload){
   return state.counter += payload
  },
  decreaseCounter(state, payload){
    state.counter -= payload
  },
  changeColourCode(state, color){
    state.colorCode = color
  }
}

export default mutations