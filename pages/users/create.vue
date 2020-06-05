<template>
  <v-container class="pa-4">
    <Breadcrumbs :items="breadcrumbs" />
    <SectionTitle id="create-user-title" title="Nuevo Usuario" />

    <v-card :loading="processingForm">
      <v-card-text class="pa-4">
        <UserCreateForm />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs'
import SectionTitle from '~/components/SectionTitle'
import UserCreateForm from '~/components/User/CreateForm'

export default {
  components: {
    Breadcrumbs,
    UserCreateForm,
    SectionTitle
  },

  data () {
    return {
      breadcrumbs: [
        {
          text: 'Inicio',
          to: { name: 'index' }
        },
        {
          text: 'Usuarios',
          to: { name: 'users' }
        },
        {
          text: 'Nuevo',
          to: { name: 'users-create' }
        }
      ],
      form: {
        name: '',
        last_name: '',
        phone: '',
        address: ''
      },
      validForm: true,
      processingForm: false,
      error: null,
      rules: {
        name: [v => !!v || 'El nombre es requerido'],
        last_name: [v => !!v || 'El apellido es requerido'],
        phone: [v => !!v || 'El teléfono o celular es requerido'],
        address: [v => !!v || 'La dirección es requerida']
      }
    }
  },

  methods: {
    create () {
      if (!this.$refs.createUserForm.validate()) { return false }

      this.$snackbar.info('Creando usuario')
      this.processingForm = true
      const data = this.form

      this.$userAPI.post({ data })
        .then((response) => {
          this.$snackbar.success('El usuario se ha creado con éxito')
          this.$router.push({ name: 'users' })
        })
        .catch((error) => {
          this.$snackbar.error(`Ocurrió un error: ${error.message}`)
          this.error = error
        })
        .finally(() => {
          this.processingForm = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
