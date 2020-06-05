<template>
  <v-container class="pa-4">
    <Breadcrumbs :items="breadcrumbs" />
    <SectionTitle id="create-user-title" title="Nuevo Usuario" />

    <v-card>
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
          text: 'Nuevo'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
