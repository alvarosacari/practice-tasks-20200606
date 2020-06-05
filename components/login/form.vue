<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="submitForm()"
  >
    <v-text-field
      v-model="email"
      autofocus
      outlined
      :rules="rules.email"
      label="Correo electrónico"
    />
    <v-text-field
      v-model="password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      outlined
      :rules="rules.password"
      label="Contraseña"
      @click:append="showPassword = !showPassword"
    />

    <v-btn :disabled="!valid" color="success" class="mt-1" type="submit">
      Ingresar
    </v-btn>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'

// eslint-disable-next-line no-useless-escape
const EMAIL_VALID_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const AT_LEAST_ONE_NUMBER_REGEX = /[0-9]/
const AT_LEAST_ONE_LOWERCASE_REGEX = /[a-z]/
const AT_LEAST_ONE_UPPERCASE_REGEX = /[A-Z]/

export default {
  data: () => ({
    valid: true,
    email: '',
    password: '',
    showPassword: false,
    rules: {
      email: [
        v => !!v || 'El correo electrónico es requerido',
        v => EMAIL_VALID_REGEX.test(v) || 'El correo electrónico no es válido'
      ],
      password: [
        v => !!v || 'La contraseña es requerida',
        v => v.length >= 8 || 'La contraseña debe tener al menos 8 caracteres',
        v =>
          AT_LEAST_ONE_NUMBER_REGEX.test(v) ||
          'La contraseña debe tener al menos 1 número',
        v =>
          AT_LEAST_ONE_LOWERCASE_REGEX.test(v) ||
          'La contraseña debe tener al menos 1 letra minúscula',
        v =>
          AT_LEAST_ONE_UPPERCASE_REGEX.test(v) ||
          'La contraseña debe tener al menos 1 letra mayúscula'
      ]
    }
  }),

  methods: {
    ...mapActions({
      authLogin: 'auth/login'
    }),

    async submitForm () {
      const formValid = this.$refs.form.validate()
      if (!formValid) {
        return
      }

      const { email, password } = this

      try {
        await this.authLogin({ email, password })
        this.$snackbar.success('Bienvenido Administrador')
        this.$router.push({ name: 'index' })
      } catch (error) {
        this.$snackbar.error(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
