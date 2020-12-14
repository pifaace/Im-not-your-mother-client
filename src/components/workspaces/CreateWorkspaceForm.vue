<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <span class="title strong is-3">
            Create a group
          </span>
          <button
            type="button"
            class="delete"
            @click="$parent.close()"
          />
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Group name</label>
            <div class="control">
              <input v-model="form.name" name="name" class="input" type="text" placeholder="Enter your group name">
              <span v-if="form.errors.has('name')" class="help is-danger" v-text="form.errors.get('name')" />
            </div>
          </div>

          <div class="field">
            <label class="label">Email adress</label>
            <div class="control">
              <input v-model="email" class="input" type="text" placeholder="Friends email" @keydown="transformEmailIntoTag">
            </div>
          </div>
          <div v-for="tag in tags" :key="tag" class="field">
            <b-tag
              attached
              closable
              aria-close-label="Close tag"
              @close="removeEmail(tag)"
            >
              {{ tag }}
            </b-tag>
          </div>
          <span v-if="form.errors.has('numberOfWorkspaces')" class="help is-danger" v-text="form.errors.get('numberOfWorkspaces')" />
        </section>
        <footer class="modal-card-foot">
          <button class="button larger">
            Create
          </button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import Form from '@/utils/Form'
import { apiWorkspaceCreate } from '@/logic/workspaces/Workspace.api'

export default {
  data () {
    return {
      form: new Form({
        name: '',
        emails: []
      }),
      email: '',
      tags: []
    }
  },
  methods: {
    async onSubmit () {
      try {
        const workspace = (await apiWorkspaceCreate(this.form.data())).data
        this.$emit('workspace-created', workspace)
      } catch (error) {
        this.form.onFail(error)
      }
    },

    transformEmailIntoTag (event) {
      if (event.key === ',' && this.emailFormat()) {
        this.tags.push(this.email)
        this.form.emails.push(this.email)
        this.email = ''
        event.preventDefault()
      }
    },

    emailFormat () {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(this.email)
    },

    removeEmail (emailToRemove) {
      this.form.emails = this.form.emails.filter(email => email !== emailToRemove)
      this.tags = this.tags.filter(tag => tag !== emailToRemove)
    }
  }
}
</script>

<style lang="scss" scoped></style>
