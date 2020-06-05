<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4" class="text-center">
      <v-avatar color="accent">
        <v-icon size="x-large" dark>
          mdi-lock
        </v-icon>
      </v-avatar>
      <h1 class="headline mt-2 mb-6">
        Inciar sesión
      </h1>
      <v-alert type="info" class="text-left mb-8" border="left" :icon="false">
        <div><strong>Usuario demo:</strong></div>
        <div>Correo electrónico: admin@admin.com</div>
        <div>Contraseña: !Admin123@test</div>
      </v-alert>
      <loginForm />
      <div class="mt-2 text--secondary">
        <v-btn
          color="primary"
          class="text-capitalize"
          text
          small
        >
          ¿Olvidaste tu contraseña?
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import loginForm from '~/components/login/form'

export default {
  layout: 'public',
  components: {
    loginForm
  }
}
</script>

<style lang="scss" scoped></style>
