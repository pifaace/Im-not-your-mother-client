<template>
  <div>
    <flash-message flash-key="success-invitation" type="is-success" />
    <h2>Workspace list</h2>
    <ul>
      <li v-for="workspace in workspaces" :key="workspace.id">
        {{ workspace.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import flashMessage from '@/components/Flash'
import { apiWorkspaceList } from '@/logic/workspace/Workspace.api'

export default {
  components: {
    flashMessage
  },

  data () {
    return {
      workspaces: []
    }
  },

  created () {
    apiWorkspaceList()
      .then(({ data }) => {
        this.workspaces = data['hydra:member']
      })
  }
}
</script>
