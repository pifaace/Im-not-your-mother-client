<template>
  <div id="app">
    <nav-bar v-if="$auth.isAuthenticated" />
    <router-view />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
