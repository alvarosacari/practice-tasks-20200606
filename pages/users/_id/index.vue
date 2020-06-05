<template>
  <v-container class="pa-4">
    <Breadcrumbs :items="breadcrumbs" />
    <SectionTitle id="references-title" title="Editar usuario" />

    <v-row>
      <v-col>
        <v-card :loading="processingForm || loadingData">
          <v-card-text class="pa-4">
            <v-form
              id="updateUserForm"
              ref="updateUserForm"
              v-model="validForm"
              lazy-validation
              @submit.prevent="update"
            >
              <v-text-field
                v-model="form.name"
                :rules="rules.name"
                outlined
                label="Nombre"
              />
              <v-text-field
                v-model="form.last_name"
                :rules="rules.last_name"
                outlined
                label="Apellidos"
              />
              <v-text-field
                v-model="form.phone"
                :rules="rules.phone"
                outlined
                label="Teléfono ó celular"
              />
              <v-text-field
                v-model="form.address"
                :rules="rules.address"
                outlined
                label="Dirección"
              />
            </v-form>
            <div class="text-center">
              <v-btn
                :disabled="!validForm || processingForm"
                :loading="processingForm"
                color="primary"
                form="updateUserForm"
                type="submit"
              >
                Guardar
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Breadcrumbs from '~/components/Breadcrumbs'
import SectionTitle from '~/components/SectionTitle'

export default {
  components: {
    Breadcrumbs,
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
          text: 'Editar',
          to: { name: 'users-id', params: { id: this.$route.params.id } }
        }
      ],
      form: {
        name: '',
        last_name: '',
        phone: '',
        address: ''
      },
      loadingData: false,
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

  computed: {
    ...mapState({
    })
  },

  methods: {
    update () {
      if (!this.$refs.updateUserForm.validate()) { return false }

      this.$snackbar.info('Actualizando usuario')
      this.processingForm = true

      const id = this.$route.params.id
      const data = this.form

      this.$userAPI.put({ id, data })
        .then((response) => {
          this.$snackbar.success('El usuario ha sido actualizado con éxito')
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
