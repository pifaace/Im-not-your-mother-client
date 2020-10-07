<template>
  <div id="app">
    <navbar v-if="$auth.isAuthenticated" />
    <router-view />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
