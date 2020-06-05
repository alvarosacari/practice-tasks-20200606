<template>
  <v-container class="pa-4">
    <Breadcrumbs :items="breadcrumbs" />
    <SectionTitle id="users-title" title="Usuarios" />
    <v-row>
      <v-col>
        <UsersDataTable />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs'
import SectionTitle from '~/components/SectionTitle'
import UsersDataTable from '~/components/users/DataTable'

export default {
  components: {
    Breadcrumbs,
    SectionTitle,
    UsersDataTable
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
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
