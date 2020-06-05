import { AUTH_LOGIN, AUTH_LOGOUT } from '~/types/mutation-types'

const ADMIN = {
  name: 'Administrador',
  email: 'admin@admin.com',
  password: '!Admin123@test'
}
const LOGIN_RESPONSE_MESSAGE = 'Bienvenido Administrador'
const LOGIN_ERROR_MESSAGE = 'El usuario o la contraseña no son correctos'

const authVerification = (email, password) => {
  return email === ADMIN.email && password === ADMIN.password
}

export const state = () => ({
  isAuthenticated: false,
  user: null
})

export const actions = {
  login ({ commit }, payload) {
    const { email, password } = payload
    const response = LOGIN_RESPONSE_MESSAGE
    const error = LOGIN_ERROR_MESSAGE

    return new Promise((resolve, reject) => {
      if (authVerification(email, password)) {
        commit('AUTH_LOGIN', payload)
        resolve(response)
      } else {
        reject(error)
      }
    })
  },

  logout ({ commit }, payload) {
    commit('AUTH_LOGOUT', payload)
  }
}

export const mutations = {
  [AUTH_LOGIN] (state) {
    state.isAuthenticated = true
    state.user = ADMIN
  },

  [AUTH_LOGOUT] (state) {
    state.isAuthenticated = false
    state.user = null
  }
}
