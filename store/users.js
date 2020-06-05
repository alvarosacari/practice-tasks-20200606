import { ADD_USER, UPDATE_USER } from '~/types/mutation-types'

export const state = () => ({
  users: [
    {
      id: 1,
      fullname: 'Alvaro Sacari A.',
      email: 'alvaro.sacari@gmail.com',
      phoneNumber: '+51948565643',
      birthdate: '12/12/2012',
      gender: 'male'
    }
  ]
})

export const actions = {
  addUser ({ commit }, payload) {
    commit('ADD_USER', payload)
  },

  updateUser ({ commit }, payload) {
    commit('UPDATE_USER', payload)
  }
}

export const mutations = {
  [ADD_USER] (state, { user }) {
    const latestUser = state.users[state.users.length - 1]
    user.id = latestUser.id + 1
    state.users.push(user)
  },

  [UPDATE_USER] (state, { user }) {
    const index = state.users.findIndex(item => item.id === user.id)
    state.users[index] = user
  }
}
