<template>
  <div class="columns">
    <div class="column red">
      Image
    </div>
    <div class="column">
      <div class="section">
        <div class="container">
          <h1 class="title has-text-centered">
            Login
          </h1>
          <h2 class="subtitle is-6 has-text-centered">
            <router-link :to="{ name: 'register' }">
              No account? Register now
            </router-link>
          </h2>
          <form @submit.prevent="login" @keypress="clear()">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input v-model="form.email" name="email" class="input" type="email" required>
                <span v-if="error" class="help is-danger" v-text="error" />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input v-model="form.password" name="password" class="input" type="password" minlength="8" required>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-link">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Auth from '@/utils/Auth'
import Form from '@/utils/Form'
import axios from 'axios'

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
      const auth = new Auth()
      if (!this.form.isCompleted()) {
        return false
      }

      /**
       * At this moment, Login credential error has a different structure than validation error so
       * I'm not using the error form manager for this one.
       */
      axios.post('/login_check', this.form.data())
        .then(({ data }) => {
          auth.storeToken(data.token)
          axios.defaults.headers.common.Authorization = 'Bearer ' + auth.getToken()
          this.$router.push({ name: 'workspaceList' })
        })
        .catch(({ response }) => {
          this.error = response.data.message
        })
    },

    clear () {
      this.error = null
    }
  }
}
</script>

<style>
.red {
  background-color: #F1CDB0;
}
</style>
