const mutations = {
  increaseCounter(state, payload){
   return state.counter += payload
  },
  decreaseCounter(state, payload){
    return state.counter -= payload
  },
  changeColourCode(state, color){
    return state.colorCode = color
  }
}

export default mutations