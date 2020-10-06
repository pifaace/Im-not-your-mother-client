<template>
  <b-navbar>
    <template slot="start">
      <b-navbar-item tag="div">
        <!-- {{ user.username }} -->
        pseudo
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
export default {
  methods: {
    logout () {
      this.$auth.logout({
        returnTo: window.location.origin
      })
    }
  }
}
</script>
