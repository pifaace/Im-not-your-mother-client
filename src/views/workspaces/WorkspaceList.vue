<template>
  <div>
    <flash-message flash-key="success-invitation" type="is-success" />
    <ul class="workspace-liste-container">
      <li v-for="(workspace, index) in workspaces" :key="workspace.id" class="workspace-card">
        <router-link
          :to="{ name: 'workspaceHome', params: { id: workspace.id } }" class="workspace-card-link"
        >
          {{ workspace.name }}
        </router-link>
        <span class="workspace-card-number">{{ index + 1 }}</span>
      </li>
      <li v-show="!isLoading" class="workspace-card button-add-workspace" @click="isComponentModalActive = true">
        New workspace
      </li>
    </ul>
    <b-modal
      :active.sync="isComponentModalActive"
      has-modal-card
      :destroy-on-hide="false"
      aria-role="dialog"
      :can-cancel="['x']"
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
import NProgress from 'nprogress'

export default {
  components: {
    flashMessage,
    CreateWorkspaceForm
  },

  data () {
    return {
      workspaces: [],
      isComponentModalActive: false,
      isLoading: true
    }
  },

  async mounted () {
    this.workspaces = (await apiWorkspaceList()).data
    NProgress.done()
    this.isLoading = false
  },

  methods: {
    addWorkspace (workspace) {
      this.workspaces.push(workspace)
    }
  }
}
</script>
