<template>
  <v-container class="pa-4">
    <Breadcrumbs :items="breadcrumbs" />
    <SectionTitle id="edit-user-title" title="Editar Usuario" />

    <v-card>
      <v-card-text class="pa-4">
        <UserEditForm />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs'
import SectionTitle from '~/components/SectionTitle'
import UserEditForm from '~/components/User/EditForm'

export default {
  components: {
    Breadcrumbs,
    UserEditForm,
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
          text: 'Editar usuario'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
