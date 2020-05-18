<template>
  <div>
    <flash-message flash-key="success-invitation" type="is-success" />
    <h2>Workspace list</h2>
    <ul>
      <li v-for="workspace in workspaces" :key="workspace.id">
        {{ workspace.name }}
      </li>
    </ul>
    <b-button @click="isComponentModalActive = true">
      New workspace
    </b-button>
    <b-modal
      :active.sync="isComponentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <create-workspace-form />
    </b-modal>
  </div>
</template>

<script>
import flashMessage from '@/components/Flash'
import CreateWorkspaceForm from '@/components/workspaces/CreateWorkspaceForm'
import { mapState } from 'vuex'

export default {
  components: {
    flashMessage,
    CreateWorkspaceForm
  },

  data () {
    return {
      isComponentModalActive: false
    }
  },

  computed: mapState({
    workspaces: state => state.workspaces.workspaces
  }),

  mounted () {
    this.getWorkspaces()
  },

  methods: {
    getWorkspaces () {
      this.$store.dispatch('fetchWorkspaces')
    }
  }
}
</script>
