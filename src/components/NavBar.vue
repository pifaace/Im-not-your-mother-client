<template>
  <b-navbar>
    <template slot="start">
      <b-navbar-item tag="div">
        {{ user.username }}
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div>
          <a class="button is-primary" @click="logout">
            <strong>Logout</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ]),
    ...mapState({
      user: state => state.auth.user
    })
  },
  created () {
    this.$store.dispatch('fetchUser')
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss" scoped></style>
