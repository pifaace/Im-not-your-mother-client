<template>
  <div id="app">
    <navbar v-if="$auth.isAuthenticated" />
    <div v-if="errorStatus == 404 || errorStatus == 401">
      <not-found />
    </div>
    <div v-else-if="errorStatus == 500">
      <network-issue />
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import NotFound from '@/components/errors/NotFound'
import NetworkIssue from '@/components/errors/NetworkIssue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar,
    NotFound,
    NetworkIssue
  },

  computed: {
    ...mapGetters(['errorStatus'])
  }
}
</script>
