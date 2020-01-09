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
            <router-link :to="{ name: 'login' }">
              use your account
            </router-link>
          </h2>

          <form @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input v-model="form.username" name="username" class="input" :class="{ 'is-danger': errors.has('username') }" type="text">
                <span v-if="errors.has('username')" class="help is-danger" v-text="errors.get('username')" />
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input v-model="form.email" name="email" class="input" :class="{ 'is-danger': errors.has('email') }" type="email">
                <span v-if="errors.has('email')" class="help is-danger" v-text="errors.get('email')" />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input v-model="form.password" name="password" class="input" :class="{ 'is-danger': errors.has('password') }" type="password">
                <span v-if="errors.has('password')" class="help is-danger" v-text="errors.get('password')" />
              </div>
            </div>

            <div class="field">
              <label class="label">Repeat password</label>
              <div class="control">
                <input v-model="form.repeatPassword" name="repeatPassword" class="input" type="password">
              </div>
            </div>

            <div class="field">
              <div class="control">
                <button class="button is-link">
                  <b-icon v-if="isLoading" icon="loading" custom-class="mdi-spin" />
                  <span>Submit</span>
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
import Errors from '@/utils/Errors'

export default {
  data () {
    return {
      isLoading: false,
      form: {
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
      },
      errors: new Errors()
    }
  },

  methods: {
    onSubmit () {
      this.isLoading = true

      axios.post('/register', this.form)
        .catch(({ response }) => {
          this.isLoading = false
          this.errors.record(response.data.violations)
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
