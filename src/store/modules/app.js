const state = {
  completed: 0
}

const getters = {
  completed: state => state.completed
}

const mutations = {
  completed: (state, payload) => state.completed += payload
}

const actions = {
}

export default { state, getters, mutations, actions }
