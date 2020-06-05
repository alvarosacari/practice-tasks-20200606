<template>
  <h2 :id="id" class="pt-5 pb-2">
    <v-btn icon color="primary" @click="$vuetify.goTo(`#${id}`)">
      <v-icon>
        mdi-pound
      </v-icon>
    </v-btn>
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    id: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>

</style>
