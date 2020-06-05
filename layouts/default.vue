<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-img
        v-if="isAuthenticated"
        :aspect-ratio="16 / 9"
        :src="require('~/assets/images/material.jpg')"
      >
        <v-row align="end" class="lightbox fill-height">
          <v-col class="pb-0">
            <v-list dark class="pa-0" dense>
              <v-list-item two-line>
                <v-list-item-avatar color="primary" class="mr-4">
                  <v-img :src="require('~/assets/images/face.jpg')" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="user.name" />
                  <v-list-item-subtitle v-text="user.email" />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-img>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item @click="logout()">
          <v-list-item-action>
            <v-icon>mdi-power</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Cerrar sesión'" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <Snackbar />
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Snackbar from '~/components/Snackbar'

export default {
  components: {
    Snackbar
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-account-group',
          title: 'Usuarios',
          to: '/users'
        }
      ],
      miniVariant: false,
      title: 'Practice Work 2020-06-06'
    }
  },

  computed: {
    ...mapState({
      user: state => state.auth.user,
      isAuthenticated: state => state.auth.isAuthenticated
    })
  },

  methods: {
    ...mapActions({
      authLogout: 'auth/logout'
    }),

    logout () {
      this.authLogout()
      this.$snackbar.success('Hasta pronto!')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.lightbox {
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}
</style>
