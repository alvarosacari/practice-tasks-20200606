<template>
  <v-card :loading="loadingData">
    <v-app-bar flat>
      <v-text-field
        v-model="search"
        dense
        outlined
        placeholder="Buscar"
        hide-details
        prepend-inner-icon="mdi-magnify"
        clearable
      />
      <v-btn :to="{ name: 'users-create' }" color="primary" class="ml-2">
        Agregar
      </v-btn>
    </v-app-bar>

    <v-data-table
      :headers="headers"
      :items="usersForTable"
      :search="search"
      calculate-widths
    >
      <template v-slot:item.name="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              :to="{ name: 'users-id-references', params: { id: item.id } }"
              color="primary"
              class="text-capitalize"
              text
              v-on="on"
            >
              {{ item.name }}
            </v-btn>
          </template>
          <span>Ver referencias laborales</span>
        </v-tooltip>
      </template>
      <template v-slot:item.action="{ item }">
        <div class="mx-n3">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                :to="{ name: 'users-id', params: { id: item.id } }"
                color="info"
                icon
                v-on="on"
              >
                <v-icon>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </template>
            <span>Editar</span>
          </v-tooltip>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Nombres y apellidos', value: 'fullname' },
        { text: 'Correo electrónico', value: 'email' },
        { text: 'Fecha de nacimiento', value: 'birthdate' },
        { text: 'Número de teléfono', value: 'phoneNumber' },
        { text: 'Sexo', value: 'gender' },
        { text: 'Acciones', value: 'action', sortable: false, width: 100, align: 'center' }
      ],
      search: '',
      loadingData: false
    }
  },

  computed: {
    ...mapState({
      users: state => state.users.users
    }),

    usersForTable () {
      const { users } = this
      return users.map((item) => {
        const gender = item.gender
        const newItem = { ...item }

        if (gender === 'male') {
          newItem.gender = 'Masculino'
        } else if (gender === 'female') {
          newItem.gender = 'Femenino'
        }
        return newItem
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
