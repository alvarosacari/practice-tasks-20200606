<template>
  <v-container class="pa-4">
    <Breadcrumbs :items="breadcrumbs" />
    <SectionTitle id="index-title" title="Dashboard" />
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <ModuleCard
          title="Usuarios"
          subtitle="Gestionar usuarios"
          icon="mdi-account-group"
          :to="{ name: 'users' }"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs'
import SectionTitle from '~/components/SectionTitle'
import ModuleCard from '~/components/ModuleCard'

export default {
  components: {
    Breadcrumbs,
    SectionTitle,
    ModuleCard
  },
  data () {
    return {
      breadcrumbs: [
        {
          text: 'Inicio'
        }
      ]
    }
  }
}
</script>
