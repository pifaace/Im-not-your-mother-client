<template>
  <div id="app">
    <nav-bar v-if="isLoggedIn" />
    <router-view />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    NavBar
  },

  computed: mapGetters([
    'isLoggedIn'
  ])
}
</script>
