<template>
  <div>
    <AppToolBar v-model="drawer" />
    <AppMenu v-model="drawer" />

    <v-container grid-list-md>
      <v-layout>
        <v-flex xs12>
          <slot />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AppMenu from './AppMenu.vue';
import AppToolBar from './AppToolBar.vue';

export default {
  name: 'AppLayout',
  components: {
    AppMenu,
    AppToolBar
  },
  data: () => ({
    drawer: false
  })
}
</script>
