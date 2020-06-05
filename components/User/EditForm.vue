<template>
  <v-form
    ref="form"
    v-model="valid"
    autocomplete="off"
    lazy-validation
    class="text-center"
    @submit.prevent="submitForm()"
  >
    <v-text-field
      v-model="form.fullname"
      outlined
      :rules="rules.fullname"
      label="Nombres y apellidos"
    />
    <v-text-field
      v-model="form.email"
      outlined
      :rules="rules.email"
      label="Correo electrónico"
    />
    <v-text-field
      v-model="form.phoneNumber"
      v-mask="'(+##)#########'"
      outlined
      :rules="rules.phoneNumber"
      label="Número de teléfono"
    />
    <v-text-field
      v-model="form.birthdate"
      v-mask="'##/##/####'"
      outlined
      :rules="rules.birthdate"
      label="Fecha de nacimiento"
      hint="dd/mm/aaaa"
    />

    <v-radio-group
      v-model="form.gender"
      class="mt-0 pt-0"
      row
      :rules="rules.gender"
    >
      <template v-slot:label>
        <div>Sexo</div>
      </template>
      <v-radio label="Masculino" value="male" />
      <v-radio label="Femenino" value="female" />
    </v-radio-group>

    <v-btn :disabled="!valid" color="success" class="mt-1" type="submit">
      Actualizar usuario
    </v-btn>
  </v-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

// eslint-disable-next-line no-useless-escape
const EMAIL_VALID_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  data: () => ({
    valid: true,
    form: {
      id: '',
      fullname: '',
      email: '',
      phoneNumber: '',
      birthdate: '',
      gender: ''
    },
    rules: {
      fullname: [v => !!v || 'Los nombres y apellidos son requeridos'],
      email: [
        v => !!v || 'El correo electrónico es requerido',
        v => EMAIL_VALID_REGEX.test(v) || 'El correo electrónico no es válido'
      ],
      phoneNumber: [
        v => !!v || 'El número de teléfono es requerido',
        v =>
          v.length >= 10 ||
          'El número de teléfono debe tener al menos 10 dígitos'
      ],
      birthdate: [
        v => !!v || 'La fecha de cumpleaños es requerida',
        v => v.length >= 10 || 'La fecha de nacimiento no es válida'
      ],
      gender: [v => !!v || 'El sexo es requerido']
    }
  }),

  computed: {
    ...mapState({
      users: state => state.users.users
    })
  },

  created () {
    const userId = this.$route.params.id
    this.getUser(userId)
  },

  methods: {
    ...mapActions({
      updateUser: 'users/updateUser'
    }),

    getUser (userId) {
      const user = this.users.find(item => item.id === userId)
      this.form = JSON.parse(JSON.stringify(user))
    },

    submitForm () {
      const formValid = this.$refs.form.validate()
      if (!formValid) {
        return
      }

      const { form: user } = this
      this.updateUser({ user })
      this.$snackbar.success('El usuario ha sido actualizado correctamente')
      this.$router.push({ name: 'users' })
    }
  }
}
</script>

<style lang="scss" scoped></style>
