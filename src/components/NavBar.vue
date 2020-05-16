<template>
  <b-navbar v-if="isLoggedIn">
    <template slot="start">
      <b-navbar-item tag="div">
        user123
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
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'isLoggedIn'
  ]),
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss" scoped></style>
