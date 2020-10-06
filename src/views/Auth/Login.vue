<template>
  <div v-if="!$auth.loading">
    <!-- show login when not authenticated -->
    <button v-if="!$auth.isAuthenticated" @click="login">
      Log in
    </button>
    <!-- show logout when authenticated -->
    <button v-if="$auth.isAuthenticated" @click="logout">
      Log out
    </button>
  </div>
</template>

<script>
import Form from '@/utils/Form'

export default {
  data () {
    return {
      form: new Form({
        email: '',
        password: ''
      }),
      error: null
    }
  },

  methods: {
    login () {
      this.$auth.loginWithRedirect()
    },
    logout () {
      this.$auth.logout({
        returnTo: window.location.origin
      })
    }
  }
}
</script>

<style>
.red {
  background-color: #F1CDB0;
}
</style>
