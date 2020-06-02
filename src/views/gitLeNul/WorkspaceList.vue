<template>
  <div>
    <flash-message flash-key="success-invitation" type="is-success" />
    <h2>Workspace list</h2>
    <ul>
      <li v-for="workspace in workspaces" :key="workspace.id">
        <router-link
          :to="{ name: 'workspaceHome', params: { id: workspace.id } }"
        >
          {{ workspace.name }}
        </router-link>
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
      <create-workspace-form @workspace-created="addWorkspace" />
    </b-modal>
  </div>
</template>

<script>
import flashMessage from '@/components/Flash'
import CreateWorkspaceForm from '@/components/workspaces/CreateWorkspaceForm'
import { apiWorkspaceList } from '@/logic/workspaces/Workspace.api'

export default {
  components: {
    flashMessage,
    CreateWorkspaceForm
  },

  data () {
    return {
      workspaces: {},
      isComponentModalActive: false
    }
  },

  async mounted () {
    this.workspaces = (await apiWorkspaceList()).data
  },

  methods: {
    addWorkspace (workspace) {
      this.workspaces.push(workspace)
    }
  }
}
</script>
