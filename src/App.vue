<template>
  <v-app>
    <v-app-bar app color="#474747">
      <v-toolbar-title class="white--text headline text-uppercase">
        <span class="blue--text">Perfect</span>
        <span class="white--text font-weight-light">Photo Editor</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="white--text font-weight-light"
        >Your photo will be 100% perfect every time.</span
      >
      <v-spacer></v-spacer>
      <span class="white--text font-weight-light">About</span>
    </v-app-bar>

    <v-content>
      <Checkboxes />
    </v-content>
  </v-app>
</template>

<script>
import Checkboxes from './components/Checkboxes.vue'

export default {
  name: 'App',
  components: {
    Checkboxes
  },
  data: () => ({
    //
  })
}
</script>
