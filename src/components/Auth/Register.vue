<template>
  <div class="columns">
    <div class="column red">
      Image
    </div>
    <div class="column">
      <div class="section">
        <div class="container">
          <h1 class="title has-text-centered">
            Register
          </h1>
          <h2 class="subtitle is-6 has-text-centered">
            <router-link to="/login">
              use your account
            </router-link>
          </h2>
          <form @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input v-model="username" name="username" class="input" type="text">
                <span v-if="errors.has('username')" class="help is-danger" v-text="errors.get('username')" />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input v-model="email" name="email" class="input" type="email">
                <span v-if="errors.has('email')" class="help is-danger" v-text="errors.get('email')" />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input v-model="password" name="password" class="input" type="password">
                <span v-if="errors.has('password')" class="help is-danger" v-text="errors.get('password')" />
              </div>
            </div>
            <div class="field">
              <label class="label">Repeat password</label>
              <div class="control">
                <input v-model="repeatPassword" name="repeatPassword" class="input" type="password">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button :disabled="errors.any()" class="button is-link">
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

import axios from 'axios'
import Errors from '../../utils/Errors'

export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      errors: new Errors()
    }
  },

  methods: {
    onSubmit () {
      axios.post('https://api.im-not-your-mother.com/api/register', this.$data)
        .then(this.onSuccess)
        .catch(error => (this.errors.record(error.response.data.violations)))
    },

    onSuccess () {
      alert('Success')
    }
  }
}
</script>

<style>
.red {
  background-color: #F1CDB0;
}
</style>
