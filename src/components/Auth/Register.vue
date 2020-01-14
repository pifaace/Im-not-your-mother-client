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
          <b-notification v-if="submitted" :closable="false" type="is-success">
            You have been registered successfully
          </b-notification>
          <form @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input v-model="form.username" name="username" class="input" type="text" required>
                <span v-if="form.errors.has('username')" class="help is-danger" v-text="form.errors.get('username')" />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input v-model="form.email" name="email" class="input" type="email" required>
                <span v-if="form.errors.has('email')" class="help is-danger" v-text="form.errors.get('email')" />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input v-model="form.password" name="password" class="input" type="password" minlength="8" required>
                <span v-if="form.errors.has('password')" class="help is-danger" v-text="form.errors.get('password')" />
              </div>
            </div>
            <div class="field">
              <label class="label">Repeat password</label>
              <div class="control">
                <input v-model="form.repeatPassword" name="repeatPassword" class="input" type="password" minlength="8" required>
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

import Form from '@/utils/Form'

export default {
  data () {
    return {
      form: new Form({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
      }),
      submitted: false
    }
  },

  methods: {
    onSubmit () {
      this.form.post('/register')
        .then(() => {
          this.submitted = true
        })
        .catch(() => {
          this.submitted = false
          console.log('error')
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
